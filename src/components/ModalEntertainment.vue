<template>
  <div id="modal">
    <h1>{{msg}}</h1>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>

        <button style="background: white; margin: 5%; margin-left: 15%; border: white">
          <img v-bind:src="require(`@/assets/${icon_pi}`)" alt="TW" width="150" height="150">
          <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_pi_name}}</p>
        </button>

        <br>
        <label>Introduce-ti email-ul</label>
        <input v-model="email" type="email">
        <br>
        <label>Nume</label>
        <input v-model="nume" type="text">
        <button v-on:click="save">Save</button>
        <br>
        <label>input</label>
        <input v-model="str" type="text">
        <p>lungime: {{calculeaza_lungime}}</p>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ModalEntertainment",
  props: {
    msg: String
  },
  computed: {
    calculeaza_lungime() {
      return this.str !== null ? this.str.length : 0
    }
  },
  data() {
    return {
      icon_pi: 'pinterest.png',
      icon_pi_name: 'Pinterest',
      email: 'margineanu.cd@gmail.com',
      resurse_backend: [
        {
          nume: 'Nan',
          adresa: 'nan@gmail.com',
        },
        {
          nume: 'Calin',
          adresa: 'margineanu.cd@gmail.com'
        }
      ],
      nume: '',
      str: null
    }
  },
  methods: {
    save() {
      this.resurse_backend.push({nume: this.nume, adresa: this.email})
      localStorage.setItem('email', this.email)
      localStorage.setItem('bc_resurse', JSON.stringify(this.resurse_backend))
    }
  },
  mounted() {
    let save_email = localStorage.getItem('email')
    if (save_email == null) {
      //alert('nu am salvat nimic')
    } else {
      //alert(save_email)
    }
    save_email == null ? alert('nu am salvat nimic') : alert(save_email)
    //alert(save_email)
    let br = localStorage.getItem('bc_resurse')
    let new_backend_resource = JSON.parse(br)
    console.log(new_backend_resource)
  }
}

</script>

<style scoped>

body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
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

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

</style>