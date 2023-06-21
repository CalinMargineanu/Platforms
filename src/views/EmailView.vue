<template>
  <div class="email">
    <ModalEmail></ModalEmail>

    <button v-on:click="open_GmailView" class="buttons_email">
      <img v-bind:src="require(`@/assets/${icon_gm}`)" alt="FB" class="icons">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_gm_name}}</p>
    </button>

      <button v-on:click="open_YahooView" class="buttons_email">
        <img v-bind:src="require(`@/assets/${icon_yh}`)" alt="IG" class="icons">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_yh_name}}</p>
      </button>

      <button v-on:click="show_modal()" class="buttons_email">
        <img v-bind:src="require(`@/assets/${icon_ot}`)" alt="OT" class="icons">
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
    open_GmailView() {
      this.$router.push({name: 'GmailView'})
    },
    open_YahooView() {
      this.$router.push({name: 'YahooView'})
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

.email {
  text-align: center;
}

.icons {
  width: 150px;
  height: 150px;
}

.buttons_email {
  background: transparent;
  margin: 5%;
  margin-top: 8%;
  border: white
}

.buttons_email:hover {
  cursor: pointer;
  transform: scale(1.25);
  background: #FFF;
  color: #000;
}

</style>