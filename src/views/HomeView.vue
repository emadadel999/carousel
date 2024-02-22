<script setup lang="ts">
import Carousel from '@/components/carousel/carousel.vue';

const slides = [
    { src: '/slides/stylized-converter.png'},
    { src: '/slides/stylized-fbm.png'},
    { src: '/slides/stylized-gram.png'},
    { src: '/slides/stylized-notes.png'},
    { src: '/slides/stylized-price-tracker.png'},
    { src: '/slides/stylized-translator.png'},
    { src: '/slides/stylized-ups.png'},
    { src: '/slides/stylized-wapp.png'},
];

</script>

<template>
    <div class="home__top-content__slides">
        <Carousel :slides-array="slides" :transition-speed="12" :auto-slide="true" :items-to-show="8">
            <template #slide="{ src, alt }">
                <div class="home__top-content__slides-slide">
                    <img
                        :src="src"
                        :alt="alt"
                        width="256"
                        height="335"
                    />
                    <!--
                    <picture>
                        <source
                            type="image/webp"
                            :srcset="`/lp-rebrand/carousel-slides/${src}.webp`"
                            width="256"
                            height="335"
                        >
                        <source
                            type="image/png"
                            :srcset="`/lp-rebrand/carousel-slides/${src}.png`"
                            width="256"
                            height="335"
                        >
                        <img
                            :src="`/lp-rebrand/carousel-slides/${src}.png`"
                            :alt="alt"
                            width="256"
                            height="335"
                        />
                    </picture>
                    -->
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style lang="scss">
@import '../styles/main.scss';
.home__top-content__slides {
    z-index: 900;
    height: 50%;
    overflow: hidden;

    @include thinner-than($screen-large) {
        height: 40%;
    }

    @include thinner-than($screen-tiny) {
        height: 35%;
    }
}

.home__top-content__slides-slide {
    @include flex-center;
    width: 100%;
    height: 100%;
    padding: u(m);

    > picture,
    > img {
        border-radius: u(0);
        border: 0;
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
    }

    @include thinner-than($screen-large) {
        @include shorter-than($screen-height-large) {
            padding: u(s);
        }
    }
}

</style>
