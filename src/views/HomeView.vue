<template>
  <div class="home">

    <button v-on:click="open_Social_Media()" class="buttons_home">
      <img v-bind:src="require(`@/assets/${icon_sm}`)" alt="SM" class="icons">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_sm_name}}</p>
    </button>

    <button v-on:click="open_Email()" class="buttons_home">
      <img v-bind:src="require(`@/assets/${icon_em}`)" alt="EM" class="icons">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_em_name}}</p>
    </button>

    <button v-on:click="open_Entertainment()" class="buttons_home">
      <img v-bind:src="require(`@/assets/${icon_et}`)" alt="ET" class="icons">
      <p style="font-family: Arial; color: cornflowerblue; font-size: 200%">{{icon_et_name}}</p>
    </button>

  </div>
</template>

<script>

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

<style>

.home {
  text-align: center;
}

.icons {
  width: 150px;
  height: 150px;
}

.buttons_home {
  background: transparent;
  margin: 5%;
  margin-top: 8%;
  border: white
}

.buttons_home:hover {
  cursor: pointer;
  transform: scale(1.25);
  background: #FFF;
  color: #000;
}

</style>
