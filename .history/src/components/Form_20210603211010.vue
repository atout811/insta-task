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
      <div class="line" />
      <span class="or">OR</span>
      <div class="line" />
    </div>
    <FForm class="form">
      <div class="email">
        <span>Work Email</span>
        <input
          name="email"
          type="email"
          class="input"
          placeholder="you@company.com"
          v-model="email"
        />
      </div>
      <div class="password">
        <div class="pass">
          <span>Password</span>
          {{ password }}
          <a style="color: #787878" href="#">Forget Your Password?</a>
        </div>
        <input
          class="input"
          type="password"
          placeholder="8+ Characters"
          v-model="password"
        />
      </div>
      <div class="login">
        <span class="txt">Login</span>
      </div>
      <div class="signup">
        <div>
          <span>Don't have an account? </span><a class="tc" href="#">Sign Up</a>
        </div>
        <a class="tc" href="#">Login via SSO </a>
      </div>
    </FForm>
    <span style="margin-top: 10px; color: #787878"
      >Trusted by the top companies</span
    >
    <div class="footer">
      <img style="width: 100%" src="../assets/Screenshot_3.jpg" />
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  components: {
    FField: Field,
    FForm: Form,
    ErrorMessage,
  },
  name: "Form",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  watch: {
    email: function (value) {
      console.log("function called", value);
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        console.log("heeeyyyoooo");
    },
    password: function (value) {
      console.log("function called", value);
    },
  },
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
  border: 1px solid rgb(48, 48, 48);
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
  color: #989898;
}
.txt {
  grid-row: 1;
}
.hr {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  height: 15px;
}
.line {
  width: 100%;

  border-bottom: 1px solid grey;
}
.or {
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  color: rgb(73, 73, 73);
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
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.pass {
  display: flex;
  justify-content: space-between;
}
.login {
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  background-color: #3084fc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-auto-rows: minmax(40px, auto);
  color: white;
}
.signup {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
hr {
  height: 0.5px;
  background-color: grey;
}
a {
  text-decoration: none;
}
.tc {
  color: rgb(31, 151, 221);
}
</style>