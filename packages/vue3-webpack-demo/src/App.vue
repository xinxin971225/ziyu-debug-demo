<template>
  <div @click="aClick()">{{ a }}</div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const a = ref("666");
    const aClick = (e) => {
      console.log(e);
      a.value = "999";
    };
    return {
      a,
      aClick,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
