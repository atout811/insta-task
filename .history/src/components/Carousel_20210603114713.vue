<template>
  <transition-group name="fade" tag="div">
    <div class="carousel" v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
      <div class="text">{{ currentLabel }}</div>
    </div>
  </transition-group>
  <div class="dotted">
    <span
      v-bind:class="{ dot: currentIndex != 0, dotSelected: currentIndex == 0 }"
      @click="selected(0)"
    ></span>
    <span
      v-bind:class="{ dot: currentIndex != 1, dotSelected: currentIndex == 1 }"
      @click="selected(1)"
    ></span>
    <span
      v-bind:class="{ dot: currentIndex != 2, dotSelected: currentIndex == 2 }"
      @click="selected(2)"
    ></span>
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
      labels: [
        "Accelerate Your Entire Mobile Team Workflow",
        "The Most Comprehensive Bug Reporting Tool for Mobile Apps",
        "Secure Crash Reporting With Real-Time Alerts",
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
      this.timer = setInterval(this.next, 6000);
    },

    selected: function (index) {
      this.currentIndex = index;
    },

    next: function () {
      console.log(this.currentIndex);
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
    currentLabel: function () {
      return this.labels[Math.abs(this.currentIndex) % this.labels.length];
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
  text-align: center;
}
.dotted {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dotSelected {
  cursor: pointer;
  height: 25px;
  width: 25px;
  margin: 10px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
}
.dot {
  cursor: pointer;
  height: 25px;
  width: 25px;
  margin: 10px;
  // background-color: rgb(0, 0, 0);
  border: 3px solid black;
  border-radius: 50%;
  display: inline-block;
}
</style>