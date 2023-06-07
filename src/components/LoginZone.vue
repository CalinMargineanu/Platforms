<template>
  <div id="login_zone">
    <h1>{{msg}}</h1>

<!--    Login zone-->
    <div class="login_zone_container">
      <h1 ref="h1" style="text-align:center; font-size: xx-large">{{login_zone_text}}</h1>

      <input ref="email" v-model="email_input" type="text" placeholder="Email" name="email" required>
      <br>
      <input v-on:keyup.enter="login" ref="password" v-model="password_input" type="password" placeholder="Password">
      <br>
      <input v-on:click="login()" v-on:keyup.enter="login" type="submit" value="Login">
    </div>

    <div class="button_container">
      <button class="button">{{sign_up}}</button>
      <button class="button">{{forgot_password}}</button>
    </div>

<!--    Lista conturi-->
    <div v-for="(card,index) in resurse_backend" :key="index" class="card" id="card" ref="card">
      <span v-on:click="remove('close',index)" class="close">&times;</span>
      <img v-on:click="show_modal_platform(index)" v-bind:src="require(`@/assets/${profile_image}`)" style="width: 40%; margin-left: auto; margin-right: auto; display: block">

      <div class="card_container">
        <p><b>{{card.email}}</b></p>
        <p>{{ card.status }} <span ref="dot" id="dot" class="dot">{{card.status_dot}}</span> </p>
        <button ref="logout" v-on:click="logout(index)" v-on:dblclick="relogin('true', index)" class="button_logout">{{card.button_logout}}</button>
        <button style="display: none" ref="login" v-on:click="relogin(index)" class="button_login">{{card.button_login}}</button>
      </div>

      <!--    Modal-->
      <div ref="modal" id="myModal" class="modal">
        <div class="modal-content">
          <p>Are you sure that you want to remove the profile?</p>
          <button v-on:click="remove('remove', index)" ref="remove" class="button">{{button_remove}}</button>
          <button v-on:click="remove('cancel', index)" ref="cancel" class="button">{{button_cancel}}</button>
        </div>
      </div>

      <div ref="modal_platform" id="modal_platform" class="modal_platform">
        <div class="modal_platform_content">
          <span ref="minimize_platform_content" id="minimize_platform_content" class="minimize_platform_content">_</span>
          <span v-on:click="close_modal_platform(index)" ref="close_platform_content" id="close_platform_content" class="close_platform_content">&times;</span>
          <h1 style="font-size: small">{{card.email}}</h1>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "LoginZone",
  props: {
    msg: String
  },
  data() {
    return {
      login_zone_text: "Add a new account",
      sign_up: "Sign Up",
      forgot_password: "Forgot password?",
      profile_image: 'avatar.png',
      button_logout: 'Logout',
      button_login: 'Login',
      button_remove: 'Remove',
      button_cancel: 'Cancel',
      email_input: '',
      password_input: '',
      email_card: '',
      status: '',
      status_dot: '', // de rezolvat
      resurse_backend: []
    }
  },
  methods: {
    login() {
      if (((!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email_input)) === false) && (this.password_input !== '')) {
        this.status = 'Active'
        this.resurse_backend.push({email: this.email_input, password: this.password_input, status: this.status, status_dot: this.status_dot, button_logout: this.button_logout, button_login: this.button_login})
        localStorage.setItem('Email', this.email_input)
        localStorage.setItem('Password', this.password_input)
        localStorage.setItem('Resurse BackEnd', JSON.stringify(this.resurse_backend))
        this.email_card = this.email_input
        this.email_input = ''
        this.password_input = ''
      }
    },
    logout(index) {
        console.log(index)
        this.resurse_backend[index].status = "Inactive"
        this.resurse_backend[index].buttons = "Login"
        this.$refs.logout[index].style.display = 'none'
        this.$refs.login[index].style.display = 'block'
        this.$refs.dot[index].style.backgroundColor = 'darkgrey'
    },
    relogin(index) {
        this.resurse_backend[index].status = 'Active'
        this.resurse_backend[index].buttons = 'Logout'
        this.$refs.login[index].style.display = 'none'
        this.$refs.logout[index].style.display = 'block'
        this.$refs.dot[index].style.backgroundColor = 'limegreen'
    },
    remove(button, index) {
      console.log(index)
      if (button === 'close') {
        this.$refs.modal[index].style.display = "block"
      }
      if (button === 'remove') {
        this.resurse_backend.splice(index, 1)
        this.$refs.modal[index].style.display = "none"
      } else if (button === 'cancel') {
        this.$refs.modal[index].style.display = "none"
      }
    },
    show_modal_platform(index) {
      this.$refs.modal_platform[index].style.display = 'block'
    },
    close_modal_platform(index) {
      console.log(index)
      this.$refs.modal_platform[index].style.display = 'none'
    }
  },
  mounted() {
    let resurse_backend_local = localStorage.getItem("Resurse BackEnd")
    this.resurse_backend = JSON.parse(resurse_backend_local)
    console.log(this.resurse_backend)

    window.addEventListener("click", function(event) {
      if (event.target === document.getElementById("modal_platform")) {
        document.getElementById("modal_platform").style.display = "none";
      }
    })
  }
}

</script>

<style scoped>

/* style the container */
.login_zone_container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 1px 0px 10px 0;
  width: 40%;
  margin-left: 30%;
  margin-top: -7%;
  position: absolute;
}

/* style inputs and link buttons */
input
{
  width: 40%;
  margin: 2%;
  margin-left: 30%;
  margin-top: 0%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1.2vw;
}

/* style the submit button */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  cursor: pointer;
  width: 45%;
  border-radius: 8px;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.button_container {
  border-radius: 5px;
  background-color: darkgrey;
  padding: 20px 0 20px 0;
  width: 40%;
  margin-left: 30%;
  margin-top: 10%;
  float: left;
  position: absolute;
}

.button {
  margin-left: 3%;
  width: 45%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1.2vw;
}

button:hover {
  background-color: #45a049;
}

.card {
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 20%;
  margin-left: 2%;
  width: 18%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card_container {
  font-size: 1.3vw;
  text-align: center;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  white-space: nowrap;
  overflow: hidden;
}

.card_container:hover {
  overflow: visible;
}

.dot {
  height: 12px;
  width: 12px;
  background-color: limegreen;
  border-radius: 50%;
  display: inline-block;
}

.button_logout {
  width: 45%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1.2vw;
}

button_logout:hover {
  background-color: #45a049;
}

.button_login {
  width: 45%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1.2vw;
}

button_login:hover {
  background-color: #45a049;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 30%;
  border: none;
  border-radius: 8px;
  text-align: center;
  font-size: x-large;
}

.close {
  color: #aaaaaa;
  margin-left: 90%;
  margin-top: -5%;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  text-decoration: none;
  cursor: pointer;
}

/* The Modal (background) */
.modal_platform {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal_platform_content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  height: 70%;

}

/* The Close Button */
.minimize_platform_content {
  position: fixed;
  margin-left: 87%;
  margin-top: -1.2%;
  color: #aaaaaa;
  float: right;
  font-size: 32px;
  font-weight: bold;
}

.minimize_platform_content:hover,
.minimize_platform_content:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

/* The Close Button */
.close_platform_content {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close_platform_content:hover,
.close_platform_content:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

</style>