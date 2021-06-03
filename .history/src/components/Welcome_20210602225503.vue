<template>
  <div class="parent">
    <h1 class="child">Welcome</h1>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style lang="scss">
@mixin centerer {
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