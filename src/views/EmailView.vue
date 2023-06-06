<template>
  <div class="email">
    <ModalEmail></ModalEmail>

    <button style="background: transparent; margin: 5%; margin-left: 20%; margin-top: 15%; border: white">
      <img v-bind:src="require(`@/assets/${icon_gm}`)" alt="FB" width="150" height="150">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_gm_name}}</p>
    </button>

      <button style="background: transparent; margin: 5%; border: white">
        <img v-bind:src="require(`@/assets/${icon_yh}`)" alt="IG" width="150" height="150">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_yh_name}}</p>
      </button>

      <button v-on:click="show_modal()" style="background: transparent; margin: 5%; border: white">
        <img v-bind:src="require(`@/assets/${icon_ot}`)" alt="OT" width="150" height="150">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_ot_name}}</p>
      </button>

  </div>
</template>

<script>

import ModalEmail from '@/components/ModalEmail.vue'

export default {
  name: 'EmailView',
  components: {
    ModalEmail
  },
  data() {
    return {
      icon_gm: 'gmail.png',
      icon_yh: 'yahoo.png',
      icon_ot: 'campaign.png',
      icon_gm_name: 'Gmail',
      icon_yh_name: 'Yahoo',
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