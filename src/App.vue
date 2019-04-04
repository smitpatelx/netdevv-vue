<template>
    <div id="app">
      <router-view name="header"></router-view>
      <main class="">
          <fade-transition origin="center" mode="out-in" :duration="250">
              <router-view/>
          </fade-transition>
      </main>
      <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import { AtomSpinner } from 'epic-spinners';
export default {
  components: {
    FadeTransition,
    AtomSpinner
  }
};

</script>