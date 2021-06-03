<template>
  <div class="wrap">
    <img class="logo" src="../assets/Instabug-Logo-H_color1.png" />
    <span class="label">Log in to Instabug</span>
    <div class="button">Google</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  margin: 50px;
}
.label {
  font-size: 40px;
  color: #535353;
}
.button {
  width: auto;
  background-color: #3084fc;
  border-radius: 10%;
}
.wrap {
  display: flex;
  flex-direction: column;
  width: 75%;
}
</style>