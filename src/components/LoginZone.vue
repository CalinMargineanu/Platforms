<template>
  <div id="login_zone">
    <h1>{{msg}}</h1>

<!--    Login zone-->
    <div class="container">
      <h1 style="text-align:center; font-size: xx-large">{{login_zone_text}}</h1>

      <input v-model="email" type="text" placeholder="Email" autocomplete="off">
      <br>
      <input ref="password" type="password" placeholder="Password">
      <br>
      <input v-on:click="login()" type="submit" value="Login">
    </div>

    <div class="button_container">
      <button class="button">{{sign_up}}</button>
      <button class="button">{{forgot_password}}</button>
    </div>

<!--    Lista conturi-->
    <div class="card" id="card" ref="card">
      <span v-on:click="remove" class="close">&times;</span>
      <img v-bind:src="require(`@/assets/${profile_image}`)" style="width: 40%; margin-left: auto; margin-right: auto; display: block">

      <div class="card_container">
        <p><b>{{email}}</b></p>
        <p>{{ status }} <span ref="dot" class="dot"></span></p>
        <button ref="logout" v-on:click="logout" class="button_logout">{{button_logout}}</button>
      </div>

    </div>

<!--    Modal-->
    <div ref="modal" id="myModal" class="modal">
      <div class="modal-content">
        <p>Are you sure that you want to remove the profile?</p>
        <button v-on:click="remove('remove')" ref="remove" class="button">{{button_remove}}</button>
        <button v-on:click="remove('cancel')" ref="cancel" class="button">{{button_cancel}}</button>
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
      login_zone_text: "Login",
      sign_up: "Sign Up",
      forgot_password: "Forgot password?",
      profile_image: 'avatar.png',
      email: '',
      button_logout: 'Logout',
      button_remove: 'Remove',
      button_cancel: 'Cancel',
      status: true
    }
  },
  methods: {
    login() {
      if (((!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) === false) && (this.$refs.password.value !== '')) {
        this.$refs.card.style.display = "block"
        this.status = 'Active'
      }
    },
    logout() {
        this.status = 'Inactive'
        this.$refs.dot.style.backgroundColor = "darkgrey"
        this.button_logout = "Login"
      },
    remove(click) {
      this.$refs.modal.style.display = "block"
      if(click === 'remove') {
        this.$refs.card.style.display = "none"
        this.$refs.modal.style.display = "none"
      } else if (click === 'cancel') {
        this.$refs.modal.style.display = "none"
      }
    }
  }
}



</script>

<style scoped>

/* style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 1px 0px 10px 0;
  width: 40%;
  margin-left: 30%;
  margin-top: -7%;
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
  font-size: 17px;
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
  float: left;
}

.button {
  margin-left: 3%;
  width: 45%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 17px;
}

button:hover {
  background-color: #45a049;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 8%;
  margin-left: 2%;
  width: 18%;
  display: none;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card_container {
  font-size: 20px;
  text-align: center;
  padding-bottom: 8px;
}

.button_logout {
  width: 45%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 17px;
}

button_logout:hover {
  background-color: #45a049;
}

.dot {
  height: 12px;
  width: 12px;
  background-color: limegreen;
  border-radius: 50%;
  display: inline-block;
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

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
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

</style>