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
                            <div class="text-muted text-center mb-3">
                                <small>Sign Up with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button tag="a" type="neutral" @click="register('github')" class="m-1">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral" @click="register('google')" class="m-1">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted my-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role="form">

                                <small id="nameErrorBlock" class="form-text text-danger" v-if="!$v.name.required && $v.name.$anyDirty">
                                    Name required
                                </small>
                                <small id="nameErrorBlock" class="form-text text-danger"  v-if="!$v.name.minLength">
                                    Name must have > {{$v.name.$params.minLength.min}} characters
                                </small>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="fas fa-at" v-model="$v.name.$model" aria-describedby="nameErrorBlock">
                                </base-input>
                                
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
                                            type="email" v-model.trim="$v.email.$model" aria-describedby="emailErrorBlock">
                                </base-input>

                                <small id="passErrorBlock" class="form-text text-danger"  v-if="!$v.password.required && $v.password.$anyDirty">
                                    Password required
                                </small>
                                <small id="passErrorBlock" class="form-text text-danger"  v-if="!$v.password.minLength">
                                    Password must have > {{$v.password.$params.minLength.min}} characters
                                </small>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"                                                            
                                            addon-left-icon="fas fa-unlock-alt" v-model.trim="$v.password.$model" aria-describedby="passErrorBlock">
                                </base-input>

                                <small id="cpassErrorBlock" class="form-text text-danger"  v-if="!$v.confpassword.required && $v.confpassword.$anyDirty">
                                    Password required
                                </small>
                                <small id="cpassErrorBlock" class="form-text text-danger"  v-if="!$v.confpassword.sameAs && $v.confpassword.$anyDirty">
                                    Confirm Password doesn't match
                                </small>
                                <base-input alternative
                                            type="password"
                                            placeholder="Confirm Password"                 
                                            addon-left-icon="fas fa-lock" v-model="$v.confpassword.$model" aria-describedby="cpassErrorBlock">
                                </base-input>

                                <div class="form-group">
                                    <label for="country" id="countryErrorBlock" class="form-text text-danger"  v-if="!$v.country.required  || !$v.country.minLength">
                                        Please select country
                                    </label>
                                    <!-- <label for="country">Select your country</label> -->
                                    <select class="form-control" id="country" name="country" 
                                    v-model="$v.country.$model" 
                                    aria-describedby="countryErrorBlock">
                                        <option value="" default>Select your country</option>
                                        <option id="usRadio" value="us">US</option>
                                        <option id="caRadio" value="ca">CA</option>
                                        <option id="inRadio" value="in">IN</option>
                                        <option id="ukRadio" value="uk">UK</option>
                                    </select>
                                </div>

                                <small id="phoneErrorBlock" class="form-text text-danger"  v-if="!$v.phone.required && $v.phone.$anyDirty">
                                    Phone required
                                </small>
                                <small id="phoneErrorBlock" class="form-text text-danger"  v-if="!$v.phone.numeric && $v.phone.$anyDirty">
                                    Phone number is invalid
                                </small>
                                <small id="phoneErrorBlock" class="form-text text-danger"  v-if="!$v.phone.minLength || !$v.phone.maxLength">
                                    Phone must have {{$v.phone.$params.minLength.min}} characters
                                </small>
                                <div class="form-group" v-bind:class="[ $v.phone.$invalid ? 'has-danger' : 'has-success']" >                                  
                                    <base-input alternative
                                        id="phoneNumber"
                                        type="text"
                                        placeholder="Phone Number"
                                        class="form-control-alternative "
                                        v-bind:class="[ $v.phone.$invalid ? 'is-invalid' : 'is-valid']"                 
                                        v-model="$v.phone.$model" aria-describedby="phoneErrorBlock">
                                    </base-input>
                                </div>

                                <div class="text-muted font-italic text-center" >
                                    <small class="text-danger font-weight-700" v-if="errors.errorExist">
                                        Policy check required
                                    </small>
                                    <small class="text-danger font-weight-700" v-if="errors.invalidData">
                                        Invalid data detected
                                    </small>
                                </div>
                                <base-checkbox class="text-center" v-model="policyAgree">
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4"
                                        v-bind:class="{ 'bg-success' : (policyAgree || !$v.$invalid) }"
                                        :disabled="!policyAgree || $v.$invalid"
                                        v-on:click="register('default')">Sign Up</base-button>
                                    <p class="h6 text-primary">OR</p>
                                    <router-link to="/login" tag="base-button" type="info" class="mb-1 mt-1">
                                        Login
                                    </router-link>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import firebase from 'firebase';
import { required, email, minLength, sameAs, helpers, numeric, maxLength} from 'vuelidate/lib/validators';

const phoneValidation = helpers.regex('phoneValidation', /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ );

export default {
    data: function () {
        return {
            email:'',
            password:'',
            name: '',
            phone:'',
            confpassword: '',
            country: '',
            phoneCode: '',
            policyAgree: false,
            errors:{
                errorExist: false,
                invalidData:false
            },
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
        register(val) {                             
                if(this.policyAgree){

                    if(val=='github'){
                        console.log('github auth')
                    } else if (val=='google'){
                        console.log('google auth')
                    } else if (val=='default'){
                        const self = this;
                        if (!this.$v.$invalid) {   
                            var newPhone = this.phoneCode+" "+this.phone;
                            firebase
                                .auth()
                                .createUserWithEmailAndPassword(this.email,this.password)                                
                                .catch( function(error) {
                                    // Handle Errors here.
                                    var errorCode = error.code;
                                    var errorMessage = error.message;

                                    self.fireError.anyError=true;
                                    self.fireError.code=errorCode;
                                    self.fireError.msg=errorMessage;
                                })
                                .then(user => {
                                    const self = this;
                                    var fuser = firebase.auth().currentUser;

                                    if(fuser){
                                        var aUser = {
                                            email:this.email,
                                            country: this.country,
                                            name:this.name,
                                            phone:newPhone,
                                            uid:fuser.uid
                                        }
                                        function writeUserData(userId, name, email, phone) {
                                            firebase.database().ref('users/' + userId).set({
                                                username: name,
                                                email: email,
                                                phone : phone
                                            });
                                        }

                                        try{
                                            this.create_user(fuser)
                                        } catch (e) {
                                            console.log(e);
                                        }
                                        self.$router.push("/dashboard");
                                    }
                                    
                                });                           
                            // console.table([this.name,this.email,this.password,this.country,newPhone])

                        } else {
                            this.errors.invalidData=true;
                        }
                    }
                } else {
                    this.errors.errorExist = true;
                }                        
        }
               
    },
    validations: {
        password: { 
            required,
            minLength: minLength(6)
        },
        email: { 
            required, 
            email
        },
        name: {
            required,
            minLength: minLength(2)
        },
        confpassword: { 
            required,
            sameAs: sameAs('password')
        },
        phone: {
            required,
            numeric,
            minLength: minLength(10),
            maxLength: maxLength(10)
        },
        country: {
            required,
            minLength: minLength(2)
        }
    },
    mounted(){
        // console.log(this.$v)
    },
    watch:{
        policyAgree: function(val){
            if(val){
                this.errors.errorExist = false;
            }
        },
        'this.$v.$anyError': function(val){
            if(val){
                this.errors.invalidData = false;
            }
        },
        country: function(val) {
            if(val=="us"){
                this.phoneCode = "+1"
            } else if (val=="ca"){
                this.phoneCode = "+1"
            } else if (val=="in"){
                this.phoneCode = "+91"
            } else if (val=="uk") {
                this.phoneCode = "+44"
            }
        }   
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
