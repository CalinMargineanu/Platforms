<template>
  <div id="modal">
    <h1>{{msg}}</h1>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span v-on:click="close_modal" class="close">&times;</span>

        <button style="background: white; margin: 5%; margin-left: 15%; border: white">
          <img v-bind:src="require(`@/assets/${icon_pi}`)" alt="TW" width="150" height="150">
          <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_pi_name}}</p>
        </button>

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
  data() {
    return {
      icon_pi: 'pinterest.png',
      icon_pi_name: 'Pinterest',
    }
  },
  methods: {
    close_modal() {
      document.getElementById("myModal").style.display = 'none'
    },
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