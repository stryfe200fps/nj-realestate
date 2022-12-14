<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade } from "swiper";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";

import { ref  } from 'vue';

const modules = [Navigation, EffectFade]

const active = ref(false);
const contact = ref(false);


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
    <nav  :class="active ? 'flex' : 'hidden'"  class=" flex-col flex-grow pb-4 md:pb-0  lg:flex lg:justify-end lg:flex-row uppercase">
      <a class="px-1 py-2 mt-2 lg:text-sm text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4   focus:outline-none focus:shadow-outline" href="#">Home</a>
      <a class="px-1 py-2 mt-2 lg:text-sm text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">Courses</a>
      <a class="px-1 py-2 mt-2 lg:text-sm text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">Schedule</a>
      <a class="px-1 py-2 mt-2  lg:text-sm text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">School Policies</a>
      <div   @click="contact = !contact"  class="relative " >
        <button  class=" lg:text-sm text-md font-medium flex flex-row text-primary hover:text-black items-center w-full px-1 py-2 mt-2 text-left  rounded-lg  md:w-auto md:inline md:mt-0 md:ml-4">
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
      <a class="px-1 py-2 lg:text-sm mt-2 text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">Login</a>
      <a class="px-1 py-2 lg:text-sm mt-2 text-md font-medium text-primary  hover:text-black md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline" href="#">Register</a>
    </nav>
  </div>
</div>


<div class="sm:container sm:mt-10 z-40">

    <swiper  :navigation="true" :modules="modules" :effect="'fade'" class="mySwiper">
    <swiper-slide >

      <div class=" h-96 w-full bg-image" style="background:url(https://njrealestateschoolonline.com/images/slider/slider-1.jpg); background-repeat: no-repeat; background-size: cover; " > 
      </div>
        <div class="absolute">
        <h2 class="text-white text-2xl md:text-4xl font-extrabold">Call/Text (973) 314-4436 for details!</h2>
        <div class="flex gap-4 justify-center mt-8">  
        <a href="#" class="text-white px-6 py-2 text-xs md:text-lg bg-primary border-primary hover:bg-primary-hover rounded-md">Course Schedule <i class="fas fa-chevron-right"></i> </a>
        <a href="#" class="text-black px-6 py-2 text-xs md:text-lg bg-white border-white hover:bg-gray-300 rounded-md">Course Detail <i class="fas fa-chevron-right"></i> </a>
        </div>
        </div>
    </swiper-slide>

    <swiper-slide >
      <div class=" h-96 w-full bg-image" style="background:url(https://njrealestateschoolonline.com/images/slider/slider-2.jpg); background-repeat: no-repeat; background-size: cover; " > 
      </div>
        <div class="absolute">
        <h2 class="text-white text-2xl md:text-4xl font-extrabold">New Salesperson Course Nov. 7th!</h2>
        <div class="flex gap-4 justify-center mt-8">  
        <a href="#" class="text-white px-6 py-2 text-xs md:text-lg bg-primary border-primary hover:bg-primary-hover rounded-md">Course Schedule <i class="fas fa-chevron-right"></i> </a>
        <a href="#" class="text-black px-6 py-2 text-xs md:text-lg bg-white border-white hover:bg-gray-300 rounded-md">Course Detail <i class="fas fa-chevron-right"></i> </a>
        </div>
        </div>
    </swiper-slide>
  </swiper>

</div>


<section class="bg-gray-100 sm:my-8">
		<div class="container">
      <div class="py-8"> 
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center my-8">Timeline</p>
			<div class="space-y-8">
				<div>
					<h3 class="mb-3 text-lg font-bold md:text-xl">2021</h3>
					<ul class="space-y-4">
						<li class="space-y-1">
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-primary">
									<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
									<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
								</svg>
								<h4 class="font-medium">Quis velit quae similique maxime optio temporibus</h4>
							</div>
							<p class="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
						</li>
						<li class="space-y-1">
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-primary">
									<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
									<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
								</svg>
								<h4 class="font-medium">Quis velit quae similique maxime optio temporibus</h4>
							</div>
							<p class="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-3 text-lg font-bold md:text-xl">2020</h3>
					<ul class="space-y-4">
						<li class="space-y-1">
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-primary">
									<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
									<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
								</svg>
								<h4 class="font-medium">Quis velit quae similique maxime optio temporibus</h4>
							</div>
							<p class="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
						</li>
						<li class="space-y-1">
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-primary">
									<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
									<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
								</svg>
								<h4 class="font-medium">Quis velit quae similique maxime optio temporibus</h4>
							</div>
							<p class="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
						</li>
						<li class="space-y-1">
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-primary">
									<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
									<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
								</svg>
								<h4 class="font-medium">Quis velit quae similique maxime optio temporibus</h4>
							</div>
							<p class="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-3 text-lg font-bold md:text-xl">2019</h3>
					<ul class="space-y-4">
						<li class="space-y-1">
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-primary">
									<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
									<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
								</svg>
								<h4 class="font-medium">Quis velit quae similique maxime optio temporibus</h4>
							</div>
							<p class="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
						</li>
						<li class="space-y-1">
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-primary">
									<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
									<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
								</svg>
								<h4 class="font-medium">Quis velit quae similique maxime optio temporibus</h4>
							</div>
							<p class="ml-7 dark:text-gray-400">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
						</li>
					</ul>
				</div>
				</div>
			</div>
		</div>
	</section>

  <div class="bg-white container  py-20">
  <div class="mx-auto  max-w-7xl px-6 lg:px-8">
    <div class="sm:text-center">
      <h2 class="text-lg font-semibold leading-8 text-primary">Transactions</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
    </div>

    <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
      <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white sm:shrink-0">
            <!-- Heroicon name: outline/globe-alt -->
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Competitive exchange rates</p>
            <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white sm:shrink-0">
            <!-- Heroicon name: outline/scale -->
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">No hidden fees</p>
            <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white sm:shrink-0">
            <!-- Heroicon name: outline/bolt -->
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Transfers are instant</p>
            <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          </div>
        </div>

        <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white sm:shrink-0">
            <!-- Heroicon name: outline/device-phone-mobile -->
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <div class="sm:min-w-0 sm:flex-1">
            <p class="text-lg font-semibold leading-8 text-gray-900">Mobile notifications</p>
            <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<section class="container w-full">
  <!-- <h2 class="flex justify-center text-2xl md:text-4xl lg:text-5xl my-8 text-gray-600">Our Course Products</h2> -->
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center my-8">Our Course Products</p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 gap-y-8 sm:gap-x-20  mx-auto place-items-center">

    <div class="p-4  hover:scale-110  transition ease-in delay-150 bg-gray-200 rounded-md shadow-lg">
      <div class="h-60 w-80 lg:w-72 ">
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
        <a href="#" class="text-white px-6 py-2 text-md bg-primary border-primary hover:bg-primary-hover rounded-md">Book now</a>
        <a href="#" class="text-primary px-4 py-2 text-md bg-transparent border-primary border hover:bg-primary-hover hover:text-white rounded-md">Detail</a>
      </div>
    </div>


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
        <a href="#" class="text-white px-6 py-2 text-md bg-primary border-primary hover:bg-primary-hover rounded-md">Book now</a>
        <a href="#" class="text-primary px-4 py-2 text-md bg-transparent border-primary border hover:bg-primary-hover hover:text-white rounded-md">Detail </a>
      </div>
    </div>
    </div>

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
        <a href="#" class="text-white px-6 py-2 text-md bg-primary border-primary hover:bg-primary-hover rounded-md">Book now</a>
        <a href="#" class="text-primary px-4 py-2 text-md bg-transparent border-primary border hover:bg-primary-hover hover:text-white rounded-md">Detail </a>
      </div>
    </div>
    </div>

  </div>


    <div class="flex justify-center my-8">

        <button  class="px-6 py-2 mt-2 rounded-md bg-gray-400 text-xl text-white">View All Courses</button>
</div>


</section>





<br>
    <div class="bg-primary md:h-80 h-auto  ">
        <div class="grid sm:grid-cols-2 grid-cols-1 container mx-auto place-items-center items-start sm:pb-10 pb-28">

            <div class="flex flex-col my-8 space-y-4 md:space-y-8"> 
              <h2 class="text-xl md:text-4xl text-white">Request A Callback</h2>
              <b class="text-white text-sm">Our office number is (973) 314-4436 (voice & text).</b>
              <p class="text-white text-sm">We can be reached 24/7 via text message to our office number or by filling out the adjacent form. We will call you back within the same working day.</p>
            </div>

            <div class="flex w-full flex-col sm:my-8 space-y-2 md:space-y-8"> 
              <p class="text-white text-sm">Please contact us with any questions you might have.</p>

                <form> 
              <div class="grid  grid-cols-2 gap-2 ">
                <input class=" rounded-md h-8 md:h-10 text-sm md:text-md " placeholder="First name" type ="text"/>
                <input class="rounded-md h-8 md:h-10 text-sm md:text-md" placeholder="Last name" type ="text"/>
                <input class="rounded-md h-8 md:h-10 text-sm md:text-md" placeholder="Phone" type ="text"/>
                <input class="rounded-md h-8 md:h-10 text-sm md:text-md" placeholder="Email Address" type ="email"/>
              </div>

              <button  class="w-full py-2 mt-2 h-8 md:h-10 rounded-md text-sm md:text-md  bg-red-100">Submit</button>

                </form>
            </div>
        </div>

    </div>


    <div  class="bg-blue-300 py-4 footer-bg h-auto w-full">
        <div class="grid 	grid-cols-2 sm:grid-cols-3 container mx-auto place-items-center items-start	">

            <div class="flex col-span-2 sm:col-span-1 flex-col my-8 space-y-8"> 
      <a href="#"> <img src="https://njrealestateschoolonline.com/images/logo.png" class="w-80" /> </a>
              <p class="text-footer text-sm">EZ Real Estate CE, LLC dba "NJ Real Estate School" is licensed by the New Jersey Real Estate Commission to offer the NJ 75 hour real estate salesperson's pre-license course, the 150 hour real estate broker's pre-license course and real estate continuing education.
          </p>
            </div>

            <div class="flex w-full sm:w-auto  flex-col my-4 space-y-4 sm:pb-0 pb-10"> 
              <h2 class="text-2xl sm:text-3xl font-medium text-footer">Company</h2>
              <div class="flex flex-col text-sm space-y-1">
                <a class="hover:text-primary" href="#"><i class="fas fa-caret-right"> </i>  Home</a>
                <a class="hover:text-primary" href="#"> <i class="fas fa-caret-right"> </i> Courses</a>
                <a class="hover:text-primary"  href="#"> <i class="fas fa-caret-right"> </i> Schedule</a>
                <a class="hover:text-primary"  href="#"> <i class="fas fa-caret-right"> </i> Schedule</a>
                <a class="hover:text-primary"  href="#"> <i class="fas fa-caret-right"> </i> Schedule</a>
                <a class="hover:text-primary"  href="#"> <i class="fas fa-caret-right"> </i> Schedule</a>
              </div>
            </div>

            <div class="flex  w-full sm:w-auto flex-col my-4 space-y-4 sm:pb-0 pb-10"> 
              <h2 class="text-2xl sm:text-3xl font-medium text-footer">Contact us</h2>
              <div class="flex flex-col text-sm space-y-1">
                <span> <i class="fas fa-caret-right"> </i>  <i class="fas fa-home text-primary mr-2"></i>  188 Elm Street, Westfield, NJ 07090</span>
                <span> <i class="fas fa-caret-right"> </i>  <i class="fas fa-phone text-primary mr-2"></i>  (973) 314-4436</span>
                <a  href="#"> <i class="fas fa-caret-right"> </i>  <i class="fas fa-envelope text-primary mr-2"></i>  Contact us</a>
                <span > <i class="fas fa-caret-right"> </i>  <i class="fas fa-clock text-primary mr-2"></i>  Mon-Fri 9:00 am - 5:00 pm</span>
              </div>

              <div class="flex space-x-2  h-10 ">
                <a href="#" class="bg-gray-600 hover:bg-primary w-10 h-10 items-center flex justify-center rounded-full text-white"> <i class="fab fa-facebook-f"></i></a>
                <a href="#" class="bg-gray-600 hover:bg-primary w-10 h-10 items-center flex justify-center rounded-full text-white"> <i class="fab fa-twitter"></i></a>
                <a href="#" class="bg-gray-600 hover:bg-primary w-10 h-10 items-center flex justify-center rounded-full text-white"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>

        </div>
    </div>

    <div class="bg-black w-full  ">
      <div class="flex  justify-center h-10">
          <span class=" text-white text-sm flex items-center">@ 2022 NJ Real Estate School  </span>
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
    background: url('https://njrealestateschoolonline.com/images/footer-top.png') top center repeat-x;
    content: "";
    top: -73px;
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    max-height: 73px;
    background-size: contain;
}

@media screen and (min-width: 768px) {
  
nav > a:after {
  display:block;
  content: '';
  border-bottom: solid 3px #b40101;  
  border-bottom-width: 3px;
  transform: scaleX(0);  
  transition: transform 200ms ease-in ;
}
nav > a:hover:after {
 transform: scaleX(0.7);
}

}



/* .swiper {
  width: 100%;
  height: 100%;
} */

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

}

.slide-enter-from { transform: translateY(-20%) }
.slide-enter-to { transform: translateY(0) }

.slide-leave { transform: translateY(0) }
.slide-leave-to { transform: translateY(-20%) }

.slide-enter-active,
.slide-leave-active { transition: all 200ms ease-in }

.swiper-container {
    position:relative;
    width: 90vw;
    height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}



.swiper-button-prev{
    color:#b40101;
}

.swiper-button-next{
    color:#b40101;
    height:10px;
}

:root {
    --swiper-navigation-size: 30px;
}

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
