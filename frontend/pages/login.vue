<template>
  <div class="back">
    <div>
      <div
        class="center align-items-center flex justify-content-center align-center"
      >
        <div class="login-card">
          <div class="card-body">
            <h1 class="align-text">Login</h1>
            <b-field label="Email">
              <b-input
                v-model="login.email"
                type="email"
                placeholder="Enter Email"
                maxlength="30"
              >
              </b-input>
            </b-field>
            <b-field
              label="Password"
              :message="{ 'invalid credentials': hasError }"
            >
              <b-input
                v-model="login.password"
                type="password"
                placeholder="Enter Password"
                maxlength="30"
              ></b-input>
            </b-field>
            <div class="text-align">
              <b-button @click="loginUser()" class="button is-primary"
                >Submit</b-button
              >
              <h6 class="add-padding">Not a Member?</h6>
              <router-link class="small" to="/register"
                >Sign up here</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      hasErrorP: false,
      hasError: false,
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async loginUser() {
      let user
      try {
        user = await axios.post('http://localhost:5000/user/login', this.login)
        let id = user.data.admin._id
        this.$store.commit('STORE_USER_ID', id )
        this.$router.push({ path: '/details' })
      } catch (e) {
        console.log(e)
        this.hasError = true
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
.add-padding {
  font-size: 12px;
  margin-top: 5px;
}
.card {
  border-radius: 0.8;
}
.card-body {
  padding: 15px;
}
.align-center {
  min-height: calc(100vh - 50px) !important;
}
.align-text {
  text-align: center;
  color: rgb(0, 0, 0);
  padding: 1px;
  font-size: 1.5em;
}
.foo > .label {
  color: rgb(55, 3, 3);
}
.white-color {
  color: white;
}
.text-align {
  margin-left: 90px;
  margin-top: 20px;
}
.login-card {
  background: rgba(239, 231, 231, 0.2);
  box-shadow: 0 4px 10px 0 rgba(73, 72, 72, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  width: 300px;
}

.select select,
.taginput .taginput-container.is-focusable,
.textarea,
.input {
  background-color: rgba(242, 234, 234, 0.25) !important;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: white !important;
}

.label {
  color: whitesmoke !important;
  display: block;
  font-size: 1rem;
  font-weight: 600;
}
.my-button {
  color: white !important;
  background: rgba(10, 129, 240, 0.9) !important;
}
</style>
