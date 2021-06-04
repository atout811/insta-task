<template>
  <div class="parent">
    <img class="logo" src="../assets/Instabug-Logo-H_color1.png" />
    <h1 class="child both">Welcome {{ email }}</h1>
    <span>Now You can <a v-on:click="handleLogout" href="/">Logout</a></span>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data() {
    return {
      email: localStorage.email,
    };
  },
  methods: {
    handleLogout: function () {
      localStorage.clear();

      this.$router.push("login");
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

a {
  text-decoration: none;
}
</style>