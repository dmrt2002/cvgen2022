<template>
  <div class="background">
    <div class="grid">
      <div class="col-12 md:col-5 align-text-center">
        <h1 class="my-heading md:pl-6 lg:pl-8 pl-2 pr-4 mb-4 mt-4">
          Free resume builder for modern job seekers
        </h1>
        <p class="md:pl-6 lg:pl-8 pl-2 my-text">
          By employing the best practices and innovative tech, Iresume boosts
          your chances of landing a better job – completely for free.
        </p>
        <br />
        <div class="md:pl-6 lg:pl-8 pl-2 mb-2 mt-2">
          <a @click="redirect()" class="cta cursor-pointer">
            <span class="button-text">Build Resume</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div class="col-12 md:col-7">
        <div
          class="center-image"
        >
        <img class="img-fluid-banner" src="../assets/undraw_resume_re_hkth.svg" alt="" /></div>
      </div>
    </div>
    <div class="grid margin-adjust">
      <div class="col-12 md:col-4">
        <h1 class="desc-heading">Smart</h1>
        <p class="desc-text">Forget about Word templates and hours of editing. Powered by intelligent technologies, Wozber will save your time and guide you to the best version of your resume.</p>
      </div>
      <div class="col-12 md:col-4">
      <h1 class="desc-heading">Privacy-friendly</h1>
        <p class="desc-text">Forget about Word templates and hours of editing. Powered by intelligent technologies, Wozber will save your time and guide you to the best version of your resume.</p>
      </div>
      <div class="col-12 md:col-4">
       <h1 class="desc-heading">100% Free</h1>
        <p class="desc-text">Anonymously create and download your resume with a cover letter entirely in the browser, without storing any of your personal data on our server – unless you want to save your progress.</p>
      </div>
    </div>
    <div class="bg">
    <div class="grid">
      <div class="col-12 my-column">
        <h1 class="black-card-heading">Our Resume Builder Ensures that you get Placed at your Dream Company</h1>
      </div>
    </div>
    <div class="grid">
        <div class="col-6 md:col-3 center">
        <img class="img-fluid" src="../assets/kindpng_1280233.png" alt="" />
      </div>
        <div class="col-6 md:col-3 center">
        <img class="img-fluid" src="../assets/download.png" alt="" />
      </div>
        <div class="col-6 md:col-3 center">
        <img class="img-fluid" src="../assets/kindpng_1087143.png" alt="" />
      </div>
        <div class="col-6 md:col-3 center">
          <img class="img-fluid" src="../assets/pp.png" alt="" />
      </div>
      </div>
    <div class="grid">
      <div class="col-6 md:col-3 center">
        <img class="img-fluid" src="../assets/pngfind.com-google-icon-png-344426.png" alt="" />
      </div>
      <div class="col-6 md:col-3 center">
        
        <img class="img-fluid" src="../assets/pngfind.com-swimming-icon-png-4679556 (1).png" alt="" />
      </div>
        <div class="col-6 md:col-3 center">
        <img class="img-fluid" src="../assets/apple-white.png" alt="" />
      </div>
        <div class="col-6 md:col-3 center">
          <img class="img-fluid" src="../assets/meta.png" alt="" />
      </div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods : {
    redirect() {
        this.$router.push({
        path : "/login",
      });
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
.background {
  background-color: rgba(241, 237, 246, 0.818);
  min-height: 100vh;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}

@media(min-width:768px) {
  .center-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
  .img-fluid-banner {
    margin-left: 10vw;
    margin-right: 10vw;
  }
}

.img-fluid-banner {
    width: 100vw;
  height: 60vh;
}
.bg {
  margin-top: 5vh;
  margin-right: 5vw;
  margin-left: 5vw;
  margin-bottom: 5vh;
  height: 80vh;
  background: black;
  margin-bottom: 10vh;
}

.img-fluid-u {
  height: 80px;
  width: 80px;
}

.button-text {
  font-family: 'Raleway', sans-serif;
}
@media (max-width: 768px) {
  .img-fluid {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
}
.align-center {
  min-height: calc(100vh - 100px);
}
.align-text-center {
  margin-top: auto;
  margin-bottom: auto;
}
.my-text {
  font-weight: 400 !important;
  font-family: 'Raleway', sans-serif;
}
.my-heading {
  font-size: 40px !important;
  font-weight: 600 !important;
  font-family: 'Oswald', sans-serif;
}
.logo {
  height: 60px !important;
}
a {
  text-decoration: none;
  color: inherit;
}

.cta,
.cta-back {
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
}
.cta:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: rgba(192, 170, 213, 0.9);
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta-back:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  border-radius: 28px;
  background: rgba(192, 170, 213, 0.9);
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta span,
.cta-back span {
  position: relative;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
}
.cta svg,
.cta i {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #111;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
.cta:hover:before,
.cta-back:hover:before {
  width: 100%;
  background: rgba(192, 170, 213, 0.9);
}
.cta:hover svg,
.cta-back i {
  transform: translateX(0);
}
.cta:active,
.cta-back:active {
  transform: scale(0.96);
}
.desc-heading {
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
}
.margin-adjust {
  margin-top: 20vh;
  margin-bottom: 20vh;
  margin-left: 10px;
}
.desc-text {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 14px;
}

@media(max-width: 768px) {
  .desc-text {
    text-align: left;
  }
  .margin-adjust {
    margin-top: 5vh;
  }
}
.black-card-heading {
  color: white;
  text-align: center;
  margin-top: 20px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
}
.img-fluid {
  height: 60px;
  width: 60px;
}
.center {
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
