<template>
  <div class="back">
    <div class="header">Nice! Now let's add the job description</div>
    <div class="center">
      <b-field
        label="Achievements and Responsibilities"
        class="width"
        :label-position="labelPosition"
      >
        <b-input  v-model="experience" maxlength="250" type="textarea"></b-input>
      </b-field>
    </div>
    <div class="flex justify-content-end flex-wrap">
      <div class="button-p">
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
            experience: ""
        }
    },
  methods: {
    async submit() {
        let param = {
            userId: this.$store.getters.getId,
            experience: this.experience
        }
       await axios.post(
        'http://localhost:5000/user/storejobexperience',
        param
      )
      this.$router.push({ path: '/prevjob' })
    },
  },
  computed: {
  	isDisabled() {
    	if(this.experience.length > 0 ) {
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
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
}
.button-p {
  padding-right: 5%;
}
.header {
  font-size: 30px;
  padding-top: 5vh;
  margin-left: 5vw;
  margin-bottom: 10px;
}
.back {
  background-color: rgba(241, 237, 246, 0.818);
  height: 100vh;
}
.width {
  width: 80vw;
}
</style>
