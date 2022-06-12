<template>
  <header>
    <div class="grid">
      <div class="col-4 mt-4 pr-5">
        <div class="flex justify-content-center">
          <img
            class="border-circle img-height"
            :src="`${url}`"
            alt=""
          />
        </div>
      </div>
      <div class="col-8 mt-5">
        <p class="font-bold text-3xl mt-1 mb-2 txt username">{{ name }}</p>
        <p class="font-semibold text-xl mt-2 mb-2">Description</p>
        <p class="font-light pr-7 pb-4">
           {{ summary }}
        </p>
      </div>
      <!-- Get in Touch -->
      <div
        class="
          col-4
          inline-flex
          flex-column
          justify-content-start
          text-center
          pr-5
        "
      >
        <p class="font-bold text-3xl txt">Get in touch!</p>
        <svg height="10" width="33.33.%">
          <line
            x1="80"
            y1="0"
            x2="250"
            y2="0"
            style="stroke: #313844; stroke-width: 2"
          />
        </svg>
        <p class="font-semibold">Mobile Number</p>
        <p class="font-light pb-3">{{ phone }}</p>
        <!-- Email -->
        <p class="font-semibold">Email</p>
        <p class="font-light">randomuser@gmail.com</p>
        <!-- LinkedIn -->
        <p class="font-semibold pt-3">LinkedIn</p>
        <p class="font-light">john-doe-8765893</p>
        <p class="font-semibold pt-3">Website</p>
        <p class="font-light">www.randomuser.dev</p>
        <p class="font-semibold pt-3">Location</p>
        <p class="font-light">The Guantanamo Bay detention camp</p>
      </div>
      <!-- work experience sec -->
      <div class="col-8">
        <p class="font-semibold text-3xl txt">Work Experience</p>
        <svg height="10" width="33.33.%">
          <line
            x1="0"
            y1="0"
            x2="220"
            y2="0"
            style="stroke: #313844; stroke-width: 2"
          />
        </svg>
        <p class="font-semibold text-xl pt-1">{{ F_role }}s</p>
        <p class="font-semibold text-xl mt-1">{{ F_company }} | {{ F_startdate }} - {{ F_enddate }}</p>
        <p class="font-light pr-7">
          {{ F_experience }}
        </p>
        <!-- Extra previous work Experience -->
        <div v-if="isJob">
        <p class="font-semibold text-xl mt-4">{{ S_role }}</p>
        <p class="font-semibold text-xl mt-1">{{ S_company }} | {{ S_startdate}} - {{ S_enddate }} </p>
        <p class="font-light pr-7 pb-4">
        {{ S_experience }}
        </p>
      </div>
      </div>
      <!-- Academic History -->
      <div
        class="
          col-4
          inline-flex
          flex-column
          justify-content-start
          text-center
          pr-5
        "
      >
        <p class="font-bold text-3xl txt">Skills</p>
        <svg height="10" width="33.33.%">
          <line
            x1="120"
            y1="0"
            x2="220"
            y2="0"
            style="stroke: #313844; stroke-width: 2"
          />
        </svg>
        <p v-for="skill in skills" class="font-semibold pt-1"> {{ skill }}</p>
      </div>
      <div></div>
      <div class="col-8">
        <p class="font-semibold text-3xl txt">Academy History</p>
        <svg height="10" width="33.33.%">
          <line
            x1="0"
            y1="0"
            x2="250"
            y2="0"
            style="stroke: #313844; stroke-width: 2"
          />
        </svg>
        <p class="font-semibold text-xl mt-1">{{ school.school }}</p>
        <p class="font-semibold text-xl mt-1">{{ school.degree }}</p>
        <p class="font-light pb-4 pr-7">
         {{ school.startdate.slice(0,10)}}  - {{ school.enddate.slice(0, 10)}}
        </p>
        <!-- Extra previous work Experience -->
      </div>
    </div>
            <div class="text-align center">
              <b-button v-if="isButton" @click="download()" class="button is-primary"
                >Download</b-button
              >
            </div>
  </header>
</template>

<script>
import axios from 'axios'
import "../css/primeflex.css";
export default {
  name: "Header",
  data() {
    return {
      name: "",
      summary:"",
      F_role: "",
      F_company: "",
      F_startdate: "",
      F_enddate: "",
      F_experience: "",
      S_role: "",
      S_company:"",
      S_startdate: "",
      S_enddate: "",
      S_experience: "",
      isJob: false,
      school : {
        name:"",
        location:"",
        startdate: "",
        enddate: "",
        degree:""
      },
      email: "",
      skills: [],
      phone: "",
      url: "",
      isButton: true
    }
  },
  async created() {
    let param = {
      userId: this.$store.getters.getId
    }
    let id = param.userId
    let res = await axios.post("http://localhost:5000/user/getdata" , id)
    console.log(res.data)
    this.name = res.data.Name
    this.summary = res.data.summary
    this.F_role = res.data.jobdetails[0].title
    this.F_company = res.data.jobdetails[0].company
    this.F_startdate = res.data.jobdetails[0].startdate.toString().slice(0, 10)
    this.F_enddate = res.data.jobdetails[0].enddate.toString().slice(0, 10)
    this.F_experience = res.data.workexperience[0].experience
    if(res.data.jobdetails.length > 1) {
    this.isJob = true
    this.S_role = res.data.jobdetails[1].title
    this.S_company = res.data.jobdetails[1].company
    this.S_startdate = res.data.jobdetails[1].startdate.toString().slice(0, 10)
    this.S_enddate = res.data.jobdetails[1].enddate.toString().slice(0, 10)
    this.S_experience = res.data.workexperience[1].experience
    this.school = res.data.educations[0]
    this.skills = res.data.skill[0].skills
    this.email = res.data.email
    this.phone = res.data.details[0].phone
    this.url = res.data.image.url
    console.log(this.skills)
    }
  },
  methods: {
    download() {
      this.isButton = false
      window.print()
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 100vw;
  max-height: 100vh;
}
.username {
  text-transform: capitalize;
}
.style {
  height: 0px;
}
.txt{
  color: #32afb2
}
.img-height {
  height: 100px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

</style>