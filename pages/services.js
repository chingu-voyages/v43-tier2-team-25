import React from 'react'
import Image from 'next/image';
import thailand from '../public/Assets/Images/services/thailand.jpg'
import highway from '../public/Assets/Images/services/highway.jpg'
import coast from '../public/Assets/Images/services/coast.jpg'
import mountain from '../public/Assets/Images/services/mountain.jpg'
import boat from '../public/Assets/Images/services/boat.jpg'
import flights from '../public/Assets/Images/services/airplane-engines.png'
import hotel from '../public/Assets/Images/services/hotel.png'
import restaurant from '../public/Assets/Images/services/restaurant-table.png'
import headset from '../public/Assets/Images/services/headset.svg'
import heartbreak from '../public/Assets/Images/services/heartbreak-fill.svg'
import lightening from '../public/Assets/Images/services/fast-fill.svg'
import managment from '../public/Assets/Images/services/management-team.png'
import seniorMan from '../public/Assets/Images/services/senior-happy-man.jpeg'
import man from '../public/Assets/Images/services/carefree-guy.jpeg'
import woman from '../public/Assets/Images/services/entrepeneur-woman.jpeg'

const Services = () => {
  return (
<div class="place-content-center lg:px-[13.25rem] md:px-[3.125rem] px-5">
   
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

{/* Flights | Hotels | Restaurants */}
<div id='flights-hotels-restaurants' class='flex flex-row gap-10 content-evenly place-content-center p-8 bg-white rounded-lg'>

<div id='flights' class='flex flex-col rounded-md  bg-[#e0ebff] py-4 px-20 shadow-2xl'>
<Image width='' height='' src={flights} class='' alt='airplane icon' />
<p>Flights</p>
</div>

<div id='Hotels' class='flex flex-col rounded-md  bg-[#e0ebff] py-4 px-20 shadow-2xl'>
<Image width='' height='' src={hotel} class='' alt='hotel icon' />
<p>Hotels</p>
</div>

<div id='Restaurants' class='flex flex-col rounded-md bg-[#e0ebff] py-4 px-20 shadow-2xl'>
<Image width='' height='' src={restaurant} class='' alt='restaurant icon' />
<p>Restaurants</p>
</div>

</div>
{/* Question */}

<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-white text-center py-10">Why Choose <span class="text-blue-800">Us</span>?</h1>

{/*Info Section */}
<div id='white-container' class='bg-white'>
<div id="info-container" class="flex flex-row gap-10 content-evenly place-content-center text-center pt-10 pb-20 bg-white">

{/*Item 1: 24/7 Support */}
<div id='' class="">
<div id='circle-headphones' class="flex justify-center pb-4">
    <Image width='' height='' alt=' 24/7 support'  src={headset} class='px-5 py-4 rounded-full bg-[#2d04de]' />
</div>
<h4 class="font-semibold">24/7 Support</h4>
<p>We're always here for you. </p>
<p>Reach out at any time.</p>
</div>

{/*Item 2: Incredible Deals */}
<div>
<div id='circle-heart' class="flex justify-center pb-4">
    <Image height='' width='' alt='incredible deals icon' src={heartbreak}
    class='p-5 rounded-full bg-[#e88510]' />
</div>
<h4 class='font-semibold'>Incredible Deals</h4>
<p>Reach your destination</p>
<p>at the lowest cost.</p>
</div>

{/*Item 3: Fast Bookings */}
<div>
<div id='circle-lightening' class="flex justify-center pb-4">
    <Image height='' width='' alt='fast booking icon' src={lightening} 
        class='p-5 rounded-full bg-[#04c731]'
    />
</div>
<h4 class='font-semibold'>Fast Bookings</h4>
<p>You can book a flight at any time</p>
<p>withouot worrying.</p>
</div>
</div>


{/*Company History */}
<div id="company-history" class='p-10'>
    <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-white text-center pb-3" >Company <span class="text-blue-800">History</span></h2>
    <p class="text-justify">Lorem ipsum dolor sit amet consectetur. Interdum arcu volutpat interdum etiam et velit senectus. Bibendum vulputate dolor vestibulum vulputate sit quam. Erat lacus sollicitudin viverra sit nunc. Viverra vestibulum integer consectetur dignissim adipiscing sit. Neque tortor hac nibh malesuada interdum et posuere sit. Imperdiet quisque aliquam semper turpis nisl. At nunc elementum a nunc. Blandit consequat est et feugiat pellentesque mattis. Faucibus egestas aliquet blandit sed enim elementum.
Facilisis lorem nisi pulvinar pellentesque pharetra cursus. Ultrices odio ipsum nibh ac malesuada elit eu. Sit tempor mi egestas posuere sed vulputate neque ut purus. Gravida quis amet pharetra vitae lorem. Egestas odio at suscipit purus sapien ullamcorper. Malesuada et mattis lobortis elementum facilisi amet tempor. Risus neque amet massa ultrices enim.</p>
<Image width='' height='' alt='team image' src={managment}
class='flex justify-center' />
</div>

{/* Testimonials */}
<h4 class="text-center text-[#4B4C4D] pb-4 font-bold text-2xl">Look at what people have to say about us</h4>
<div id='testimonial-container' class='flex flex-row gap-10 place-content-center'>
{/* Person 1 */}
<div id='person-1' class='bg-white p-3 rounded-lg shadow-2xl'>
<div class='flex flex-row pb-4 items-center gap-3'>
<Image height='' width='' alt='picture of first testimonial person' class='w-20 h-20 rounded-full' src={seniorMan} />
<p>Augusto De Vinchi</p>
</div>
<div id="opinion">
<p class='text-center'>"This is the best website I've used so far. I totally recommend it!"</p>
</div>

</div>

{/* Person 2 */}
<div id='person-2' class='bg-white p-3 rounded-lg shadow-2xl'>
<div class='flex flex-row pb-4 items-center gap-3'>
<Image alt='picture of testimonial man' src={man}
class='w-20 h-20 rounded-full' />
<p>Akachukwu Oye</p>
</div>
<div id='opinion'>
    <p class='text-center'>"I found it difficult to travel but flight
    made everything easy for me."</p>
</div>
</div>
{/* Person 3 */}
<div id='person-3' class='bg-white p-3 rounded-lg shadow-2xl'>
<div class='flex flex-row pb-4 items-center gap-3'>
<Image height='' width='' alt='picture of third testimonial person' src={woman} 
    class='w-20 h-20 rounded-full'
/>
<p>Fahiza Sheirkh</p>
</div>
<div>
    <p class='text-center'>"If you're looking for the best deals,
    don't worry no more,
    flighty's got you."</p>
</div>
</div>

</div> 
<p class="text-center p-4">SO DON'T LOSE TIME, FLY WITH US! </p>
{/* To do list:
- Correct colors
- Correct font sizes
- Desktop sizes
- Mobile view */}
</div>
</div>



  )
}

export default Services