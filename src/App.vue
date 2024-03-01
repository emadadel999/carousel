<script setup lang="ts">
import Carousel from "./components/carousel/carousel.vue";

const slides = [
  { src: "/slides/1.png" },
  { src: "/slides/2.png" },
  { src: "/slides/3.png" },
  { src: "/slides/4.png" },
  { src: "/slides/5.png" },
  { src: "/slides/6.png" },
  { src: "/slides/7.png" },
  { src: "/slides/8.png" },
  { src: "/slides/9.png" },
  { src: "/slides/10.png" },
  { src: "/slides/11.png" },
  { src: "/slides/12.png" },
  { src: "/slides/13.png" },
];

const breakpoints = [
  {
    size: 1600,
    itemsToShow: 5,
  },
  {
    size: 400,
    itemsToShow: 4,
  },
  {
    size: 300,
    itemsToShow: 3,
  },
  {
    size: 0,
    itemsToShow: 2
  }
];
</script>

<template>
  <div class="container">
    <Carousel :slides-array="slides" :transition-speed="1" :auto-slide="false" :items-to-show="4"
      :breakpoints="breakpoints">
    </Carousel>
  </div>
</template>

<style lang="scss">
.container {
  background-color: black;
}

.carousel-slides__wrapper {
  background-color: khaki;
  border-radius: 10px;
  border: 0;
}
</style>
