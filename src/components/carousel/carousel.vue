<script setup lang="ts">
import { onMounted, onBeforeUnmount, onUnmounted, ref, type Ref, inject, computed, nextTick } from "vue";
import infiniteModulo from './infinite-modulo'
import Debug from 'debug';
const debug = Debug('wave:cmpnt:carousel');

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
        default: 'linear'
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
const windowWidth: Ref<number> = inject('windowWidth') as Ref<number>;
let interval: DOMHighResTimeStamp;
let stopSliding = false;
let speed: number, then: DOMHighResTimeStamp, elapsed: number;

const itemsToShow = computed(() => {
    let result = props.itemsToShow;
    if (props.breakpoints && props.breakpoints.length > 0) {
        const breakpoint = props.breakpoints.find(b => b.size <= windowWidth?.value);
        if (breakpoint) result = breakpoint.itemsToShow;
    }
    return result;
});

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

onMounted(() => {
    debug('onMounted() - ');
    if (props.autoSlide) {
        document.addEventListener('visibilitychange', onPageVisibilityChange);
        startAnimation();
    }
});

onBeforeUnmount(() => {
    debug('onBeforeUnmount() - ');
    document.removeEventListener('visibilitychange', onPageVisibilityChange);
});

onUnmounted(() => {
    debug('onUnmounted() - ');
    window.cancelAnimationFrame(interval);
});

function onPageVisibilityChange() {
    debug('onPageVisibilityChange() - ', document.hidden);
    if (document.hidden)
        stopAnimation();
    else
        startAnimation();
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
    debug('onMouseEnter() - ');
    if (props.autoSlide && props.stopOnHover) {
        if (props.stopOnHoverType === "wait") {
            pauseAnimation('carousel__pause-transition');
        } else {
            pauseAnimation("carousel__disable-transition");
        }
    }
}

function onMouseLeave() {
    debug('onMouseLeave() - ');
    if (props.autoSlide && props.stopOnHover) startAnimation();
}

function slideRight() {
    console.log('currentSlide.value', currentSlide.value);
    console.log('numOfViews.value', numOfViews.value);
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
    <button v-if="!autoSlide" type="button" :style="prevBtnStyle" :class="`carousel__btn ${prevBtnClass}`"
        @click="slideLeft">
        <slot name="prev"></slot>
    </button>
    <div class="carousel-slides__wrapper" ref="slidesWrapper" :style="{ transition: `all ${props.transitionSpeed}s ${timingFunction}` }">
        <ul class="carousel-slides__wrapper-inner" ref="slidesWrapperInner"
            :style="{ transition: `all ${props.transitionSpeed}s ${timingFunction}` }" @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave">
            <li v-for="(slide, index) in clonedArr" :key="index" :id="`${index + 1}`" :style="{ flex: `0 0 ${slideWidth}` }"
                class="slide">
                <slot name="slide" v-bind="slide"></slot>
            </li>
        </ul>
    </div>
    <button type="button" v-if="!autoSlide" :style="nextBtnStyle" :class="`carousel__btn ${nextBtnClass}`"
        @click="slideRight">
        <slot name="next"></slot>
    </button>
</template>

<style lang="scss">
@import '../../styles/main.scss';
.carousel-slides__wrapper {
    width: fit-content;
    min-width: 80%;
    height: 100%;
    --current-slide: 0;
    overflow: hidden;
    list-style-type: none;
    display: flex;
}

.carousel__btn {
    min-width: 10%;
    width: 30%;
    z-index: 1200;
    cursor: pointer;
    text-align: center;
    border: 0 solid transparent;
    background: transparent;
}

.carousel-slides__wrapper-inner {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    transform: translateX(calc(-100% * var(--current-slide)));

    .slide {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 100%;
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
</style>
