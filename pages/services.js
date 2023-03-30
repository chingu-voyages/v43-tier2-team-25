import React from 'react'
import Image from 'next/image';
import thailand from '../public/Assets/Images/services/thailand.jpg'
import highway from '../public/Assets/Images/services/highway.jpg'
import coast from '../public/Assets/Images/services/coast.jpg'
import mountain from '../public/Assets/Images/services/mountain.jpg'
import boat from '../public/Assets/Images/services/boat.jpg'

const Services = () => {
  return (
<div class="container">
   
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    {/* Carousel wrapper */} 
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* Item 1 */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image width="300px" height="400px" src={thailand} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 2 */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <Image src={highway} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 3 */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <Image src={coast} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 4 */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <Image src={mountain} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 5 */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <Image src={boat} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    {/* Slider Indicators */}
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* Slider Controls */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

{/* Question */}
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-white text-center">Why Choose <span class="text-blue-800">Us</span>?</h1>

{/*Info Section */}
<div id="info-container" class="flex flex-row gap-10 content-evenly">

{/*Item 1: 24/7 Support */}
<div id='' class="">
<div id='circle-headphones'></div>
<h4>24/7 Support</h4>
<p>We're always here for you. </p>
<p>Reach out at any time.</p>
</div>

{/*Item 2: Incredible Deals */}
<div>
<div id='circle-heart'></div>
<h4>Incredible Deals</h4>
<p>Reach your destination</p>
<p>at the lowest cost.</p>
</div>

{/*Item 3: Fast Bookings */}
<div>
<div id='circle-lightening'></div>
<h4>Fast Bookings</h4>
<p>You can book a flight at any time</p>
<p>withouot worrying.</p>
</div>
</div>


{/*Company History */}
<div id="company-history">
    <h2>Company History</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Interdum arcu volutpat interdum etiam et velit senectus. Bibendum vulputate dolor vestibulum vulputate sit quam. Erat lacus sollicitudin viverra sit nunc. Viverra vestibulum integer consectetur dignissim adipiscing sit. Neque tortor hac nibh malesuada interdum et posuere sit. Imperdiet quisque aliquam semper turpis nisl. At nunc elementum a nunc. Blandit consequat est et feugiat pellentesque mattis. Faucibus egestas aliquet blandit sed enim elementum.
Facilisis lorem nisi pulvinar pellentesque pharetra cursus. Ultrices odio ipsum nibh ac malesuada elit eu. Sit tempor mi egestas posuere sed vulputate neque ut purus. Gravida quis amet pharetra vitae lorem. Egestas odio at suscipit purus sapien ullamcorper. Malesuada et mattis lobortis elementum facilisi amet tempor. Risus neque amet massa ultrices enim.</p>
<Image></Image>
</div>

{/* Testimonials */}
<h4>Look at what people have to say about us</h4>
<div id='testimonial-container' class='flex flex-row gap-10 '>
{/* Person 1 */}
<div id='person-1'>
<div>
<Image></Image>
<p>Augusto De Vinchi</p>
<div id="opinion">
<p>"This is the best website I've used so far. I totally recommend it!"</p>
</div>
</div>
</div>

{/* Person 2 */}
<div id='person-2'>
<div>
<Image></Image>
<p>Akachukwu Oye</p>
</div>
<div id='opinion'>
    <p>I found it difficult to travel but flight
    made everything easy for me.</p>
</div>
</div>
{/* Person 3 */}
<div id='person-3'>
<div>
<Image></Image>
<p>Fahiza Sheirkh</p>
</div>
<div>
    <p>If you're looking for the best deals,
    don't worry no more,
    flighty's got you.</p>
</div>
</div>

<div>
    <p>Don't lose time. Fly with us!</p>
</div>
</div> 
{/* To do list:
- Correct colors
- Correct font sizes
- Desktop sizes
- Mobile view */}

</div>



  )
}

export default Services