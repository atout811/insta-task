<template>
  <div class="parent">
    <h1 class="child both">Welcome {{ email }}</h1>
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
}
</style>