# carousel
a Vue3 carousel component with auto-slide and stop-on-hover.

## setup

```
npm i carousel-vue3-ts
```

## how to use

```typescript
<script setup lang="ts">
import Carousel from "carousel-vue3-ts";

const slides = [
  { src: "/slides/1.png" },
  { src: "/slides/2.png" },
  { src: "/slides/3.png" },
  { src: "/slides/4.png" },
  { src: "/slides/5.png" },
  { src: "/slides/6.png" },
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
```


## component props:
#### `slidesArray`: 
the array of slides to be shown. you can define how its value is shown inside the component's tags.<br>
> *example*:  `[{src: "1.png"},{src: "2.png"},{src: "3.png"}]`.
#### `itemsToShow`: 
how many slides to show.
#### `transitionSpeed`: 
how fast your slides move.
#### `timingFunction`: 
the way your slides move.
#### `stopOnHover`: 
if it's true, and autoSlide is true, the slides will stop when you hover over them.
#### `stopOnHoverType`: 
the way the slides should stop after hovering.<br>
> *values* `"immediate", "wait"`
#### `autoSlide`: 
whether to automatically slide infinitely or no.
#### `nextBtnClass`, `prevBtnClass`, `nextBtnStyle`, `prevBtnStyle`, `slideContainerClass`: 
define respective button class/inline style.
#### `breakpoints:` 
breakpoints to change `itemsToShow` based on the screensize
> example `[
>  {size: 800,itemsToShow: 3},
>  {size: 740,itemsToShow: 2},
>  {size: 0,itemsToShow: 1}
> ]`
