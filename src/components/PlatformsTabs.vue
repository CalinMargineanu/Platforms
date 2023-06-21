<template>
  <div id="platforms_tabs">
    <h1>{{ msg }}</h1>

<!--    Tabs Container-->
    <div class="tabs_container">

<!--      Dropdown List-->
      <div class="dropdown">

        <button v-on:click="show_dropdown_list('facebook')" v-show="facebook_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_fb}`)" alt="FB" class="icons">
          <span v-show="facebook_active_accounts > 0" ref="dot" class="dot">{{ facebook_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('instagram')" v-show="instagram_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_ig}`)" alt="IG" class="icons">
          <span v-show="instagram_active_accounts > 0" ref="dot" class="dot">{{ instagram_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('twitter')" v-show="twitter_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_tw}`)" alt="TW" class="icons">
          <span v-show="twitter_active_accounts > 0" ref="dot" class="dot">{{ twitter_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('linkedin')" v-show="linkedin_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_in}`)" alt="IN" class="icons">
          <span v-show="linkedin_active_accounts > 0" ref="dot" class="dot">{{ linkedin_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('gmail')" v-show="gmail_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_gm}`)" alt="GM" class="icons">
          <span v-show="gmail_active_accounts > 0" ref="dot" class="dot">{{ gmail_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('yahoo')" v-show="yahoo_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_yh}`)" alt="YH" class="icons">
          <span v-show="yahoo_active_accounts > 0" ref="dot" class="dot">{{ yahoo_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('outlook')" v-show="outlook_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_ol}`)" alt="OL" class="icons">
          <span v-show="outlook_active_accounts > 0" ref="dot" class="dot">{{ outlook_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('youtube')" v-show="youtube_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_yt}`)" alt="YT" class="icons">
          <span v-show="youtube_active_accounts > 0" ref="dot" class="dot">{{ youtube_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('tiktok')" v-show="tiktok_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_tt}`)" alt="TT" class="icons">
          <span v-show="tiktok_active_accounts > 0" ref="dot" class="dot">{{ tiktok_active_accounts }}</span>
        </button>

        <button v-on:click="show_dropdown_list('pinterest')" v-show="pinterest_active_accounts > 0" class="buttons">
          <img v-bind:src="require(`@/assets/${icon_pi}`)" alt="PI" class="icons">
          <span v-show="pinterest_active_accounts > 0" ref="dot" class="dot">{{ pinterest_active_accounts }}</span>
        </button>

        <div ref="dropdown" id="dropdown" class="platforms_dropdown">
          <a v-show="facebook === true" v-on:click="show_modal_platform('facebook', index)"
             v-for="(account,index) in rb_facebook" :key="'rb_facebook' + index">{{ account.email }}</a>

          <a v-show="instagram === true" v-on:click="show_modal_platform('instagram', index)"
             v-for="(account,index) in rb_instagram" :key="'rb_instagram' + index">{{ account.email }}</a>

          <a v-show="twitter === true" v-on:click="show_modal_platform('twitter', index)"
             v-for="(account,index) in rb_twitter" :key="'rb_twitter' + index">{{ account.email }}</a>

          <a v-show="linkedin === true" v-on:click="show_modal_platform('linkedin', index)"
             v-for="(account,index) in rb_linkedin" :key="'rb_linkedin' + index">{{ account.email }}</a>

          <a v-show="gmail === true" v-on:click="show_modal_platform('gmail', index)"
             v-for="(account,index) in rb_gmail" :key="'rb_gmail' + index">{{ account.email }}</a>

          <a v-show="yahoo === true" v-on:click="show_modal_platform('yahoo', index)"
             v-for="(account,index) in rb_yahoo" :key="'rb_yahoo' + index">{{ account.email }}</a>

          <a v-show="outlook === true" v-on:click="show_modal_platform('outlook', index)"
             v-for="(account,index) in rb_outlook" :key="'rb_outlook' + index">{{ account.email }}</a>

          <a v-show="youtube === true" v-on:click="show_modal_platform('youtube', index)"
             v-for="(account,index) in rb_youtube" :key="'rb_youtube' + index">{{ account.email }}</a>

          <a v-show="tiktok === true" v-on:click="show_modal_platform('tiktok', index)"
             v-for="(account,index) in rb_tiktok" :key="'rb_tiktok' + index">{{ account.email }}</a>

          <a v-show="pinterest === true" v-on:click="show_modal_platform('pinterest', index)"
             v-for="(account,index) in rb_pinterest" :key="'rb_pinterest' + index">{{ account.email }}</a>
        </div>

<!--        Modal Platform Content-->
        <div v-for="(modal,index) in rb_facebook" :key="'rb_facebook' + index" ref="modal_platform_fb" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('facebook', index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://www.facebook.com" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_instagram" :key="'rb_instagram' + index" ref="modal_platform_ig" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('instagram' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://www.instagram.com" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_twitter" :key="'rb_twitter' + index" ref="modal_platform_tw" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('twitter' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://twitter.com/?lang=ro" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_linkedin" :key="'rb_linkedin' + index" ref="modal_platform_in" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('linkedin' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://www.linkedin.com/feed/" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_gmail" :key="'rb_gmail' + index" ref="modal_platform_gm" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('gmail' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://google.ro/" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_yahoo" :key="'rb_yahoo' + index" ref="modal_platform_yh" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('yahoo' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://login.yahoo.com/" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_outlook" :key="'rb_outlook' + index" ref="modal_platform_ol" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('outlook' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://outlook.live.com/" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_youtube" :key="'rb_youtube' + index" ref="modal_platform_yt" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('youtube' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://youtube.com" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_tiktok" :key="'rb_tiktok' + index" ref="modal_platform_tt" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('tiktok' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://www.tiktok.com/" class="iframe"></iframe>
          </div>
        </div>

        <div v-for="(modal,index) in rb_pinterest" :key="'rb_pinterest' + index" ref="modal_platform_pi" class="modal_platform">
          <div class="modal_platform_content">
            <span v-on:click="close_modal_platform('pinterest' ,index)" ref="close_platform_content" class="close_platform_content">&times;</span>
            <h1 style="font-size: small; text-align: left; margin-top: -1%; margin-left: -1%">{{ modal.email }}</h1>
            <iframe src="https://ro.pinterest.com/" class="iframe"></iframe>
          </div>
        </div>

      </div>

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
      facebook: false,
      instagram: false,
      twitter: false,
      linkedin: false,
      gmail: false,
      yahoo: false,
      outlook: false,
      youtube: false,
      tiktok: false,
      pinterest: false,
      rb_facebook: [],
      rb_instagram: [],
      rb_twitter: [],
      rb_linkedin: [],
      rb_gmail: [],
      rb_yahoo: [],
      rb_outlook: [],
      rb_youtube: [],
      rb_tiktok: [],
      rb_pinterest: []
    }
  },
  computed: {
    facebook_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Facebook'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    instagram_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Instagram'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    twitter_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Twitter'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    linkedin_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Linkedin'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    gmail_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Gmail'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    yahoo_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Yahoo'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    outlook_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Outlook'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    youtube_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Youtube'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    tiktok_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Tiktok'))
      if (accounts) {
        return accounts.length
      }
      return 0
    },
    pinterest_active_accounts() {
      let accounts = JSON.parse(localStorage.getItem('Resurse Backend Pinterest'))
      if (accounts) {
        return accounts.length
      }
      return 0
    }
  },
  methods: {
    show_dropdown_list(platform) {
      if (platform === 'facebook') {
        this.facebook = true
        this.instagram = false
        this.gmail = false
        this.yahoo = false
        this.twitter = false
        this.linkedin = false
      } else if (platform === 'instagram') {
        this.instagram = true
        this.facebook = false
        this.gmail = false
        this.yahoo = false
        this.twitter = false
        this.linkedin = false
      } else if (platform === 'twitter') {
        this.twitter = true
        this.yahoo = false
        this.gmail = false
        this.instagram = false
        this.facebook = false
        this.linkedin = false
      } else if (platform === 'linkedin') {
        this.linkedin = true
        this.twitter = false
        this.yahoo = false
        this.gmail = false
        this.instagram = false
        this.facebook = false
      } else if (platform === 'gmail') {
        this.gmail = true
        this.instagram = false
        this.facebook = false
        this.yahoo = false
        this.twitter = false
        this.linkedin = false
      } else if (platform === 'yahoo') {
        this.yahoo = true
        this.gmail = false
        this.instagram = false
        this.facebook = false
        this.twitter = false
        this.linkedin = false
      } else if (platform === 'outlook') {
        this.outlook = true
        this.linkedin = false
        this.twitter = false
        this.yahoo = false
        this.gmail = false
        this.instagram = false
        this.facebook = false
      } else if (platform === 'youtube') {
        this.youtube = true
        this.outlook = false
        this.linkedin = false
        this.twitter = false
        this.yahoo = false
        this.gmail = false
        this.instagram = false
        this.facebook = false
      } else if (platform === 'tiktok') {
        this.tiktok = true
        this.youtube = false
        this.outlook = false
        this.linkedin = false
        this.twitter = false
        this.yahoo = false
        this.gmail = false
        this.instagram = false
        this.facebook = false
      } else if (platform === 'pinterest') {
        this.pinterest = true
        this.tiktok = false
        this.youtube = false
        this.outlook = false
        this.linkedin = false
        this.twitter = false
        this.yahoo = false
        this.gmail = false
        this.instagram = false
        this.facebook = false
      }
    },
    show_modal_platform(platform, index,) {
      if (platform === 'facebook') {
        this.facebook = false
        this.$refs.modal_platform_fb[index].style.display = 'block'
      } else if (platform === 'instagram') {
        this.instagram = false
        this.$refs.modal_platform_ig[index].style.display = 'block'
      } else if (platform === 'twitter') {
        this.twitter = false
        this.$refs.modal_platform_tw[index].style.display = 'block'
      } else if (platform === 'linkedin') {
        this.twitter = false
        this.$refs.modal_platform_in[index].style.display = 'block'
      } else if (platform === 'gmail') {
        this.gmail = false
        this.$refs.modal_platform_gm[index].style.display = 'block'
      } else if (platform === 'yahoo') {
        this.yahoo = false
        this.$refs.modal_platform_yh[index].style.display = 'block'
      } else if (platform === 'outlook') {
        this.outlook = false
        this.$refs.modal_platform_ol[index].style.display = 'block'
      } else if (platform === 'youtube') {
        this.youtube = false
        this.$refs.modal_platform_yt[index].style.display = 'block'
      } else if (platform === 'tiktok') {
        this.tiktok = false
        this.$refs.modal_platform_tt[index].style.display = 'block'
      } else if (platform === 'pinterest') {
        this.pinterest = false
        this.$refs.modal_platform_pi[index].style.display = 'block'
      }
    },
    close_modal_platform(platform, index) {
      if (platform === 'facebook') {
        this.$refs.modal_platform_fb[index].style.display = 'none'
      } else if (platform === 'instagram') {
        this.$refs.modal_platform_ig[index].style.display = 'none'
      } else if (platform === 'twitter') {
        this.$refs.modal_platform_tw[index].style.display = 'none'
      } else if (platform === 'linkedin') {
        this.$refs.modal_platform_in[index].style.display = 'none'
      } else if (platform === 'gmail') {
        this.$refs.modal_platform_gm[index].style.display = 'none'
      } else if (platform === 'yahoo') {
        this.$refs.modal_platform_yh[index].style.display = 'none'
      } else if (platform === 'outlook') {
        this.$refs.modal_platform_ol[index].style.display = 'none'
      } else if (platform === 'youtube') {
        this.$refs.modal_platform_yt[index].style.display = 'none'
      } else if (platform === 'tiktok') {
        this.$refs.modal_platform_tt[index].style.display = 'none'
      } else if (platform === 'pinterest') {
        this.$refs.modal_platform_pi[index].style.display = 'none'
      }
    }
  },
  mounted() {
    let resurse_backend_local_facebook = localStorage.getItem("Resurse Backend Facebook")
    this.rb_facebook = JSON.parse(resurse_backend_local_facebook)

    let resurse_backend_local_instagram = localStorage.getItem("Resurse Backend Instagram")
    this.rb_instagram = JSON.parse(resurse_backend_local_instagram)

    let resurse_backend_local_twitter = localStorage.getItem("Resurse Backend Twitter")
    this.rb_twitter = JSON.parse(resurse_backend_local_twitter)

    let resurse_backend_local_linkedin = localStorage.getItem("Resurse Backend Linkedin")
    this.rb_linkedin = JSON.parse(resurse_backend_local_linkedin)

    let resurse_backend_local_gmail = localStorage.getItem("Resurse Backend Gmail")
    this.rb_gmail = JSON.parse(resurse_backend_local_gmail)

    let resurse_backend_local_yahoo = localStorage.getItem("Resurse Backend Yahoo")
    this.rb_yahoo = JSON.parse(resurse_backend_local_yahoo)

    let resurse_backend_local_outlook = localStorage.getItem("Resurse Backend Outlook")
    this.rb_outlook = JSON.parse(resurse_backend_local_outlook)

    let resurse_backend_local_youtube = localStorage.getItem("Resurse Backend Youtube")
    this.rb_youtube = JSON.parse(resurse_backend_local_youtube)

    let resurse_backend_local_tiktok = localStorage.getItem("Resurse Backend Tiktok")
    this.rb_tiktok = JSON.parse(resurse_backend_local_tiktok)

    let resurse_backend_local_pinterest = localStorage.getItem("Resurse Backend Pinterest")
    this.rb_pinterest = JSON.parse(resurse_backend_local_pinterest)
}
}
</script>

<style scoped>

.tabs_container {
  background-color: transparent;
  width: 100%;
  text-align: center;
}

.icons {
  width: 70px;
  height: 70px;
}

.buttons {
  margin-left: 3%;
  border: none;
  background: transparent;
  display: inline-block;
}

.buttons:hover {
  cursor: pointer;
  transform: scale(1.25);
  background: #FFF;
  color: #000;
}

.dot {
  height: 18px;
  width: 18px;
  background-color: red;
  border-radius: 50%;
  display: block;
  color: white;
  font-size: 16px;
}

.dropdown {
  position: relative;
}

.platforms_dropdown {
  position: relative;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.platforms_dropdown a {
  font-size: 1.3vw;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.platforms_dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block
}

.modal_platform {
  display: none;
  position: fixed; /* Stay in place */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  z-index: 1; /* Sit on top */
}

.modal_platform_content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: none;
  width: 90%;
  height: 80%;
  border-radius: 8px;
}

.close_platform_content {
  color: #aaaaaa;
  margin-top: -1%;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close_platform_content:hover,
.close_platform_content:focus {
  color: red;
  text-decoration: none;
  cursor: pointer;
}

.iframe {
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 8px;
}


</style>
