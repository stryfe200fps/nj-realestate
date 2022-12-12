<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

import { ref  } from 'vue';

const active = ref(false);

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

 <div class="h-16 bg-primary">
  </div>
 
<div @mouseleave="active = false"  class="w-full  bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow-md">
  <div   class="flex flex-col py-4 container mx-auto md:items-center md:justify-between md:flex-row ">
    <div class="p-4 flex flex-row items-center justify-between">

      <img src="https://njrealestateschoolonline.com/images/logo.png" class="w-40" />

      <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="active = !active">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path v-if="!active" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path v-if="active" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav  :class="active ? 'flex' : 'hidden'"  class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
      <a class="px-2 py-2 mt-2 text-md font-medium  hover:text-primary     md:mt-0   " href="#">HOME</a>
      <a class="px-2 py-2 mt-2 text-md font-medium  hover:text-primary  md:mt-0 md:ml-4    " href="#">PORTFOLIO</a>
      <a class="px-2 py-2 mt-2 text-md font-medium   hover:text-primary md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">ABOUT</a>
      <a class="px-2 py-2 mt-2 text-md font-medium  hover:text-primary md:mt-0 md:ml-4   focus:outline-none focus:shadow-outline" href="#">CONTACT</a>
      <div  @mouseover="active = true" class=" relative" >
        <button  class="flex flex-row items-center w-full px-4 py-2 mt-2 text-left  rounded-lg  md:w-auto md:inline md:mt-0 md:ml-4">
          <span class="text-md font-medium ">DROPDOWN</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="active ? 'rotate-180' : 'rotate-0'" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div v-if="active" @mouseover="active = true" @mouseleave="active = false" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute w-full mt-7 origin-top-right rounded-md shadow-lg md:w-48">
          <div class=" bg-white rounded-b-md shadow dark-mode:bg-gray-800">
            <a class="block px-4 py-2 mt-2 hover:bg-primary hover:text-white text-sm font-semibold  md:mt-0 " href="#">Link #1</a>
            <a class="block px-4 py-2 mt-2 hover:bg-primary hover:text-white text-sm font-semibold  md:mt-0 " href="#">Link #2</a>
            <a class="block px-4 py-2 mt-2 hover:bg-primary hover:text-white text-sm font-semibold  md:mt-0 " href="#">Link #3</a>
          </div>
        </div>
      </div>    
    </nav>
  </div>
</div>


<div class="container mx-auto">

    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt sed repellat. Sapiente magnam molestias fugiat esse laudantium eius dolorem atque aperiam rerum architecto! Officia et at aliquam voluptates ducimus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus omnis fuga facere illo dolore illum aliquid alias asperiores quas vel voluptatum itaque repellendus accusantium quibusdam delectus, accusamus possimus voluptates?
    </p>

 <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt sed repellat. Sapiente magnam molestias fugiat esse laudantium eius dolorem atque aperiam rerum architecto! Officia et at aliquam voluptates ducimus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus omnis fuga facere illo dolore illum aliquid alias asperiores quas vel voluptatum itaque repellendus accusantium quibusdam delectus, accusamus possimus voluptates?
    </p>

 <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt sed repellat. Sapiente magnam molestias fugiat esse laudantium eius dolorem atque aperiam rerum architecto! Officia et at aliquam voluptates ducimus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus omnis fuga facere illo dolore illum aliquid alias asperiores quas vel voluptatum itaque repellendus accusantium quibusdam delectus, accusamus possimus voluptates?
    </p>
    baliko

</div>

<br>
    <div class="bg-primary h-80  ">
        <div class="grid grid-cols-2 container mx-auto place-items-center">

            <div> 
               request a callback 
               <br>
               test
            </div>

            <div>

                contact form

            </div>

        </div>

    </div>
    <div  class="bg-blue-300 py-4 footer-bg h-80 w-full">
        <div class="grid grid-cols-3 container mx-auto place-items-center	">
            <div>
                1st
            </div>

            <div>
                2nd
            </div>

            <div>
                3rd
            </div>

        </div>

    </div>
</template>

<style>

.footer-bg { 
    position: relative;
    background-color: #ededed;
    color: #898989;
}

.footer-bg:before { 
    background: url('footer-top.png') top center repeat-x;
    content: "";
    top: -73px;
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    max-height: 73px;
    background-size: contain;
}

nav > a:after {
  display:block;
  content: '';
  border-bottom: solid 3px #b40101;  
  transform: scaleX(0);  
  transition: transform 200ms ease-in-out;
}
nav > a:hover:after {
 transform: scaleX(1);
}

</style>
