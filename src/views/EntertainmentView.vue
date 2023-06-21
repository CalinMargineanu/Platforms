<template>
  <div class="entertainment">
    <ModalEntertainment></ModalEntertainment>

    <button v-on:click="open_Youtube" class="buttons_entertainment">
      <img v-bind:src="require(`@/assets/${icon_yt}`)" alt="FB" class="icons">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_yt_name}}</p>
    </button>

      <button v-on:click="open_Tiktok" class="buttons_entertainment">
        <img v-bind:src="require(`@/assets/${icon_tt}`)" alt="IG" class="icons">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_tt_name}}</p>
      </button>

      <button v-on:click="show_modal" class="buttons_entertainment">
        <img v-bind:src="require(`@/assets/${icon_ot}`)" alt="OT" class="icons">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_ot_name}}</p>
      </button>

  </div>
</template>

<script>

import ModalEntertainment from '@/components/ModalEntertainment.vue'

export default {
  name: 'EntertainmentView',
  components: {
    ModalEntertainment
  },
  data() {
    return {
      icon_yt: 'youtube.png',
      icon_tt: 'tiktok.png',
      icon_ot: 'campaign.png',
      icon_yt_name: 'Youtube',
      icon_tt_name: 'TikTok',
      icon_ot_name: 'Add other platform'
    }
  },
  methods: {
    open_Youtube() {
      this.$router.push({name: 'YoutubeView'})
    },
    open_Tiktok() {
      this.$router.push({name: 'TiktokView'})
    },
    show_modal() {
      document.getElementById("myModal").style.display = 'block'
    }
  },
  mounted() {
    window.addEventListener("click", function(event) {
      if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
      }
    })
  }
}

</script>

<style>

.entertainment {
  text-align: center;
}

.icons {
  width: 150px;
  height: 150px;
}

.buttons_entertainment {
  background: transparent;
  margin: 5%;
  margin-top: 8%;
  border: white
}

.buttons_entertainment:hover {
  cursor: pointer;
  transform: scale(1.25);
  background: #FFF;
  color: #000;
}

</style>