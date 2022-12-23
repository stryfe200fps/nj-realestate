<template>
    <div>
    <div class="p-4  hover:scale-110  transition ease-in delay-150 bg-gray-200 rounded-md shadow-lg">
      <div class="h-60 w-80 lg:w-72">
      <img src="https://njrealestateschoolonline.com/images/course-01-opt.jpg" class="object-cover" />
      </div>
      <div class="flex justify-between items-center my-2">
        <span class="text-xs"> <i class="far fa-clock"></i>  75 Hours</span>
        <div class="flex space-x-1 text-sm text-yellow-500">
        <i  class="fa fa-star"></i>
        <i  class="fa fa-star"></i>
        <i  class="fa fa-star"></i>
        <i  class="fa fa-star"></i>
        <i  class="fa fa-star"></i>
        </div>
      </div>
      <h3 class="block text-lg text-gray-700 font-bold">Online Salesperson Course</h3>
      <span class="block my-2 text-primary tracking-tighter font-bold">$350</span>
      <div class="flex gap-4 my-2">
        <Button label="Book now" color="primary"/>
        <Button label="Detail" color="transparent"/>
      </div>
    </div>
    </div>
</template>

<script setup>

import Button from '@/Components/partials/Button.vue'

</script>

<style>

</style>