<template>
  <div class="container">
    <div class="crousel">
      <Carousel />
    </div>
    <div class="form">Helloo</div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
export default {
  name: "Login",
  components: { Carousel },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.crousel {
  width: 50vw;
}
</style>