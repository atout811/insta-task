<template>
  <div class="parent">
    <h1 class="child both">Welcome {{ email }}</h1>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data() {
    email: localStorage.email;
  },
};
</script>

<style lang="scss">
@mixin centerer($horizontal: true, $vertical: true) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.parent {
  position: relative;
}
.child {
  @include centerer;
}
</style>