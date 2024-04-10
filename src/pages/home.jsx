import React from 'react';
import cell from '../assets/cellimg.jpg'
import logo from '../assets/logo.png'
import vesit from "../assets/veslogo.png"
import gdc from "../assets/gdclogo.png"

const Home = () => {
  return (
    <>
      {/* <div className="flex flex-1 md:w-full sm:w-[80%] h-screen flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <a href="" className="px-4 py-2 mb-5 text-sm transition duration-300 ease-in-out border rounded-lg border-white-700 dark:border-gray-300 text-white-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400">
          Forget about spending hours on manual evaluation
        </a>
        <h1 className="mx-auto text-lg font-bold tracking-normal sm:mx-5 font-display md:text-2xl text-white-500 dark:text-gray-300">
          Revolutionize Your Cellular Operations with<br />
          <span className="relative text-pink-500 whitespace-nowrap dark:text-purple-300">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-purple-300 dark:fill-purple-300/60" preserveAspectRatio="none">
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative text-2xl md:text-7xl">HistoGrade</span>
          </span>
        </h1>
        <div className="px-4 py-2 my-8 text-sm transition duration-300 ease-in-out border rounded-lg border-white-700 dark:border-gray-300 text-white-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 md:text-xl text-start">
          <ul className="mt-6 text-gray-500 list-disc list-inside">
            <li className="mb-2">Experience the future of histopathology.</li>
            <li className="mb-2">Our intelligent system streamlines every aspect.</li>
            <li className="mb-2">Enhancements are made to get accurate results.</li>
          </ul>
        </div>
        <a href="/select" className="px-4 py-3 font-medium text-white transition bg-pink-600 dark:bg-gray-800 rounded-xl dark:text-gray-300 hover:bg-purple-500 dark:hover:bg-gray-600">Get started</a>
      </div> */}
<div class="relative">
    <header class="absolute inset-x-0 top-0 z-10 w-full">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex">
                    <a href="#" title="" class="flex">
                        <img class="w-10" src={vesit} alt="" /> &nbsp;&nbsp;&nbsp; X &nbsp;&nbsp;&nbsp;
                    </a> <a href="#" title="" class="flex">
                        <img class="w-10" src={gdc} alt="" />
                    </a>
                </div>

                <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <section class="bg-gray-200 overflow-hidden min-h-screen">
        <div class="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div class="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div class="absolute bottom-0 right-0 hidden lg:block">
                    <img class="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                </div>
                <div class="relative px-4 pt-14 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-14 lg:text-left">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex">
                        <img class="w-36" src={logo} alt="" />
                    </a>
                </div>
                    <h1 class="text-4xl font-bold text-gray-800 sm:text-6xl xl:text-8xl">
                        HistoGrade<br />
                    </h1>
                    <p class="mt-8 text-xl text-gray-500 font-semibold">Tech tool that helps detecting oral pre-cancer stage in a histopathological cellular image</p>
                   
                   <div className='py-6'>
                   <button class="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-purple-500 border border-transparent rounded-xl sm:w-auto sm:ml-4 sm:mt-0 hover:bg-purple-600 focus:bg-purple-600">
                    <a href="/select">Get Started</a>
                                   
                                </button>
                   </div>
                    <div className="px-4 py-2 my-4 text-sm transition duration-300 ease-in-out border rounded-lg border-white-700 dark:border-gray-300 text-white-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 md:text-xl text-start">
          <ul className="mt-2 text-gray-500 list-disc list-inside">
            <li className="mb-2">Experience the future of histopathology.</li>
            <li className="mb-2">Our intelligent system streamlines every aspect.</li>
            <li className="mb-2">Instant results. No waiting time</li>
          </ul>
        </div>
                </div>
            </div>

            <div class="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full scale-100" src={cell} alt="" />
                </div>

                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div class="absolute bottom-0 left-0">
                    <div class="p-4 sm:p-6 lg:p-8">
                        <div class="flex items-center">
                            <svg class="w-10 h-10 text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                            </svg>
                            <h2 class="font-bold text-white text-7xl ml-2.5">395</h2>
                        </div>
                        <p class="max-w-xs mt-1.5 text-lg font-semibold text-white">Early Detections</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>


    </>
  );
};

export default Home;
