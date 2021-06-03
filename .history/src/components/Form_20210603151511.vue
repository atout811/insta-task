<template>
  <div class="wrap">
    <img class="logo" src="../assets/Instabug-Logo-H_color1.png" />
    <span class="label">Log in to Instabug</span>
    <div class="google"><span>Google</span></div>
    <div class="github"><span>Github</span></div>
    <div class="microsoft"><span>Microsoft</span></div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style lang="scss">
.logo {
  margin: 30px;
}
.label {
  font-size: 40px;
  color: #535353;
  margin: 20px;
}
.google {
  width: 100%;
  height: 40px;
  background-color: #3084fc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.github {
  background-color: #333333;
  width: 100%;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.wrap {
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
}
</style>