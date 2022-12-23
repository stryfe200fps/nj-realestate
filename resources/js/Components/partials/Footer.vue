<template>
  <div class="bg-primary md:h-80 h-auto  ">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 container mx-auto place-items-center items-start sm:pb-10 pb-28">

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

<script setup>

</script>

<style>

</style>