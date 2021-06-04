<template>
  <div class="notfound">
    <img src="../assets/notfound.jpg" />
    <span>404 - Page Not Found! </span>
    <p>Sorry,that page doesn't exist, What would you like to do?</p>
  </div>
</template>
<style lang="scss" scoped>
.notfound {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
span {
  font-weight: bold;
  font-size: 2em;
}
</style>