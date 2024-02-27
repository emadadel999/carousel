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
</script>

<template>
  <div class="container">
    <Carousel :slides-array="slides" :transition-speed="1" :auto-slide="false" :items-to-show="4">
      <template #slide="{ src, alt }">
        <div class="container-slide">
          <img :src="src" :alt="alt" width="256" height="335" />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss">
@import "./styles/main.scss";
.container {
  overflow: hidden;
}

.carousel-slides__wrapper {
  background-color: khaki;
  border-radius: 10px;
  border: 0;
}

.container-slide {
  @include flex-center;
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 5px;

  > picture,
  > img {
    border-radius: 10px;
    border: 0;
    width: 20em;
    height: 20em;
  }
}
</style>
