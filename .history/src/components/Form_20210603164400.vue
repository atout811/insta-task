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
        >GitHub</span
      >
    </div>
    <div class="microsoft">
      <img class="micrologo" src="../assets/micro-logo.png" /><span class="txt"
        >Microsoft</span
      >
    </div>
    <div class="hr">
      <hr class="line" />
      <span class="or">OR</span>
      <hr class="line" />
    </div>
    <div class="form">
      <div class="email">
        <span>Work Email</span>
        <input class="input" type="text" placeholder="you@company.com" />
      </div>
      <div class="password">
        <div class="pass">
          <span>Password</span>
          <a href="#">Forget Your Password?</a>
        </div>
        <input class="input" type="text" placeholder="8+ Characters" />
      </div>
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
  display: grid;
  align-items: center;
  grid-auto-rows: minmax(40px, auto);
  color: white;
}
.googlelogo {
  border-radius: 7px;
  margin: 1px;
  grid-row: 1;
}
.github {
  cursor: pointer;
  background-color: #333333;
  width: 100%;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  display: grid;
  align-items: center;
  grid-auto-rows: minmax(40px, auto);
  color: white;
}
.githublogo {
  margin: 5px;
  grid-row: 1;
}
.microsoft {
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: 2px solid black;
  border-radius: 5px;
  display: grid;
  align-items: center;
  grid-auto-rows: minmax(40px, auto);
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
.hr {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
}
.line {
  width: 100%;
}
.or {
  margin-left: 20px;
  margin-right: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.email {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.input {
  padding: 12px 20px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 5px;
}
.password {
  width: 100%;
}
.pass {
  display: flex;
  justify-content: space-between;
}
</style>