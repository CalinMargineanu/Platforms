<template>
  <div class="social_media">
    <ModalSocialMedia></ModalSocialMedia>

    <button v-on:click="open_Facebook" class="buttons_social_media">
      <img v-bind:src="require(`@/assets/${icon_fb}`)" alt="FB" class="icons">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_fb_name}}</p>
    </button>

      <button v-on:click="open_Instagram" class="buttons_social_media">
        <img v-bind:src="require(`@/assets/${icon_ig}`)" alt="IG" class="icons">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_ig_name}}</p>
      </button>

      <button v-on:click="show_modal" class="buttons_social_media">
        <img v-bind:src="require(`@/assets/${icon_ot}`)" alt="OT" class="icons">
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
    open_Instagram() {
      this.$router.push({name: 'InstagramView'})
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

.social_media {
  text-align: center;
}

.icons {
  width: 150px;
  height: 150px;
}

.buttons_social_media {
  background: transparent;
  margin: 5%;
  margin-top: 8%;
  border: white
}

.buttons_social_media:hover {
  cursor: pointer;
  transform: scale(1.25);
  background: #FFF;
  color: #000;
}

</style>