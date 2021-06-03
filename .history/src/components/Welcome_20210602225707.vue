<template>
  <div class="parent">
    <h1 class="child both">Welcome</h1>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style lang="scss">
@mixin centerer($horizontal: true, $vertical: true) {
  position: absolute;
  @if ($horizontal and $vertical) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } @else if ($horizontal) {
    left: 50%;
    transform: translate(-50%, 0);
  } @else if ($vertical) {
    top: 50%;
    transform: translate(0, -50%);
  }
}
.parent {
  position: relative;
}
.child {
  @include centerer;
}
</style>