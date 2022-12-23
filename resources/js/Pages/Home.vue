<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

import Header from '@/Components/partials/Header.vue'
import Footer from '@/Components/partials/Footer.vue'
import ProductCard from '@/Components/partials/ProductCard.vue'
import Button from '@/Components/partials/Button.vue'
import Slider from '@/Components/partials/Slider.vue'



defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <Header/>


    <div class="h-auto w-full z-40">
      <Slider/>
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

    <product-card/>
    <product-card/>
    <product-card/>

  </div>


    <div class="flex justify-center my-8">

        <Button color="dark" label="View All Courses"/>
</div>


</section>




<Footer/>
    
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





</style>
