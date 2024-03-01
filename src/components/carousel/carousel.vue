<script setup lang="ts">
import { onMounted, onBeforeUnmount, onUnmounted, ref, type Ref, inject, computed, nextTick } from "vue";
import infiniteModulo from "./infinite-modulo";
import Debug from "debug";
const debug = Debug("wave:cmpnt:carousel");

interface iBreakpoint {
  size: number;
  itemsToShow: number;
}

//TODO: validate props and handle errors
const props = defineProps({
  /**
   * an array of slides to be shown.
   * you can define how its value is shown inside the component's tags.
   *  * @example
   * // [
   *  {
   *      src: 1
   *  },
   *  {
   *      src: 2
   *  },
   *  {
   *      src: 3
   *  }
   * ]
   */
  slidesArray: {
    type: Array,
    required: true,
  },
  /**
   * how many slides to show.
   */
  itemsToShow: {
    type: Number,
    default: 4,
  },
  /**
   * how fast your slides move.
   */
  transitionSpeed: {
    type: Number,
    default: 5,
  },
  /**
   * the way your slides move.
   */
  timingFunction: {
    type: String,
    default: "linear",
  },
  /**
   * if it's true, and autoSlide is true, the slides will stop when you hover over them.
   */
  stopOnHover: {
    type: Boolean,
    default: false,
  },
  /**
   * the way the slides should stop after hovering
   * * @values "immediate", "wait"
   */
  stopOnHoverType: {
    type: String,
    default: "immediate",
    validator(value: string) {
      // The value must match one of these strings
      return ["immediate", "wait"].includes(value);
    },
  },
  /**
   * whether to automatically slide infinitely or no.
   */
  autoSlide: {
    type: Boolean,
    default: false,
  },
  /**
   * when autoSlide is false, define next arrow button class
   */
  nextBtnClass: {
    type: String,
    default: "next-btn",
  },
  /**
   * when autoSlide is false, define prev arrow button class
   */
  prevBtnClass: {
    type: String,
    default: "prev-btn",
  },
  /**
   * when autoSlide is false, define next arrow button inline style object
   */
  nextBtnStyle: {
    type: Object,
  },
  /**
   * when autoSlide is false, define prev arrow button inline style object
   */
  prevBtnStyle: {
    type: Object,
  },
  slideContainerClass: {
    type: String
  },
  /**
   * breakpoints to change itemsToShow based on the screensize
   * @example
   * [
   *     {
   *         size: 800,
   *         itemsToShow: 3,
   *     },
   *     {
   *         size: 740,
   *         itemsToShow: 2,
   *     },
   *     {
   *         size: 0,
   *         itemsToShow: 1,
   *     },
   * ];
   */
  breakpoints: {
    type: Array<iBreakpoint>,
    default: null,
  },
});

const slidesWrapper = ref<HTMLElement>();
const slidesWrapperInner = ref<HTMLElement>();
const currentSlide = ref(0);
let interval: DOMHighResTimeStamp;
let stopSliding = false;
let speed: number, then: DOMHighResTimeStamp, elapsed: number;

const itemsToShow = ref(getItemsToShow());

const clonedArr = computed(() => {
  let result: any[] = [];
  //replicate arr until first "itemsToShow" elements show up in the same order at the end.
  const resultLength = itemsToShow.value * props.slidesArray.length + itemsToShow.value;

  let i = 0;
  let j = 0;
  while (i <= resultLength - 1) {
    result.push(props.slidesArray[j]);
    i++;
    j++;
    if (j === props.slidesArray.length) j = 0;
  }
  return result;
});

const numOfViews = computed(() => Math.ceil(clonedArr.value.length / itemsToShow.value));
const slideWidth = computed(() => {
  const result = 100 / itemsToShow.value;
  return `${result}%`;
});

function getItemsToShow() {
  let result = props.itemsToShow;
  if (props.breakpoints && props.breakpoints.length > 0) {
    const breakpoint = props.breakpoints.find((b) => b.size <= window.innerWidth);
    if (breakpoint) result = breakpoint.itemsToShow;
  }
  return result;
}

onMounted(() => {
  itemsToShow.value = getItemsToShow();

  debug("onMounted() - ");
  window.addEventListener('resize', () => itemsToShow.value = getItemsToShow());
  if (props.autoSlide) {
    document.addEventListener("visibilitychange", onPageVisibilityChange);
    startAnimation();
  }
});

onBeforeUnmount(() => {
  debug("onBeforeUnmount() - ");
  document.removeEventListener("visibilitychange", onPageVisibilityChange);
});

onUnmounted(() => {
  debug("onUnmounted() - ");
  window.cancelAnimationFrame(interval);
});

function onPageVisibilityChange() {
  debug("onPageVisibilityChange() - ", document.hidden);
  if (document.hidden) stopAnimation();
  else startAnimation();
}

function startAnimation() {
  stopSliding = false;
  speed = props.transitionSpeed * 1000;
  then = 0;
  slideRight();
  interval = window.requestAnimationFrame(animate);
}

function animate(now: DOMHighResTimeStamp) {
  if (stopSliding) return;
  if (then === 0) then = now;

  elapsed = now - then;
  if (elapsed >= speed) {
    then = now;
    slideRight();
  }
  interval = window.requestAnimationFrame(animate);
}

function stopAnimation() {
  stopSliding = true;
  window.cancelAnimationFrame(interval);
  slidesWrapperInner.value?.classList.add("carousel__disable-transition");
  currentSlide.value = 0;
  slidesWrapper.value?.style.setProperty("--current-slide", `${currentSlide.value}`);
  slidesWrapperInner.value?.offsetHeight;
  slidesWrapperInner.value?.classList.remove("carousel__disable-transition");
  slidesWrapperInner.value?.offsetHeight;
}
function pauseAnimation(stopTransitionClass: string) {
  slidesWrapperInner.value?.classList.add(stopTransitionClass);
  slidesWrapperInner.value?.offsetHeight;
  window.cancelAnimationFrame(interval);
  slidesWrapperInner.value?.classList.remove(stopTransitionClass);
  slidesWrapperInner.value?.offsetHeight;
}

//TODO: "immediate" type is not working as expected
function onMouseEnter() {
  debug("onMouseEnter() - ");
  if (props.autoSlide && props.stopOnHover) {
    if (props.stopOnHoverType === "wait") {
      pauseAnimation("carousel__pause-transition");
    } else {
      pauseAnimation("carousel__disable-transition");
    }
  }
}

function onMouseLeave() {
  debug("onMouseLeave() - ");
  if (props.autoSlide && props.stopOnHover) startAnimation();
}

function slideRight() {
  if (currentSlide.value === numOfViews.value - 1) {
    resetSliding(next);
  } else {
    next();
  }
}

function slideLeft() {
  if (currentSlide.value === 0) {
    resetSliding(prev);
  } else {
    prev();
  }
}

function resetSliding(move: Function) {
  slidesWrapperInner.value?.classList.add("carousel__disable-transition");
  move();
  slidesWrapperInner.value?.offsetHeight; //flush css to cause a reflow.
  slidesWrapperInner.value?.classList.remove("carousel__disable-transition");
  move();
}

function next() {
  currentSlide.value = infiniteModulo(currentSlide.value + 1, numOfViews.value);
  if (currentSlide.value <= 1) {
    slidesWrapperInner.value?.offsetHeight; //flush css to cause a reflow.
  }
  slidesWrapper.value?.style.setProperty("--current-slide", `${currentSlide.value}`);
}

function prev() {
  currentSlide.value = infiniteModulo(currentSlide.value - 1, numOfViews.value);
  if (currentSlide.value <= 1) {
    slidesWrapperInner.value?.offsetHeight; //flush css to cause a reflow.
  }
  slidesWrapper.value?.style.setProperty("--current-slide", `${currentSlide.value}`);
}
</script>

<template>
  <div class="carousel__container">
    <button v-if="!autoSlide" type="button" :style="prevBtnStyle" :class="`carousel__btn ${prevBtnClass}`"
      @click="slideLeft">
      <slot name="prev" :_class="['__icon']">
        <img src="/arrow-left.svg" class="__icon" alt="arrow left" />
      </slot>
    </button>
    <div class="carousel-slides__wrapper" ref="slidesWrapper">
      <ul class="carousel-slides__wrapper-inner" ref="slidesWrapperInner"
        :style="{ transition: `all ${props.transitionSpeed}s ${timingFunction}` }" @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">
        <li v-for="(slide, index) in clonedArr" :key="index" :id="`${index + 1}`" :style="{ flex: `0 0 ${slideWidth}` }"
          :class="slideContainerClass ? `slide ${slideContainerClass}` : 'slide'">
          <slot name="slide" v-bind="slide" :_class="['__img']">
            <img :src="slide.src" class="__img" />
          </slot>
        </li>
      </ul>
    </div>
    <button type="button" v-if="!autoSlide" :style="nextBtnStyle" :class="`carousel__btn ${nextBtnClass}`"
      @click="slideRight">
      <slot name="next" :_class="['__icon']">
        <img src="/arrow-right.svg" class="__icon" alt="arrow right" />
      </slot>
    </button>
  </div>
</template>

<style scoped lang="scss">
.carousel__container {
  display: flex;
}

.carousel-slides__wrapper {
  width: fit-content;
  height: 100%;
  --current-slide: 0;
  overflow: hidden;
  list-style-type: none;
  display: flex;
}

.carousel__btn {
  z-index: 2;
  cursor: pointer;
  text-align: center;
  border: 0 solid transparent;
  background: transparent;

  .__icon,
  img,
  picture,
  svg,
  i {
    min-width: 30px;
    width: 50px;
    height: 50px;
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 1124px) and (min-width: 901px) {
      width: 50px;
      height: 50px;
    }

    @media (max-width: 900px) and (min-width: 727px) {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 726px) and (min-width: 600px) {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 599px) and (min-width: 401px) {
      width: 25px;
      height: 25px;
    }

    @media (max-width: 400px) {
      width: 20px;
      height: 20px;
    }
  }
}

.carousel-slides__wrapper-inner {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  transform: translateX(calc(-100% * var(--current-slide)));

}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  margin: 5px;

  .__img,
  img,
  picture,
  svg,
  i {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    border: 0;
    width: 250px;
    height: 250px;

    @media (max-width: 1124px) and (min-width: 901px) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 900px) and (min-width: 727px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 726px) and (min-width: 600px) {
      width: 130px;
      height: 130px;
    }

    @media (max-width: 599px) and (min-width: 401px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 400px) {
      width: 80px;
      height: 80px;
    }
  }

}

.carousel__disable-transition {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}

.carousel__pause-transition {
  -webkit-transition: all 5s ease !important;
  -moz-transition: all 5s ease !important;
  -o-transition: all 5s ease !important;
  transition: all 5s ease !important;
}

.gg-arrow-right-o {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid;
  transform: scale(var(--ggs, 1));
  border-radius: 20px;
}

.gg-arrow-right-o::after,
.gg-arrow-right-o::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  right: 4px;
}

.gg-arrow-right-o::after {
  width: 6px;
  height: 6px;
  border-top: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  bottom: 6px;
}

.gg-arrow-right-o::before {
  width: 10px;
  height: 2px;
  bottom: 8px;
  background: currentColor;
}
</style>
