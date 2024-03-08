import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import oimg from '../assets/m1.jpeg';
import rimg from '../assets/m1r1.JPEG';

function Mitosis() {
    const [imageFile, setImageFile] = useState(null);
    const [totalNuclei, setTotalNuclei] = useState('');
    const [averageTop, setAverageTop] = useState('');
    const [averageMiddle, setAverageMiddle] = useState('');
    const [averageBottom, setAverageBottom] = useState('');
    const [originalImage, setOriginalImage] = useState('');
    const [normalizedImage, setNormalizedImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Static data for demonstration
        const staticData = {
            nucleusContoursCount: 1,
            originalImage: oimg, // Static path for original image
            nucleusContoursImage: rimg, // Static path for normalized image
            averageTop: '50', // Static value for average top
            averageMiddle: '40', // Static value for average middle
            averageBottom: '45', // Static value for average bottom
        };

        setTotalNuclei(staticData.nucleusContoursCount);
        setOriginalImage(staticData.originalImage);
        setNormalizedImage(staticData.nucleusContoursImage);
        setAverageTop(staticData.averageTop);
        setAverageMiddle(staticData.averageMiddle);
        setAverageBottom(staticData.averageBottom);
    };

    return (
        <div>
            <div className="container p-8 mx-auto">
                <h1 className="mb-6 text-3xl font-bold text-gray-700">Keratin Pearls Detection</h1>
                <form onSubmit={handleSubmit} className="mb-6">
                    <label className="block mb-2 text-sm font-semibold">Image File:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-30% p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                    />
                    <button
                        type="submit"
                        className="flex px-4 py-2 mt-4 text-white bg-pink-500 rounded hover:bg-purple-300 focus:outline-none focus:shadow-outline-blue"
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
                                    itemOne={
                                        <ReactCompareSliderImage
                                            src={originalImage}
                                            alt="Image one"
                                        />
                                    }
                                    itemTwo={
                                        <ReactCompareSliderImage
                                            src={normalizedImage}
                                            alt="Image two"
                                        />
                                    }
                                />
                            </div>
                            <div className="grid my-auto text-left md:flex ">
                            <div class="w-full md:w-1/2 cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                  <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                    Mitotic Figure Detected
                  </h2>
                  <div class="w-52 h-52 mx-auto my-10 flex items-center justify-center rounded-full bg-red-200">
                    <p class="font-bold text-4xl text-red-700">
                      Yes
                    </p>
                  </div>
                </div>
                                {/* <div className="w-full md:w-1/2 cursor-pointer rounded-r-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                                    <h2 className="mt-5 text-2xl font-bold text-center text-gray-800">
                                        Statistics
                                    </h2>
                                    <div className="p-1">
                                        <div className="flex items-center justify-between p-4 my-6 bg-blue-100">
                                            <p className="font-bold text-gray-500">Total Keratin Pearls</p>
                                            <p className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                                                {totalNuclei}
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div> */}
                                 <div class="w-full md:w-1/2 cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                  <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                    Total Mitosis
                  </h2>
                  <div class="w-52 h-52 mx-auto my-10 flex items-center justify-center rounded-full bg-blue-200">
                    <p class="font-bold text-4xl text-blue-700">
                    {totalNuclei}
                    </p>
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

export default Mitosis;
