<template>
  <div class="socialmedia">
    <ModalSocialMedia></ModalSocialMedia>

    <button style="background: transparent; margin: 5%; margin-left: 20%; margin-top: 15%; border: white">
      <img v-bind:src="require(`@/assets/${icon_fb}`)" alt="FB" width="150" height="150">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_fb_name}}</p>
    </button>

      <button style="background: transparent; margin: 5%; border: white">
        <img v-bind:src="require(`@/assets/${icon_ig}`)" alt="IG" width="150" height="150">
        <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_ig_name}}</p>
      </button>

      <button id="add_platform" style="background: transparent; margin: 5%; border: white">
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
      icon_fb: 'facebook.png',
      icon_ig: 'instagram.png',
      icon_ot: 'campaign.png',
      icon_fb_name: 'Facebook',
      icon_ig_name: 'Instagram',
      icon_ot_name: 'Add other platform'
    }
  },
  mounted() {
    let modal = document.getElementById("myModal");
    let button = document.getElementById("add_platform");
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    button.addEventListener("click", function() {
      modal.style.display = "block"
    })

    //When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
      modal.style.display = "none";
    })

    //When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    })
  }
}




</script>