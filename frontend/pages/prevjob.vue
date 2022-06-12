<template>
    <div class="back">
        <div v-for="job in jobs" class="my-card">
            <h1 class="pl-2 pb-2 pt-2 job-title">{{ job.title }} | {{ job.company }}</h1>
    </div>
    <div class="center" v-if="jobs.length <= 2">
      <b-button type="is-primary" @click="addjob()" class="mb-3">ADD NEW JOB</b-button>
    </div>
    <div class="flex justify-content-end flex-wrap">
      <div class=" button-p">
        <a class="button is-primary" @click="nextPage()"> Next </a>
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
            company: "",
            jobs: []
        }
    },
    methods: {
        nextPage() {
            this.$router.push('/education')
        },
        addjob() {
            this.$router.push("/workdetails")
        }
    },
    async created() {
        let param = {
             userId: this.$store.getters.getId,
        }
        console.log(param.userId)
       let res = await axios.post(
        'http://localhost:5000/user/getalljobs',
        param
      )
      this.jobs = res.data
    }
}
</script>

<style scoped>
.back {
  background-color: rgba(241, 237, 246, 0.818);
  min-height: 100vh;
  padding-top: 10vh;
}
.job-title {
    font-size: 24px;
}
.job-company {
    font-size: 20px;
}
.my-card {
  background: rgba(245, 243, 243, 0.2);
  box-shadow: 0 4px 10px 0 rgba(73, 72, 72, 0.37);
  width: 80vw;
  height: 150px;
  margin-left: 20px;
  margin-bottom: 40px;
}
.button-p {
    margin-right: 30px;
    margin-bottom: 20px;
}
.header {
    text-align: left;
    font-size: 24px;
    margin-left: 50px;
}
.header-two {
    text-align: left;
    font-size: 18px;
    margin-left: 40px;
}
.center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
}
</style>