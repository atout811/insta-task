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
  height: 100vh;
  background-color: #082474;
  top: 0;
  left: 0;
}
.form {
  width: 50vw;
  top: 0;
  left: 0;
}
</style>