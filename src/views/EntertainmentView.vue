<template>
  <div class="entertainment">
    <ModalEntertainment></ModalEntertainment>

    <button style="background: transparent; margin: 5%; margin-left: 20%; margin-top: 15%; border: white">
      <img v-bind:src="require(`@/assets/${icon_yt}`)" alt="FB" width="150" height="150">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_yt_name}}</p>
    </button>

      <button style="background: transparent; margin: 5%; border: white">
        <img v-bind:src="require(`@/assets/${icon_tt}`)" alt="IG" width="150" height="150">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_tt_name}}</p>
      </button>

      <button v-on:click="show_modal" style="background: transparent; margin: 5%; border: white">
        <img v-bind:src="require(`@/assets/${icon_ot}`)" alt="OT" width="150" height="150">
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