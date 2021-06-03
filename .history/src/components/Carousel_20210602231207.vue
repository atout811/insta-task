<template>
  <transition-group name="fade" tag="div">
    <div v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
    </div>
  </transition-group>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: [
        "https://instabug.com/assets/images/svgs/heroes/Product-overview.svg",
        "https://instabug.com/assets/images/svgs/heroes/Products-bug-reporting.svg",
        "https://instabug.com/assets/images/svgs/heroes/Products-crash-reporting.svg",
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>