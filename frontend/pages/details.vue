<template>
  <div class="back">
    <h1 class="header">What’s the best way for employers to contact you?</h1>
    <p class="s-text">We suggest including an email and phone number.</p>
    <form  @submit.prevent="submit" enctype="multipart/form-data">
    <div class="grid">
      <div class="md:col-6 col-12">
        <b-field label="Full Name" class="my-input">
          <b-input
            type="text"
            v-model="name"
            placeholder="Enter Name"
            maxlength="30"
          >
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="Email" class="my-input-left">
          <b-input
            type="email"
            v-model="email"
            placeholder="Enter Email"
            maxlength="30"
          >
          </b-input>
        </b-field>
      </div>
      <div class="col-12">
        <b-field label="Profession" class="my-input-p">
          <b-input
            type="text"
            v-model="profession"
            placeholder="Enter Profession"
            maxlength="30"
          >
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="Country" class="my-input">
          <b-input
            type="text"
            v-model="country"
            placeholder="Enter Country"
            maxlength="30"
          >
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="City" class="my-input-left">
          <b-input
            type="text"
            v-model="city"
            placeholder="Enter City"
            maxlength="30"
          >
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="Pin Code" class="my-input">
          <b-input
            type="text"
            v-model="pinCode"
            placeholder="Enter Pin Code"
            maxlength="30"
          >
          </b-input>
        </b-field>
      </div>
      <div class="md:col-6 col-12">
        <b-field label="Phone" class="my-input-left">
          <b-input
            type="text"
            v-model="phone"
            placeholder="Enter Phone Number"
            maxlength="30"
          >
          </b-input>
        </b-field>
      </div>
    </div>
    <div class="md:col-6 col-12 padding">
      <div class="label">Image</div>
      <input  @change="fileUpdate" type="file" />
    </div>
    <div class="flex justify-content-end flex-wrap">
      <div class="button-p">
        <a class="button is-primary" :disabled="isDisabled" @click="submit()"> Next </a>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      email: '',
      profession: '',
      country: '',
      city: '',
      pinCode: '',
      phone: '',
      file: [],
      portfolio: "",
      linkedin: "",
      myfile: ""
    }
  },
  methods: {
    async submit() {
      const formData = new FormData()
      let name = this.file.name
      let param = {
        userId: this.$store.getters.getId,
        name: this.name,
        image: this.myfile,
        email: this.email,
        profession: this.profession,
        country: this.country,
        city: this.city,
        pincode: this.pinCode,
        phone: this.phone,
      }
       await axios.post( 
        'http://localhost:5000/user/storedetails',
        param
      )
      this.$router.push({ path: '/workdetails' })
    },
    fileUpdate(event) {
      let file = event.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        this.myfile = reader.result
      }
    },
  },
  computed: {
  	isDisabled() {
    	if(this.email.length > 0 || this.name.length > 0 || this.profession.length > 0 || this.country.length > 0 || this.city.length > 0 || this.pinCode.length > 0 || this.phone.length > 0) {
        return false
      }
      else {
        return true
      }
    }
  },
  created() {
    let id = this.$store.getters.getId
    console.log(id)
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
.padding {
  padding-left: 5vw;
}
</style>
