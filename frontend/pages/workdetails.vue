<template>
  <div class="back">
    <h1 class="header">Tell us about your most recent job</h1>
    <p class="s-text">We’ll start there and work backward.</p>
    <div class="grid">
      <div class="md:col-6 col-12">
        <b-field label="Job Title" class="my-input">
          <b-input type="text" v-model="title" placeholder="Enter Name" maxlength="30">
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="Company" class="my-input-left">
          <b-input type="text" v-model="company" placeholder="Enter Name" maxlength="30">
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="Start-date" v-model="startdate" class="my-input">
        <b-field v-model="enddate">
            <b-datepicker
                ref="startdate"
                expanded
                placeholder="Select a date"
                v-model="startdate">
            </b-datepicker>
            <b-button
                @click="$refs.startdate.toggle()"
                icon-left="calendar-today"
                type="is-primary" />
        </b-field>
        </b-field>
      </div>
      <div class="md:col-6 col-12" v-show="!removeDate">
        <b-field label="End-date" class="my-input-left">
        <b-field>
            <b-datepicker
                ref="enddate"
                expanded
                placeholder="Select a date"
                v-model="enddate">
            </b-datepicker>
            <b-button
                @click="$refs.enddate.toggle()"
                icon-left="calendar-today"
                type="is-primary" />
        </b-field>
        </b-field>
      </div>
    </div>
    <div class="flex justify-content-end flex-wrap mr-5">
            <b-checkbox v-model="checkBox">
                Currently Working
            </b-checkbox>
    </div>
    <br>
    <div class="flex justify-content-end flex-wrap">
      <div class=" button-p">
        <a class="button is-primary" :disabled="!isDisabled" @click="submit()"> Next </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        title: "",
        portfolio: "",
        linkedin: "",
        startdate: "",
        enddate: "",
        company: "",
        checkBox: "",
        removeDate: false
    }
  },
  watch : {
    checkBox : function() {
        if(this.checkBox === true) {
            this.removeDate = true
        }
        else {
            this.removeDate = false
        }
    }
  },
  methods: {
    async submit() {
      let param = {
        userId: this.$store.getters.getId,
        title: this.title,
        company: this.company,
        portfolio: this.portfolio,
        linkedin: this.linkedin,
        startdate: this.startdate,
        enddate: this.enddate,
      }
      console.log(param)
       await axios.post(
        'http://localhost:5000/user/storejobdetails',
        param
      )
      console.log("helo")
      this.$router.push({ path: '/workexperience' })
    }
  },
  computed: {
  	isDisabled() {
    	if(this.title.length > 0 || this.portfolio.length > 0 ) {
        return true
      }
      else {
        return false
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
.back {
  background-color: rgba(241, 237, 246, 0.818);
}
.button-p {
    padding-right: 5%;
}
.my-input-p {
  margin-left: 5vw;
  margin-right: 5vw;
}
.header {
  font-size: 30px;
  padding-top: 5vh;
  margin-left: 5vw;
  margin-bottom: 10px;
}
.s-text {
  margin-left: 5vw;
  font-size: 20px;
}
.my-input {
  margin-top: 3vh;
  margin-left: 5vw;
}
.my-input-left {
  margin-top: 3vh;
  margin-right: 5vw;
}
@media (max-width: 768px) {
  .my-input {
    margin-top: 5vh;
    margin-left: 3vw;
    margin-right: 3vw;
  }
  .my-input-left {
    margin-top: 1vh;
    margin-left: 3vw;
    margin-right: 3vw;
  }
}
</style>