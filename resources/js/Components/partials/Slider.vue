<template>

    <swiper  :navigation="true" :modules="modules" :effect="'fade'" class="mySwiper">

    <swiper-slide >
      <slider-item image="https://njrealestateschoolonline.com/images/slider/slider-1.jpg" label="New Broker's Course Jan. 16th!" />
    </swiper-slide>

    <swiper-slide >
      <slider-item image="https://njrealestateschoolonline.com/images/slider/slider-2.jpg" label="Highly Effective Bootcamp Format!" />
    </swiper-slide>

  </swiper>
  
</template>

<script setup>

import SliderItem from '@/Components/partials/SliderItem.vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade } from "swiper";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation, EffectFade]

</script>

<style>

</style>