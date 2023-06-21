<template>
  <div id="modal">
    <h1>{{msg}}</h1>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span v-on:click="close_modal()" class="close">&times;</span>

        <button v-on:click="open_Outlook" style="background: white; margin: 5%; margin-left: 15%; border: white" class="buttons_modal_email">
          <img v-bind:src="require(`@/assets/${icon_ol}`)" alt="TW" class="icons">
          <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_ol_name}}</p>
        </button>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ModalEmail",
  props: {
    msg: String
  },
  data() {
    return {
      icon_ol: 'outlook.png',
      icon_ol_name: 'Outlook',
    }
  },
  methods: {
    close_modal() {
      document.getElementById("myModal").style.display = 'none'
    },
    open_Outlook() {
      this.$router.push({name: 'OutlookView'})
    }
  }
}


</script>

<style scoped>

.icons {
  width: 150px;
  height: 150px;
}

.buttons_modal_email {
  background: transparent;
  margin: 5%;
  margin-top: 8%;
  border: white
}

.buttons_modal_email:hover {
  cursor: pointer;
  transform: scale(1.25);
  background: #FFF;
  color: #000;
}

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
  text-align: center;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: none;
  width: 40%;
  border-radius: 8px;
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
  color: red;
  text-decoration: none;
  cursor: pointer;
}

</style>