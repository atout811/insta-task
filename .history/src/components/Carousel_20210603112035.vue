<template>
  <transition-group name="fade" tag="div">
    <div class="carousel" v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
      <div class="text">Accelerate Your Entire Mobile Team Workflow</div>
    </div>
  </transition-group>
  <div class="dotted">
    <span class="dot 1" @click="selected(1)"></span>
    <span class="dot 2" @click="selected(2)"></span>
    <span class="dot 3" @click="selected(3)"></span>
  </div>
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
      labels: [],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 6000);
    },

    selected: function (index) {
      console.log(index);
      this.currentIndex = index;
    },
  },
  next: function () {
    this.currentIndex = this.currentIndex + 1;
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text {
  margin: 20px;
  font-size: 2em;
}
.dotted {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dot {
  cursor: pointer;
  height: 25px;
  width: 25px;
  margin: 10px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
}
</style>