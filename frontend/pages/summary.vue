<template>
  <div class="back">
    <h1 class="header">Finally, let’s work on your summary</h1>
    <div class="s-text">Briefly tell us about your background</div>
    <div class="center">
         <b-field label="Write your Summary" class="width"
            :label-position="labelPosition">
            <b-input v-model="summary" maxlength="200" type="textarea"></b-input>
        </b-field>
    </div>
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
            summary: ""
        }
    },
    methods: {
        async submit() {
           let param = {
            userId: this.$store.getters.getId,
            summary: this.summary
           }
           await axios.post("http://localhost:5000/user/storesummary" , param)
           this.$router.push({path: `${param.userId.userId}`})
        }
    },
  computed: {
  	isDisabled() {
    	if(this.summary.length > 0 ) {
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
.back {
  background-color: rgba(241, 237, 246, 0.818);
}
.header {
  font-size: 30px;
  padding-top: 5vh;
  margin-left: 5vw;
  margin-bottom: 10px;
}
.button-p {
    margin-right: 30px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65vh;
}
.back {
  background-color: rgba(241, 237, 246, 0.818);
  height: 100vh;
}
.text-align {
    margin-top: 35px;
    margin-left: 25px;
}
.width {
    width: 70vw;
}
.s-text {
  margin-left: 5vw;
  font-size: 20px;
}
</style>