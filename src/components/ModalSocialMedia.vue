<template>
  <div id="modal">
    <h1>{{msg}}</h1>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>

        <button style="background: white; margin: 5%; margin-left: 15%; border: white">
          <img v-bind:src="require(`@/assets/${icon_tw}`)" alt="TW" width="150" height="150">
          <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_tw_name}}</p>
        </button>

        <button style="background: white; margin: 5%; border: white">
          <img v-bind:src="require(`@/assets/${icon_in}`)" alt="IN" width="150" height="150">
          <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_in_name}}</p>
        </button>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ModalSocialMedia",
  props: {
    msg: String
  },
  data() {
    return {
      icon_tw: 'twitter.png',
      icon_in: 'linkedin.png',
      icon_tw_name: 'Twitter',
      icon_in_name: 'Linkedin',
    }
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