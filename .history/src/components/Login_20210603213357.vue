<template>
  <div class="container">
    <div class="crousel">
      <div class="holder">
        <Carousel />
      </div>
    </div>
    <div class="form">
      <Form />
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Form from "./Form";
export default {
  name: "Login",
  components: { Carousel, Form },
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
  width: 100%;
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