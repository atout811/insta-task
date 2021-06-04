<template>
  <router-view>
    <Welcome />
  </router-view>
  <router-view>
    <Login />
  </router-view>
</template>

<script>
import Welcome from "./components/Welcome";

import Login from "./components/Login";
export default {
  name: "App",
  components: { Login, Welcome },
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  height: 100%;
  font-family: "Noto Sans JP", sans-serif;
}
</style>
