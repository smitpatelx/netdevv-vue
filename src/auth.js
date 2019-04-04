import Vue from "vue";
import router from "./router";
import axios from 'axios';


const hearderToSend = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        crossorigin:true,
        withCredentials: false
    }
};
  
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const corsURL = "http://127.0.0.1:8899/";
const corsWeb = "https://cors-anywhere.herokuapp.com/";

  
var response_code;

export default {
    data: function () {
        return {
            email:'',
            password:'',
            provider:'',
            access_token:'',
            userData:''
        }
    },
    methods: {

    login: function () {    

    },
    register: function () {

    },
    clientinfo: function(sss){
        axios.post(corsWeb+'https://github.com/login/oauth/access_token', {
            client_id: process.env.VUE_APP_GITHUB_CLIENT_ID,
            client_secret: process.env.VUE_APP_GITHUB_CLIENT_SECRET,
            redirect_uri: "http://localhost:8080/auth/callback",
            code:sss      
        })
        .then(function (response) {
        console.log("POST response:",response);
        var params = response.data;
        var json = JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');

        var access_token = json.access_token;
        console.log(access_token);
        

        if(!access_token){
            router.push({ name:'login'});
        } else {
            this.access_token = access_token;
        }
        
        })
        .catch(function (error) {
        console.log("POST error:",error);
        router.push({ name:'login'});
        });
    },
    authenticate: function (provider) {
        console.log(provider);
        if(provider=="github"){
            console.log("github selected");
            window.location.href = 'https://github.com/login/oauth/authorize?client_id=97460b9b301ac5668e7c&state=netdevvgitauth99';
        }
    },
    getUser: function(token){
        axios.get(corsWeb+'https://api.github.com/user', {
        params:{
            access_token: token,
            "token_type":"bearer"
        }
        })
        .then(function (response) {
        console.log("GET response:",response);
        this.userData = response.data;
        router.push({ name:'Dashboard'});

        })
        .catch(function (error) {
        console.log("GET error:",error);
        });
    }
    
    },
    watch: {
        access_token: function(val){
            if(val.length > 0){
                this.getUser(val);
            }
        },
        userData:  function(val){
            if(val.length < 0){
                router.push({ name:'login'});
            }
        }
    }
};