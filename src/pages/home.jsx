import React from "react";
import cell from "../assets/cellimg.jpg";
import logo from "../assets/logo.png";
import logos from "../assets/logos.png";
import vesit from "../assets/veslogo.png";
import gdc from "../assets/gdclogo.png";
import homebg from "../assets/homebg.png";
import video from "../assets/videos/vid.mp4"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div class="relative">
        <nav
          class="py-5 border-b-default border-solid border-gray-200 z-10 w-full bg-inherit lg:fixed"
          id="topnav"
        >
          <div class="mx-auto max-w-7xl  lg:px-8">
            <div class="w-full flex flex-col lg:flex-row">
              <div class="flex justify-between lg:hidden px-4">
                <a href="/" class="flex items-center w-14">

                  <img src={logo} />
                </a>
                <button
                  data-collapse-toggle="navbar"
                  type="button"
                  class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="hidden bg-pink-100/30 w-28 rounded-lg lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:overflow-auto transition-all duration-500 delay-200 "
                id="navbar"
              >
                    <Link to="/" class="flex mx-auto w-14 h-14">
                      <img src={logo} />
                    </Link>
              </div>
        
            </div>
          </div>
        </nav>
        <section class="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <Link to="/" class="flex mx-auto w-44 my-4 ">

<img src={logos} />
</Link>
            <div class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
              
              <span class="font-inter text-xs font-medium text-gray-900 ml-3">
                <Link to ="#steps">
                Explore how to use HistoGrade.
                </Link>
              </span>
              <a
                href="/"
                class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                    stroke="white"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
              Based upon the advanced processing of
              <span class="text-indigo-600"> 14 Features </span>
            </h1>
            <p class="max-w-xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
              At Histograde, we are dedicated to revolutionizing oral pre-cancer diagnosis through advanced technology and intelligent analysis. We have developed a cutting-edge system that intelligently processes 14 key features in histopathological cells to accurately detect the stage of oral pre-cancer.
            </p>
            <a
              href="/select"
              class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
            >
              Give it a try
              <svg
                class="ml-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <div class="flex justify-center">
              <img
                src={homebg}
                alt="Dashboard image"
              />
            </div>
          </div>
        </section>

        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto text-center">
    <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase">
        Revolutionary Step
    </p>

    <h2 class="mt-6 max-w-3xl text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Transforming manual efforts with automations
    </h2>
</div>


            <div class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
              <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                <div class="flex items-start">
                  <svg class="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <div class="ml-5">
                    <h3 class="text-xl font-semibold text-black">Advanced AI Diagnosis</h3>
                    <p class="mt-3 text-base text-gray-600">
                      Our solution leverages artificial intelligence and machine learning to revolutionize oral dysplasia grading.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg class="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div class="ml-5">
                    <h3 class="text-xl font-semibold text-black">Instant Diagnostic Reports</h3>
                    <p class="mt-3 text-base text-gray-600">
                      Our solution allows for instant generation of diagnostic reports to save time and streamline the diagnostic process.
                    </p>
                  </div>

                </div>

                <div class="flex items-start">
                  <svg class="flex-shrink-0 text-red-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div class="ml-5">
                    <h3 class="text-xl font-semibold text-black">Precision Diagnosis</h3>
                    <p class="mt-3 text-base text-gray-600">
                      Through automated grade prediction and elimination of subjective interpretation, we deliver reliable diagnostic results.
                    </p>
                  </div>

                </div>
              </div>

              <div class="lg:col-span-3">
                <video class="w-full rounded-lg shadow-xl" autoplay loop muted>
                  <source src={video} type="video/mp4" />
                </video>
              </div>


            </div>

          </div>
        </section>

        <section class="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24" id="steps">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <p class="text-sm font-bold uppercase tracking-widest text-gray-700">How It Works</p>
              <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Methodology
              </h2>
            </div>
            <ul class="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
              <li class="flex-start group relative flex lg:flex-col">
                <span
                  class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"></span>
                <div
                  class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-600 group-hover:text-white">
                    <path
                      d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="ml-6 lg:ml-0 lg:mt-10">
                  <h3
                    class="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                    Upload Tissue Image
                  </h3>
                  <h4 class="mt-2 text-base text-gray-700">Upload the histopathological image</h4>
                </div>
              </li>
              <li class="flex-start group relative flex lg:flex-col">
                <span
                  class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"></span>
                <div
                  class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-600 group-hover:text-white">
                    <path
                      d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="ml-6 lg:ml-0 lg:mt-10">
                  <h3
                    class="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                    Choose a feature
                  </h3>
                  <h4 class="mt-2 text-base text-gray-700">Select a feature to process or evaluate based on 14 features</h4>
                </div>
              </li>
              <li class="flex-start group relative flex lg:flex-col">
                <div
                  class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-600 group-hover:text-white">
                    <path
                      d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="ml-6 lg:ml-0 lg:mt-10">
                  <h3
                    class="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                    Generate Report
                  </h3>
                  <h4 class="mt-2 text-base text-gray-700">Get and download the report with inferences.</h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
