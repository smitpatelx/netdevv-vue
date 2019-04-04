<template>
    <header class="header-global">
        <base-nav class="navbar navbar-main navbar-expand-lg navbar-light navbar-transparent" style="background:#172b4d;"  transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="./index.html">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="dropdown nav-item show dropdown" aria-expanded="true" aria-haspopup="true">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-spaceship d-lg-none"></i>
                        <span class="nav-link-inner--text">Service</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-xl">
                        <div class="dropdown-menu-inner">
                            <a href="./Services"
                               class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                    <i class="ni ni-spaceship"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="heading text-primary mb-md-1">Services</h6>
                                    <p class="description d-none d-md-inline-block mb-0">
                                        We provide a large range of services.
                                    </p>
                                </div>
                            </a>
                            <a href="/customization"
                               class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                    <i class="ni ni-settings"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h5 class="heading text-warning mb-md-1">Customization</h5>
                                    <p class="description d-none d-md-inline-block mb-0">
                                        We offer different platforms and frameworks.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </ul>
                </li>
                <li class="dropdown nav-item show dropdown" aria-expanded="true" aria-haspopup="true">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Navigate</span>
                    </a>
                    <div class="dropdown-menu">
                        <router-link to="/portfolio" class="dropdown-item">Portfolio</router-link>
                        <router-link to="/aboutUs" class="dropdown-item">About Us</router-link>
                        <router-link to="/pricing" class="dropdown-item">Pricing</router-link>
                        <router-link to="/login" class="dropdown-item">Login</router-link>
                        <router-link to="/register" class="dropdown-item">Register</router-link>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://discord.gg/nFTec5q" target="_blank"
                       data-toggle="tooltip" title="Join our Discord">
                        <i class="fab fa-discord"></i>
                        <span class="nav-link-inner--text d-lg-none">Discord</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/smitpatelx"
                       target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fab fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/smitpatelx" target="_blank"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fab fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/smitpatelx"
                       target="_blank" data-toggle="tooltip" title="Star us on Github">
                        <i class="fab fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="/contact"
                       class="btn btn-neutral btn-icon">
                
                        <span class="nav-link-inner--text">Contact Us</span>
                        <span class="btn-inner--icon">
                            <i class="fas fa-phone ml-2"></i>
                            <!-- <i class="fab fa-cloud-download mr-2"></i> -->
                        </span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  }
};
</script>
<style>
</style>
