<template>
      <a href="#" :class="color"  class=" px-6 py-2 text-xs md:text-lg  rounded-md">{{ label }} <i :class="'fas fa-'+ icon "></i> </a>
</template>
<script setup>

import { ref, computed } from "@vue/runtime-core";

const props = defineProps({
    label: {
        type: String,
    },
    color: {
        type: String
    },
    icon: {
        type: String
    }

});


        // <button  class="px-6 py-2 mt-2 rounded-md bg-gray-400 text-xl text-white">View All Courses</button>

const color = computed(() => {
    if (props.color === 'light')
        return 'bg-white border-white hover:bg-gray-300 text-black'

    if (props.color === 'dark')
        return 'bg-gray-400 text-white hover:bg-gray-500'

    if (props.color === 'transparent')
        return 'text-primary bg-transparent border-primary border hover:bg-primary-hover hover:text-white'

    return 'bg-primary border-primary hover:bg-primary-hover text-white'
});






</script>

<style>

</style>