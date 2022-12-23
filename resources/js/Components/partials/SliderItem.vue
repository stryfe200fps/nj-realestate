<template>
      <div class=" md:h-[800px] h-96 w-full  bg-image" :style="'background:url(' + image + '); background-repeat: no-repeat; background-size:cover;  background-position:center'" > 
      </div>

        <div class="absolute">

        <Transition name="slide"> 
            <h2  class="text-white text-2xl md:text-4xl font-extrabold">{{ label }}</h2>

          </Transition>
        <div class="flex gap-4 justify-center mt-8">  
          <Button icon="chevron-right" label="Course Schedule"></Button>
          <Button icon="chevron-right" label="Course Detail" color="light"></Button>
        </div>
        </div>

</template>



<script setup>


import Button from '@/Components/partials/Button.vue'
import { onMounted, ref } from '@vue/runtime-core';


const props = defineProps({
    label: {
        type: String,
    },
    image: {
      type: String
    }
    
});

</script>

<style scoped>

.slide-enter-from { transform: translateY(-20%) }
.slide-enter-to { transform: translateY(0) }

.slide-leave { transform: translateY(0) }
.slide-leave-to { transform: translateY(-20%) }

.slide-enter-active,
.slide-leave-active { transition: all 2200ms ease-in }


.bg-image {
  position:relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.bg-image::before {
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: block;
    background-color: rgba(0,0,0,.55);
}

</style>
