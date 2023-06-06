<template>
  <div class="socialmedia">
    <ModalSocialMedia></ModalSocialMedia>

    <button v-on:click="open_Facebook" style="background: transparent; margin: 5%; margin-left: 20%; margin-top: 15%; border: white">
      <img v-bind:src="require(`@/assets/${icon_fb}`)" alt="FB" width="150" height="150">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_fb_name}}</p>
    </button>

      <button style="background: transparent; margin: 5%; border: white">
        <img v-bind:src="require(`@/assets/${icon_ig}`)" alt="IG" width="150" height="150">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_ig_name}}</p>
      </button>

      <button v-on:click="show_modal" style="background: transparent; margin: 5%; border: white">
        <img v-bind:src="require(`@/assets/${icon_ot}`)" alt="OT" width="150" height="150">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_ot_name}}</p>
      </button>

  </div>
</template>

<script>

import ModalSocialMedia from '@/components/ModalSocialMedia.vue'

export default {
  name: 'SocialMediaView',
  components: {
    ModalSocialMedia
  },
  data() {
    return {
      icon_fb: 'facebook_version_2.png',
      icon_ig: 'instagram.png',
      icon_ot: 'campaign.png',
      icon_fb_name: 'Facebook',
      icon_ig_name: 'Instagram',
      icon_ot_name: 'Add other platform'
    }
  },
  methods: {
    open_Facebook() {
      this.$router.push({name: 'FacebookView'})
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