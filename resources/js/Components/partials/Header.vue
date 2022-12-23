<template>

 <div class="h-16 bg-primary">
  </div>
 
<div   class="w-full  bg-nav dark-mode:text-gray-200  dark-mode:bg-gray-800 shadow-md z-50">
  <div class="flex flex-col py-4 container mx-auto  lg:items-center lg:justify-between lg:flex-row ">
    <div class="p-4 flex flex-row items-center justify-between">
      <a href="#"> <img src="https://njrealestateschoolonline.com/images/logo.png" class="w-52" />
    </a>

      <button class="lg:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="active = !active">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path v-if="!active" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path v-if="active" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav  :class="active ? 'flex' : 'hidden'"  class=" flex-col flex-grow pb-4 md:pb-0  lg:flex lg:justify-center lg:flex-row uppercase">
      <a class="px-1 py-2 mt-2 lg:text-sm text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4   focus:outline-none focus:shadow-outline" href="#">Home</a>
      <a class="px-1 py-2 mt-2 lg:text-sm text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">Courses</a>
      <a class="px-1 py-2 mt-2 lg:text-sm text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">Schedule</a>
      <a class="px-1 py-2 mt-2  lg:text-sm text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">School Policies</a>
      <div   @click="contact = !contact"  class="relative dropdown" >
        <button  class=" lg:text-sm text-md font-medium flex flex-row text-primary hover:text-black items-center w-full px-1 py-2 mt-2 text-left  rounded-lg  md:w-auto md:inline md:mt-0 md:ml-4 ">
          <span class="uppercase">Contact</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="contact ? 'rotate-180' : 'rotate-0'" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      <Transition name="slide"
      >
        <div v-if="contact" class=" md:absolute w-full md:mt-8 origin-top-right rounded-md md:shadow-lg md:w-48 z-50">
      
          <div class=" md:bg-white rounded-b-md md:shadow dark-mode:bg-gray-800">
            <a class="block px-4 py-2 mt-2 hover:bg-primary hover:text-white md:text-sm font-semibold  md:mt-0 " href="#">Our Team</a>
            <a class="block px-4 py-2 mt-2 hover:bg-primary hover:text-white md:text-sm font-semibold  md:mt-0 " href="#">Contact</a>
          </div>
        </div>

      </Transition>
      </div>

      <a class="sm:hidden block px-1 py-2 lg:text-sm mt-2 text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#"> 
                <div class="bg-primary inline-flex w-7 h-7 text-white items-center  justify-center rounded-full "> <i class="fas fa-sign-in-alt"></i></div>  Login</a>

      <a class="sm:hidden block px-1 py-2 lg:text-sm mt-2 text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#"> 
                <div class="bg-primary inline-flex w-7 h-7 text-white items-center  justify-center rounded-full "> <i class="fas fa-edit"></i></div>  Register</a>
    </nav>
    <div class="uppercase items-center   flex"> 
      <a class="sm:block hidden px-1 py-2 lg:text-sm mt-2 text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#"> 
                <div class="bg-primary inline-flex w-7 h-7 text-white items-center  justify-center rounded-full "> <i class="fas fa-sign-in-alt"></i></div>  Login</a>

      <a class="sm:block hidden px-1 py-2 lg:text-sm mt-2 text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#"> 
                <div class="bg-primary inline-flex w-7 h-7 text-white items-center  justify-center rounded-full "> <i class="fas fa-edit"></i></div>  Register</a>

    </div>
  </div>
</div>
  
</template>

<script setup>

import { ref  } from 'vue';
const active = ref(false);
const contact = ref(false);


</script>

<style scoped>

.slide-enter-from { transform: translateY(-20%) }
.slide-enter-to { transform: translateY(0) }

.slide-leave { transform: translateY(0) }
.slide-leave-to { transform: translateY(-20%) }

.slide-enter-active,
.slide-leave-active { transition: all 200ms ease-in }


@media screen and (min-width: 768px) {
  
nav > a:after, .auth > a:after, .dropdown > button:after {
  display:block;
  content: '';
  border-bottom: solid 3px #b40101;  
  border-bottom-width: 3px;
  transform: scaleX(0);  
  transition: transform 200ms ease-in ;
}
nav > a:hover:after , .auth > a:hover:after, .dropdown > button:hover:after  {
 transform: scaleX(0.7);
}

}


</style>

