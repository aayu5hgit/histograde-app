import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function NCRatio() {
    const [imageFile, setImageFile] = useState(null);
    const [resultImage, setResultImage] = useState('');
    const [originalImage, setOriginalImage] = useState('');
    const [averageTop, setAverageTop] = useState('');
    const [averageMiddle, setAverageMiddle] = useState('');
    const [averageBottom, setAverageBottom] = useState('');
    const [averageRatio, setAverageRatio] = useState('');
    const [classify, setClassify] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formData = new FormData();
            formData.append('image', imageFile);
        
            const res = await fetch('http://localhost:5000/api/ncratio', {
                method: 'POST',
                body: formData,
            });
        
            const data = await res.json();
            setAverageTop(data.top_ratio);
            setAverageMiddle(data.middle_ratio);
            setAverageBottom(data.bottom_ratio);
            setAverageRatio(data.overall_average_ratio);
            setResultImage(`data:image/png;base64,${data.result_image}`);
            setOriginalImage(`data:image/png;base64,${data.original_image}`);
            setClassify(data.classify);
        } catch (error) {
            console.error('Error submitting image:', error);
        }
    };
    
    

    return (
        <div>
            <div className="container mx-auto p-8">
                <h1 className="my-10 text-3xl font-bold text-gray-700 text-center">Nucleus to Cell Ratio</h1>
                <form onSubmit={handleSubmit} className="mb-6">
                    <div class="items-center justify-center max-w-xl mx-auto">
                        <label class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop"><span class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <span class="font-medium text-gray-600">{imageFile ? imageFile.name : 'Drop Image or Upload here'}</span></span>

                            <input type="file" onChange={handleFileChange} class="hidden" accept="image/*" id="input" /></label>
                    </div>
                    <button
                        type="submit"
                        className="w-1/5 justify-center mx-auto flex mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-purple-300 focus:outline-none focus:shadow-outline-blue"
                    >
                        Submit
                    </button>
                </form>
                {originalImage && (
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                            <div>
                                <p className="mb-2 text-lg font-semibold">Results</p>
                                <ReactCompareSlider
    className="w-full rounded shadow-lg md:w-3/4"
    itemOne={<ReactCompareSliderImage src={originalImage} alt="Original Image" />}
    itemTwo={<ReactCompareSliderImage src={resultImage} alt="Result Image" />}
/>

                            </div>
                            {/* <div className="grid my-auto text-left md:flex">
                                <div class="w-full md:w-1/2 cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                                    <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                                        Average Ratio
                                    </h2>
                                    <div class="p-1">
                                        <p class="my-2">Top Section: {averageTop}</p>
                                        <p class="my-2">Middle Section: {averageMiddle}</p>
                                        <p class="my-2">Bottom Section: {averageBottom}</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="grid my-auto text-left md:flex ">
                <div class="w-full md:w-1/2 cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                  <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                    Detected Class
                  </h2>
                  <div class="w-52 h-52 mx-auto my-10 flex items-center justify-center rounded-full bg-green-200">
                    <p class="font-bold text-4xl text-green-700">
                      {classify}
                    </p>
                  </div>
                </div>

                <div class="w-full md:w-1/2 cursor-pointer rounded-r-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                  <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                    Statistics
                  </h2>
                  <div class="p-1">
                    <div class="my-6 flex items-center justify-between p-4 bg-blue-100">
                      <p class="font-bold text-gray-500">N:C Ratio</p>
                      <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                        {averageRatio}
                      </p>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-500 text-md">
                      Average N:C Ratio
                    </h3>
                    <div class="my-3 flex items-center justify-between p-4 bg-red-100">
                      <p class="font-bold text-gray-500">Top Section</p>
                      <p class="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                        {averageTop} px
                      </p>
                    </div>
                    <div class="my-3 flex items-center justify-between p-4 bg-red-100">
                      <p class="font-bold text-gray-500">Middle Section</p>
                      <p class="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                        {averageMiddle} px
                      </p>
                    </div>
                    <div class="my-3 flex items-center justify-between p-4 bg-red-100">
                      <p class="font-bold text-gray-500">Bottom Section</p>
                      <p class="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                        {averageBottom} px
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default NCRatio;
