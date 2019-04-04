<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-danger">
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
            <div class="row justify-content-center">
                <h1 class="text-white">{{loadingData}} </h1>
            </div>
            <div class="row justify-content-center">
                <p class="text-secondary">Please wait. Don't change page.</p>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    data(){
        return {
            loadingData:'Loading....',
            code:'',
            randStr:''
        }
    },
    methods:{
        performGet: function(){
            try{
                this.code = this.$route.query.code;
                this.randStr = this.$route.query.state;
                console.log(this.code, this.randStr);
                
                if(this.code == null || this.randStr != "netdevvgitauth99"){
                    this.loadingData = "Error while authanticing";
                } else {
                    console.log(this.clientinfo);
                    this.$root.clientinfo(this.code);
                }
            } catch {
                this.loadingData = "Go back to login page and try again.";
            }
        }
    },
    mounted(){
        this.performGet();
    }
};
</script>
<style>
</style>
