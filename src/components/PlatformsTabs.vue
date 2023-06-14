<template>
  <div id="platforms_tabs">
    <h1>{{msg}}</h1>

    <div class="tabs_container">

      <button ref="facebook" id="facebook" class="buttons">
        <img v-bind:src="require(`@/assets/${icon_fb}`)" width="70" height="70" alt="FB">
        <span ref="dot_facebook" id="dot_facebook" class="dot">{{rb}}</span>
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_ig}`)" alt="IG" width="70" height="70">
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_tw}`)" alt="TW" width="70" height="70">
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_in}`)" alt="IN" width="70" height="70">
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_gm}`)" alt="FB" width="70" height="70">
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_yh}`)" alt="IG" width="70" height="70">
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_ol}`)" alt="TW" width="70" height="70">
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_yt}`)" alt="FB" width="70" height="70">
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_tt}`)" alt="IG" width="70" height="70">
      </button>

      <button class="buttons">
        <img v-bind:src="require(`@/assets/${icon_pi}`)" alt="TW" width="70" height="70">
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: "PlatformsTabs",
  props: {
    msg: String
  },
  data() {
    return {
      icon_fb: 'facebook_version_2.png',
      icon_ig: 'instagram.png',
      icon_tw: 'twitter.png',
      icon_in: 'linkedin.png',
      icon_gm: 'gmail.png',
      icon_yh: 'yahoo.png',
      icon_ol: 'outlook.png',
      icon_yt: 'youtube.png',
      icon_tt: 'tiktok.png',
      icon_pi: 'pinterest.png',
      accounts_number: [],
      rb: []
    }
  },
  mounted() {
    let resurse_backend_local = localStorage.getItem("Resurse BackEnd")
    this.rb = JSON.parse(resurse_backend_local)
    console.log(this.rb)
  }
}
</script>

<style scoped>

.tabs_container {
  background-color: transparent;
  width: 100%;
}

.buttons {
  margin: 1%;
  margin-left: 3%;
  border: none;
  background: transparent;
  display: none;
}

.buttons:hover {
  background-color: whitesmoke;
}

.dot {
  height: 18px;
  width: 18px;
  background-color: red;
  border-radius: 50%;
  display: none;
  color: white;
  font-size: 16px;
}

</style>