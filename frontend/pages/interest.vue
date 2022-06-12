<template>
  <div class="back">
    <h1 class="header">What skills would you like to highlight?</h1>
    <div class="center">
      <b-field label="Interests" class="mt-4">
        <b-input
          type="text"
          v-model="skill"
          placeholder="Enter a interest"
          maxlength="30"
        >
        </b-input>
      </b-field>
    <div class="text-align">
      <b-button @click="addInterest()" class="button is-primary">ADD</b-button>
    </div>
    <br>
    </div>
  <li class="list" v-for="interest in interests">
       {{ interest }}
   </li>
    <div class="flex justify-content-end flex-wrap">
      <div class=" button-p">
        <a class="button is-primary"  :disabled="isDisabled" @click="submit()"> Next </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      interests: [],
      interest: '',
    }
  },
  methods: {
    addInterest() {
      if(this.interest) {
         this.$store.commit('ADD_INTEREST' , this.interest)
         this.interests = this.$store.getters.getInterest
         this.interest = ""
      }
    },
    async submit() {
    let param = {
        userId: this.$store.getters.getId,
    }
       await axios.post(
        'http://localhost:5000/user/storeInterests',
        param
      )
      this.$router.push({ path: "/summary"})
    }
  },
  computed: {
  	isDisabled() {
    	if(this.interests.length > 0 ) {
        return false
      }
      else {
        return true
      }
    }
  }
}
</script>

<style scoped>
.header {
  font-size: 30px;
  padding-top: 5vh;
  margin-left: 5vw;
  margin-bottom: 10px;
}
.button-p {
    margin-top: 40vh;
    margin-right: 30px;
}
.list {
    text-align: left;
    margin-left: 35vw;
    font-size: 20px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.back {
  background-color: rgba(241, 237, 246, 0.818);
  height: 100vh;
}
.text-align {
    margin-top: 35px;
    margin-left: 25px;
}
@media(max-width: 768px) {
    .list {
    margin-left: 10vw;
    }
}
</style>