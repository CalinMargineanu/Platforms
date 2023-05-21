<template>
  <div class="home">

    <button v-on:click="open_Social_Media()" style="background: transparent; margin: 5%; margin-left: 20%; margin-top: 15%; border: white">
      <img v-bind:src="require(`@/assets/${icon_sm}`)" alt="SM" width="150" height="150">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_sm_name}}</p>
    </button>

    <button v-on:click="open_Email()" style="background: transparent; margin: 5%; border: white">
      <img v-bind:src="require(`@/assets/${icon_em}`)" alt="EM" width="150" height="150">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_em_name}}</p>
    </button>

    <button v-on:click="open_Entertainment()" style="background: transparent; margin: 5%; border: white">
      <img v-bind:src="require(`@/assets/${icon_et}`)" alt="ET" width="150" height="150">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_et_name}}</p>
    </button>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      icon_sm: 'social-media.png',
      icon_em: 'email.png',
      icon_et: 'content.png',
      icon_dm: 'dark-mode.png',
      icon_sm_name: 'Social Media',
      icon_em_name: 'E-mail',
      icon_et_name: 'Entertainment'
    }
  },
  methods: {
    open_Social_Media() {
      this.$router.push({name: 'SocialMediaView'})
    },
    open_Email() {
      this.$router.push({name: 'EmailView'})
    },
    open_Entertainment() {
      this.$router.push({name: 'EntertainmentView'})
    }
  }
}
</script>
