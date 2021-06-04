<template>
  <router-view></router-view>
</template>

<script>
import Welcome from "./components/Welcome";

export default {
  name: "App",
  components: { Welcome },
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
