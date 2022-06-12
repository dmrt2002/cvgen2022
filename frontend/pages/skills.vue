<template>
  <div class="back">
    <h1 class="header">What skills would you like to highlight?</h1>
    <div class="center">
      <b-field label="Skills" class="mt-4">
        <b-input
          type="text"
          v-model="skill"
          placeholder="Enter a Skill"
          maxlength="30"
        >
        </b-input>
      </b-field>
    <div class="text-align">
      <b-button @click="addSkill()" class="button is-primary">ADD</b-button>
    </div>
    <br>
    </div>
  <li class="list" v-for="skill in skills">
       {{ skill }}
   </li>
    <div class="flex justify-content-end flex-wrap">
      <div class=" button-p">
        <a class="button is-primary" :disabled="isDisabled" @click="submit()"> Next </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      skills: [],
      skill: '',
    }
  },
  methods: {
    addSkill() {
      if(this.skill) {
         this.$store.commit('ADD_SKILL' , this.skill)
         this.skills = this.$store.getters.getSkill
         this.skill = ""
         console.log(this.skills)
      }
    },
    async submit() {
    let param = {
        userId: this.$store.getters.getId,
    }
       await axios.post(
        'http://localhost:5000/user/storeskills',
        param
      )
      this.$router.push({ path: "/summary"})
    },
  computed: {
  	isDisabled() {
    	if(this.skills.length > 0 ) {
        return false
      }
      else {
        return true
      }
    }
  }
  },
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
