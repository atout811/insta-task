<template>
  <div class="wrap">
    <img class="logo" src="../assets/Instabug-Logo-H_color1.png" />
    <span class="label">Log in to Instabug</span>
    <div class="google">
      <img class="googlelogo" src="../assets/google-logo.jpg" /><span
        class="txt"
        >Google</span
      >
    </div>
    <div class="github">
      <img class="githublogo" src="../assets/github-logo.png" /><span
        class="txt"
        >Github</span
      >
    </div>
    <div class="microsoft">
      <img class="micrologo" src="../assets/micro-logo.png" /><span class="txt"
        >Microsoft</span
      >
    </div>
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
  cursor: pointer;
  width: 100%;
  height: 40px;
  background-color: #3084fc;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
}
.googlelogo {
  border-radius: 5px;
  margin: 2px;
}
.github {
  cursor: pointer;
  background-color: #333333;
  width: 100%;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
}
.githublogo {
  margin: 15px;
  margin-right: 35%;
}
.microsoft {
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: 2px solid black;
  border-radius: 5px;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  color: rgb(133, 133, 133);
}
.micrologo {
  margin: -7px;
  grid-row: 1;
}
.wrap {
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
}
.txt {
  grid-row: 1;
}
</style>