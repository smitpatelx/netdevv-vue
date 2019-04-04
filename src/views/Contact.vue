<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped section-lg my-0">
            <div class="shape shape-style-3 shape-primary shape-skew alpha-4">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    <h1 class="text-white">Contact</h1>
                </div>
                <div class="row justify-content-center">
                    <a href="" onclick="window.history.go(-1); return false;" class="text-secondary">Click here to go back to last page</a>
                </div>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                <form  type="secondary" shadow class="border-0">
                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <label>Your email :</label>
                        <div class="input-group input-group-alternative mb-4">                      
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                            </div>
                            <input class="form-control form-control-alternative" placeholder="Email" type="text">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <label>City, Country :</label>
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-square-pin"></i></span>
                            </div>
                            <input class="form-control form-control-alternative" placeholder="Location" type="text">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                   <div>
                    <div id="input-slider-range" data-range-value-min="100" data-range-value-max="500"></div>
                    <div class="row d-none">
                        <div class="col-6">
                            <span class="range-slider-value value-low" data-range-value-low="200" id="input-slider-range-value-low"></span>
                        </div>
                        <div class="col-6 text-right">
                            <span class="range-slider-value value-high" data-range-value-high="400" id="input-slider-range-value-high"></span>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                    <div class="form-group has-success">
                        <input type="text" placeholder="Success" class="form-control form-control-alternative is-valid" />
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="form-group has-danger">
                        <input type="email" placeholder="Error Input" class="form-control form-control-alternative is-invalid" />
                    </div>
                    </div>
                </div>
                </form>
                </card>
            </div>
        </section>
    </div>
</template>
<script>

$(document).ready(function(){ 

});


export default {};
</script>
<style>

#content h1 i{
    margin:0.3em;
}
#content h1{
    font-size:calc(3em + 1.5vw);;
}
</style>
