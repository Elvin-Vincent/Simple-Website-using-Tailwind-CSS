import './menu';
function App() {
  return (
    <div class="text-gray-600 font-bold grid md:grid-cols-6">
      
      <div class="md:col-span-1 md:flex md:justify-end" >
        <nav class="text-right">
          <div class="flex justify-between items-center">
            <h1 class="font-bold uppercase p-4 border-b border-gray-100">
            <a href="#">Wheels World</a>
            </h1>
            <div class="px-4 cursor-pointer md:hidden" id="menuicon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            </div>
          </div>
          <ul  class="text-red-600 text-sm mt-6 hidden md:block" id="navmenu" >
            <li class="py-1 border-r-4 border-red-600">
              <a href="#" class="px-4 flex justify-end">
                            <span>Home</span>
                            <svg class="w-5 inline-block ml-2"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                        </a>
                    </li>
                    <li class="py-1">
                        <a href="#" class="px-4 flex justify-end">
                            <span>About</span>
                            <svg class="w-5 inline-block ml-2"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>

                        </a>
                    </li>
                    <li class="py-1">
                        <a href="#" class="px-4 flex justify-end">
                            <span>Contact</span>
                            <svg class="w-5 inline-block ml-2"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <main class="px-16 py-6 bg-gray-100 md:col-span-5">
          <div class="flex justify-end  text-red-600 text-xs cursor-pointer uppercase tracking-wider ">
            <a class="md:border-2 border-red-600 rounded-full  py-2 px-3 hover:bg-red-600 hover:text-white transition easy-in duration-300" href="#">Login</a>
            <a class="ml-2 md:border-2 border-red-600 rounded-full  py-2 px-3  hover:bg-red-600 hover:text-white transition easy-in duration-300 " href="#">Signin</a>
          </div>
          <header>
            <h1 class="text-red-600 text-6xl font-bold  ">AutoHub</h1>
            <h3 class="text-2xl font-semibold">Beyond the Wheels</h3>
          </header>
          <div>
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200 ">Latest</h4>
            <div class="mt-8 grid lg:grid-cols-3 gap-10">
              {/*card*/}
            
              <div class="group h-96 w-80 [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/img/bmw-x4.jpg" alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">BMW X4</h1>
          <p class="text-lg">5 seater SUV</p>
          <p class="text-base">3L petrol engine along with automatic transmission </p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
            <div class=" flex items-center text-xs rounded-full p-2 absolute top-0 ml-2 mt-2 bg-white  ">
            <svg class="mr-2 w-5 inline-block "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> 
              <span>96.20 Lakh</span>
              </div>   
                    
          </div>

         

          <div class="group h-96 w-80 [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/img/mercedes.jpg" alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">Mercedes EQE</h1>
          <p class="text-lg">Electric SUV</p>
          <p class="text-base">power of 402.3bhp and 858nm of torque.</p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
            <div class="flex items-center text-xs rounded-full p-2 absolute top-0 ml-2 mt-2 bg-white  ">
            <svg class=" mr-2 w-5 inline-block"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span>1.39 Crore</span>
              </div>   
                    
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/img/BMW_iX1.avif" alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">BMW iX1</h1>
          <p class="text-lg"> 5 seater SUV</p>
          <p class="text-base"> power of 308.43bhp and 494nm of torque</p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
            <div class="flex items-center text-xs rounded-full p-2 absolute top-0 ml-2 mt-2 bg-white">
  <svg class="mr-2 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>66.90 Lakh</span>
</div>

                    
          </div>

          </div>




          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Popular</h4>
          <div class="mt-8 grid lg:grid-cols-3 gap-10">
            {/*card*/}
            <div class="group h-96 w-80 [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/img/thar.jpg" alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">Thar</h1>
          <p class="text-lg"> 4 seater SUV</p>
          <p class="text-base">1.5L and diesel engine and 2L petrol engines along with both manual and automatic transmission </p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
            <div class="flex items-center text-xs rounded-full p-2 absolute top-0 ml-2 mt-2 bg-white  ">
            <svg class="mr-2 w-5 inline-block "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> 
              <span>10.98 Lakh</span>
              </div>   
                    
          </div>

          <div class="group h-96 w-80 [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/img/tata.webp" alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">Tata Harrier</h1>
          <p class="text-lg"> 5 seater SUV </p>
          <p class="text-base">2L diesel engine along with both manual and automatic transmission</p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
            <div class="text-xs flex items-center rounded-full p-2 absolute top-0 ml-2 mt-2 bg-white  ">
            <svg class="mr-2 w-5 inline-block "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span>15.49 Lakh</span>
              </div>   
                    
          </div>
          
          
  <div class="group h-96 w-80 [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/img/innova.jpg" alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">Toyota Innova Crysta</h1>
          <p class="text-lg">8 seater MUV</p>
          <p class="text-base"> 2.4L diesel engine along with manual transmission </p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
 
    
           
            <div class="text-xs flex items-center rounded-full p-2 absolute top-0 ml-2 mt-2 bg-white  ">
            <svg class="w-5 mr-2 inline-block"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span>19.99 Lakh </span>
              </div>   
                    
          </div>
          </div>
          <div class="flex justify-center mt-7">
            <div class="bg-gray-100 rounded-full py-2 px-3  text-xs cursor-pointer uppercase tracking-wider transform hover:scale-125 hover:bg-opacity-50
            transition ease-in duration-200 ">load more</div>
          </div>
        </div>
        
      </main>
      
    </div>
  );
}

export default App;
