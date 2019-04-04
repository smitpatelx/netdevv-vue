<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <v-alert
                :value="fireError.anyError"
                type="error"
                >
                <strong>{{fireError.code}} : </strong>{{fireError.msg}}
            </v-alert>
            <base-alert type="danger" v-if="fireError.anyError">
                <strong>{{fireError.code}} : </strong>{{fireError.msg}}
            </base-alert>
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-1">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button tag="a" type="neutral" @click="auth('github')" class="m-1">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral" @click="auth('google')" class="m-1">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form" @submit.prevent>

                                <small id="emailErrorBlock" class="form-text text-danger" v-if="!$v.email.required && $v.email.$anyDirty">
                                    Email required
                                </small>
                                <small id="emailErrorBlock" class="form-text text-danger" v-if="!$v.email.email">
                                    Invalid email address
                                </small>
                                <base-input alternative ref="user_input_email"
                                            class="mb-3 text-success"
                                            placeholder="Email"
                                            addon-left-icon="fas fa-envelope"
                                            type="email" v-model="$v.email.$model" aria-describedby="emailErrorBlock">
                                </base-input>
                                
                                <small id="passErrorBlock" class="form-text text-danger"  v-if="!$v.password.required && $v.password.$anyDirty">
                                    Password required
                                </small>
                                <small id="passErrorBlock" class="form-text text-danger"  v-if="!$v.password.minLength">
                                    Password must have > {{$v.password.$params.minLength.min}} CHAR
                                </small>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="fas fa-unlock-alt" v-model="$v.password.$model" aria-describedby="passErrorBlock">
                                </base-input>
                                
                                <base-checkbox class="text-center" v-model="rememberMe">
                                    <span>Remember Me</span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4"
                                        v-bind:class="{ 'bg-success' : !$v.$invalid }"
                                        :disabled="$v.invalid"
                                        v-on:click="auth('default')">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <router-link to='/forgotPassword' class="text-light">
                                <small>Forgot password?</small>
                            </router-link>
                        </div>
                        <div class="col-6 text-right">
                            <router-link to='/register'  class="text-light">
                                <small>Create new account</small>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import firebase,{ functions } from 'firebase';
import { required, email, minLength } from 'vuelidate/lib/validators';

// const onlyNetdevv = (value) => value.indexOf('netdevv') >= 0;

export default {
    data: function () {
        return {
            email:'',
            password:'',
            rememberMe: true,
            fireError:{
                anyError:false,
                code:'',
                msg:''
            }
        }
    },
    methods:{
        ...mapMutations([
            'create_user'
        ]),
        auth(val) {                             
                if(this.rememberMe){
                    console.log('remembring')
                } else {
                    console.log('do not remembring')
                }

                if(val=='github'){
                    const self = this;
                    var provider = new firebase.auth.GithubAuthProvider();
                    firebase.auth().signInWithPopup(provider).then(function(result) {
                        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
                        try{
                            self.create_user(user)
                        } catch (e) {
                            console.log(e);
                        }
                        self.$router.push("/dashboard");
                    }).catch(function(error) {

                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;

                        self.fireError.anyError=true;
                        self.fireError.code=errorCode;
                        self.fireError.msg=errorMessage;

                    });
                } else if (val=='google'){
                    const self = this;
                    var provider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(provider).then(function(result) {
                        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
                        try{
                            self.create_user(user)
                        } catch (e) {
                            console.log(e);
                        }
                        self.$router.push("/dashboard");
                    }).catch(function(error) {

                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;

                        self.fireError.anyError=true;
                        self.fireError.code=errorCode;
                        self.fireError.msg=errorMessage;

                    });
                } else if (val=='default'){
                    const self = this;
                    if (!this.$v.$invalid) {       
                        firebase.auth()
                            .signInWithEmailAndPassword (this.email, this.password)
                            .catch(error=>{
                                // Handle Errors here.
                                var errorCode = error.code;
                                var errorMessage = error.message;

                                self.fireError.anyError=true;
                                self.fireError.code=errorCode;
                                self.fireError.msg=errorMessage;
                            })
                            .then(result => {
                                if(result){
                                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                                    var token = result.user.refreshToken;
                                    // The signed-in user info.
                                    var user = result.user;
                                    console.log(token)
                                    try{
                                        self.create_user(user)
                                    } catch (e) {
                                        console.log(e);
                                    }
                                    self.$router.push("/dashboard");
                                }
                                
                            });
                        
                    }
                }           
        }
               
    },
    validations: {
        password: { 
            required,
            minLength: minLength(5)
        },
        email: { 
            required, 
            email
        }
    },
    mounted(){

    },
    watch:{

    },
    computed:{
        ...mapGetters([
            'isAuth',
            'get_fire'
        ])
    }
};
</script>
<style>
</style>
