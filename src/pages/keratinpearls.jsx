import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import oimg from '../assets/k1.jpg';
import rimg from '../assets/r1.JPEG';
import oimg2 from "../assets/k2.jfif";
import krimg2 from '../assets/k2r2.jpeg';

function KeratinPearls() {
    const [totalNuclei, setTotalNuclei] = useState('');
    const [averageTop, setAverageTop] = useState('');
    const [averageMiddle, setAverageMiddle] = useState('');
    const [averageBottom, setAverageBottom] = useState('');
    const [originalImage, setOriginalImage] = useState('');
    const [normalizedImage, setNormalizedImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [detected, setDetected] = useState('');

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (selectedImage) {
            case 'image1':
                displayStaticResult(1);
                break;
            case 'image2':
                displayStaticResult(2);
                break;
            default:
                break;
        }
    };

    const displayStaticResult = (imageNumber) => {
        const staticData = {
            image1: {
                nucleusContoursCount: 2,
                originalImage: oimg,
                nucleusContoursImage: rimg,
                averageTop: '50',
                averageMiddle: '40',
                averageBottom: '45',
                detected: "Yes",
            },
            image2: {
                nucleusContoursCount: 1,
                originalImage: oimg2,
                nucleusContoursImage: krimg2,
                averageTop: '50',
                averageMiddle: '40',
                averageBottom: '45',
                detected: "Yes",
            },
        };
        const imageData = staticData[`image${imageNumber}`];
        setTotalNuclei(imageData.nucleusContoursCount);
        setOriginalImage(imageData.originalImage);
        setNormalizedImage(imageData.nucleusContoursImage);
        setAverageTop(imageData.averageTop);
        setAverageMiddle(imageData.averageMiddle);
        setAverageBottom(imageData.averageBottom);
        setDetected(imageData.detected);
    };

    return (
        <div>
            <div className="container p-8 mx-auto">
                <h1 className="mb-10 text-3xl font-bold text-gray-700 text-center">Keratin Pearls Detection</h1>
                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex justify-center">
                        <div class="mx-auto max-w-6xl px-12">
                            <div class="flex flex-wrap justify-center gap-3">
                                <label class="cursor-pointer">
                                    <input type="radio" class="peer sr-only" name="pricing" onChange={() => handleImageSelect('image1')} />
                                    <div class=" max-w-xl rounded-md bg-white p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                        <img src={oimg} alt="Image 1" className="w-32 h-32 mx-auto mb-2" />
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" class="peer sr-only" name="pricing" onChange={() => handleImageSelect('image2')} />
                                    <div class=" max-w-xl rounded-md bg-white p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                        <img src={oimg2} alt="Image 2" className="w-32 h-32 mx-auto mb-2" />
                                    </div>
                                </label>
                            </div>
                        </div>
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
                                        Keratin Detected
                                    </h2>
                                    <div class="w-52 h-52 mx-auto my-10 flex items-center justify-center rounded-full bg-red-200">
                                        <p class="font-bold text-4xl text-red-700">
                                            {detected}
                                        </p>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                                    <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                                        Total Keratin Pearls
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

export default KeratinPearls;
