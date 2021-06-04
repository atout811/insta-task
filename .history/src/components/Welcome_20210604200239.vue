<template>
  <div class="nav">
    <a href="/">Logout</a>
  </div>
  <div class="parent">
    <h1 class="child both">Welcome {{ email }}</h1>
    You can <a href="/">Logout</a>
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
.nav {
}
a {
  text-decoration: none;
}
</style>