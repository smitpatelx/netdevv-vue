<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-3 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body id="card_portfolio">
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/2.jpg'" class="rounded-circle" >
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4" tag="a" href="/downloads/pdf/web_developer_smit_patel.pdf">
                                        <i class="fas fa-download mr-1"></i>PDF
                                    </base-button>
                                    <base-button type="default" size="sm" class="float-right" @click="modals.modal1 = true">
                                        <i class="fas fa-comment-alt mr-1"></i>Message
                                    </base-button>
                                    
                                    <div class="col-md-4">
                                        <modal :show.sync="modals.modal1"
                                            body-classes="p-0"
                                            modal-classes="modal-dialog-centered modal-sm">
                                            <card type="secondary" shadow
                                                header-classes="bg-white pb-5"
                                                body-classes="px-lg-5 py-lg-5"
                                                class="border-0">
                                                <template>
                                                    <div class="text-muted text-center mb-3">
                                                        <small>Sign in with</small>
                                                    </div>
                                                    <div class="btn-wrapper text-center">
                                                        <base-button type="neutral">
                                                            <img slot="icon" src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/github.svg">
                                                            Github
                                                        </base-button>

                                                        <base-button type="neutral">
                                                            <img slot="icon" src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/google.svg">
                                                            Google
                                                        </base-button>
                                                    </div>
                                                </template>
                                                <template>
                                                    <div class="text-center text-muted mb-4">
                                                        <small>Or sign in with credentials</small>
                                                    </div>
                                                    <form role="form">
                                                        <base-input alternative
                                                                    class="mb-3"
                                                                    placeholder="Email"
                                                                    addon-left-icon="ni ni-email-83">
                                                        </base-input>
                                                        <base-input alternative
                                                                    type="password"
                                                                    placeholder="Password"
                                                                    addon-left-icon="ni ni-lock-circle-open">
                                                        </base-input>
                                                        <base-checkbox class="text-center">
                                                            Remember me
                                                        </base-checkbox>
                                                        <div class="text-center">
                                                            <base-button type="primary" class="my-4">Sign In</base-button>
                                                        </div>
                                                    </form>
                                                </template>
                                            </card>
                                        </modal>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">8</span>
                                        <span class="description">Projects</span>
                                    </div>
                                    <div>
                                        <span class="heading">20+</span>
                                        <span class="description">Skills</span>
                                    </div>
                                    <div>
                                        <span class="heading">2yr +</span>
                                        <span class="description">Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Smit Patel
                                <span class="font-weight-light">, 20</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Toronto, Canada</div>
                            <div class="h6 mt-4"><i class="fas fa-suitcase mr-2"></i>Full Stack Developer - Netdevv</div>
                            <div><i class="fas fa-graduation-cap mr-2"></i>Durham College - Computer Programmer</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9" >
                                    <p>
                                        Experienced Developer with a demonstrated history of working in the Information Technology &
                                         Services industry. Skilled in Java, ASP.Net, V.B. Net, PostgreSQL, MySQL, Javascript, Angular, 
                                         UI/UX Design, Laravel, Vue.js, PHP, C++, C#, Web Design, and Cascading Style Sheets (CSS). 
                                         Strong engineering professional graduated from Durham College.
                                    </p>
                                    <p><b>
                                        Languages - English, Hindi, Gujarati
                                    </b></p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-1 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9" id="content">
                                    <!-- <h4 class="text-primary">Skills</h4> -->
                                    <br/>
                                    <h1>
                                        <i class="devicon-css3-plain-wordmark colored"></i>
                                        <i class="devicon-typescript-plain colored"></i>
                                        <i class="devicon-postgresql-plain-wordmark colored"></i>
                                        <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
                                        <i class="devicon-sass-original colored"></i>
                                        <i class="devicon-cplusplus-plain colored"></i>
                                        <i class="devicon-csharp-plain colored"></i>
                                        <i class="devicon-laravel-plain-wordmark colored"></i>
                                        <i class="devicon-vuejs-plain-wordmark colored"></i>
                                        <i class="devicon-dot-net-plain-wordmark colored"></i>
                                        <i class="devicon-javascript-plain colored"></i>
                                        <i class="devicon-java-plain-wordmark colored"></i>
                                        <i class="devicon-jquery-plain-wordmark colored"></i>
                                        <i class="devicon-mysql-plain-wordmark colored"></i>
                                        <i class="devicon-linux-plain colored"></i>
                                        <i class="devicon-python-plain-wordmark colored"></i>
                                        <i class="devicon-angularjs-plain colored"></i>
                                        <i class="devicon-react-original colored"></i>
                                        <i class="devicon-php-plain colored"></i>
                                        <i class="devicon-nodejs-plain colored"></i>
                                        <i class="devicon-bootstrap-plain-wordmark colored"></i>
                                        <i class="devicon-foundation-plain-wordmark colored"></i>
                                        <i class="devicon-git-plain colored"></i>
                                        <i class="devicon-gulp-plain colored"></i>
                                        <i class="devicon-illustrator-plain colored"></i>
                                        <i class="devicon-nginx-original colored"></i>
                                        <i class="devicon-photoshop-plain colored"></i>
                                        <i class="devicon-tomcat-line colored"></i>
                                        <i class="devicon-webpack-plain colored"></i>
                                        <i class="devicon-wordpress-plain colored"></i>
                                    </h1>                               
                                </div>

                                <div class="col-lg-9 pt-3" id="content">
                                    <h4 class="text-primary">PROJECTS</h4>
                                    <br/>
                                    <p>
                                        APEX - Realeasate listing website
                                        <badge type="info">PHP</badge>
                                        <badge type="info">JQUERY</badge>
                                        <badge type="info">SCSS</badge>
                                        <badge type="info">PgSql</badge>
                                    </p>
                                    <p>
                                        XEMO - Chatbot based upon python
                                        <badge type="info">PYTHON</badge>
                                    </p>
                                    <p>
                                        NETDEVV.COM V-2
                                        <badge type="info">ANGULAR 6</badge>
                                        <badge type="info">SCSS</badge>
                                        <badge type="info">JQUERY</badge>
                                        <badge type="info">PASSPORT API</badge>
                                        <badge type="info">MySql</badge>
                                    </p>
                                    <p>
                                        NETDEVV.COM V-3
                                        <badge type="info">VUE JS</badge>
                                        <badge type="info">SCSS</badge>
                                        <badge type="info">Custom Bootstrap</badge>
                                        <badge type="info">JQUERY</badge>
                                        <badge type="info">Firebase</badge>
                                    </p>          
                                    <br/>
                                    <a href="https://github.com/smitpatelx" target="_blank" class="text-warning">
                                        Check my github for CODE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>

$(document).ready(function(){ 

});

import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        modal1: false
      }
    };
  }
};
</script>
<style>

#content h1 i{
    margin:0.3em;
}
#content h1{
    font-size:calc(3em + 1.5vw);;
}
</style>
