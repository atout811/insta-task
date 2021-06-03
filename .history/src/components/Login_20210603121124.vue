<template>
  <div class="container">
    <div class="crousel">
      <div class="holder">
        <Carousel />
      </div>
    </div>
    <div class="form"><img src="../assets/instalogo.svg" /></div>
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
}
.holder {
  margin-top: 15%;
}
.form {
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>