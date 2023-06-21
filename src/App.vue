<template>
  <div id="app">
    <nav>
      <router-link to="/">

        <button class="button_home">
          <img v-bind:src="require(`@/assets/${icon_hm}`)" alt="HM" width="50" height="50">
        </button>

      </router-link>
    </nav>

    <router-view/>

    <PlatformsTabs></PlatformsTabs>

    <button v-on:click="activare_dark_mode" class="button_dark_mode">
      <img v-bind:src="require(`@/assets/${icon_dm}`)" alt="DM" width="50" height="50">
    </button>

  </div>
</template>

<script>

import PlatformsTabs from '@/components/PlatformsTabs.vue'

export default {
  name: 'App',
  components: {
    PlatformsTabs
  },
  data() {
    return {
      icon_dm: 'dark-mode.png',
      icon_hm: 'home.png'
    }
  },
  methods: {
    activare_dark_mode() {
      document.body.classList.toggle("dark-mode")
    }
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

.button_home {
  background: transparent;
  margin-left: 1%;
  margin-top: 0%;
  border: white
}

.button_home:hover {
  cursor: pointer;
  transform: scale(1.25);
  background: #FFF;
  color: #000;
}

.button_dark_mode {
  background: transparent;
  margin-left: 95%;
  margin-top: 1%;
  border: white;
}

.button_dark_mode:hover {
  cursor: pointer;
  transform: scale(1.25);
}

</style>
