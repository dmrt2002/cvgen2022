<template>
  <div class="back">
    <h1 class="header">Tell us about your education</h1>
    <p class="s-text">Include every school, even if you're still there or didn't graduate.</p>
    <div class="grid">
      <div class="md:col-6 col-12">
        <b-field label="School Name" class="my-input">
          <b-input type="text" v-model="schoolName" placeholder="Enter Name" maxlength="30">
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="School Location" class="my-input-left">
          <b-input type="text" v-model="schoolLocation" placeholder="Enter Email" maxlength="30">
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field class="my-input"
            label="Degree">
            <b-select placeholder="Select a Degree" expanded v-model="degree">
                <option value="High School Diploma">High School Diploma</option>
                <option value="GED">GED</option>
                <option value="Bachelor of Arts">Bachelor of Arts</option>
                <option value="Bachelor of Science">Bachelor of Science</option>
                <option value="Master of Arts">Master of Arts</option>
                <option value="Master of Science">Master of Science</option>
                <option value="MBA">MBA</option>
                <option value="B.E/B.tech">B.E/B.tech</option>
                <option value="PHD">PHD</option>
            </b-select>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="City" class="my-input-left">
          <b-input type="text" v-model="city" placeholder="Enter City" maxlength="30">
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
                Currently Studying
            </b-checkbox>
    </div>

    <br>
    <div class="flex justify-content-end flex-wrap">
      <div class=" button-p">
        <a class="button is-primary" @click="submit()"> Next </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        schoolName: "",
        schoolLocation: "",
        degree: "",
        city: "",
        startdate: "",
        enddate: "",
        checkBox: false,
        removeDate: false
    }
  },
  methods: {
    async submit() {
      let param = {
        userId: this.$store.getters.getId,
        school: this.schoolName,
        location: this.schoolLocation,
        degree: this.degree,
        city: this.city,
        startdate: this.startdate,
        enddate: this.enddate,
      }
      console.log(param)
       await axios.post(
        'http://localhost:5000/user/storeeducationdetails',
        param
      )
      this.$router.push({ path: '/skills' })
    }
  },
  computed: {
  	isDisabled() {
    	if(this.schoolName.length > 0 || this.schoolLocation.length > 0 || this.degree.length > 0 || this.city.length > 0 || this.startdate.length > 0 || this.enddate.length > 0 ) {
        return false
      }
      else {
        return true
      }
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
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
.back {
  background-color: rgba(241, 237, 246, 0.818);
}
.button-p {
    padding-right: 5%;
    padding-bottom: 3%;
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