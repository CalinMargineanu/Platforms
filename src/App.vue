<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <button style="background: transparent; margin-left: 1%; margin-top: 1%; border: white">
          <img v-bind:src="require(`@/assets/${icon_hm}`)" alt="HM" width="50" height="50">
        </button>
      </router-link>
    </nav>
    <router-view/>

    <button id="darkmode" style="background: transparent; margin-left: 90%; margin-top: 1%; border: white">
      <img v-bind:src="require(`@/assets/${icon_dm}`)" alt="DM" width="50" height="50">
    </button>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      icon_dm: 'dark-mode.png',
      icon_hm: 'home.png'
    }
  },
  mounted() {
    let button = document.getElementById("darkmode")
    button.addEventListener("click", function() {
      let element = document.body;
      element.classList.toggle("dark-mode");
    })
  }
}

</script>

<style>

body {
  padding: 25px;
  background-color: white;
  color: black;
  font-size: 25px;
}

.dark-mode {
  background-color: dimgrey;
  color: white;
}

</style>
