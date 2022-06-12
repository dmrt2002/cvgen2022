<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/undraw_resume_folder_re_e0bi (1).svg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                    width="100" height="auto"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="https://ineuron.ai/">
               Ineuron
            </b-navbar-item>
            <b-navbar-item href="https://github.com/">
               Github
            </b-navbar-item>
            <b-navbar-item href="#">
               Our Repo
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped>
.my-button {
  color: white !important;
  background: rgba(10, 129, 240, 0.9)!important;
}
</style>