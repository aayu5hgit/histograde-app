import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function KeratinPearls() {
    const [imageFile, setImageFile] = useState(null);
    const [, setResponse] = useState({});
    const [resultImage, setResultImage] = useState('');
    const [classification, setClassification] = useState('');
    const [intensity, setIntensity] = useState('');
    const [averageTop, setAverageTop] = useState('');
    const [averageMiddle, setAverageMiddle] = useState('');
    const [averageBottom, setAverageBottom] = useState('');
    const [originalImage, setOriginalImage] = useState('');

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

            const res = await fetch('http://localhost:5000/api/keratin', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            setResultImage(data.result_image);
            setOriginalImage(data.original_image);
            setClassification(data.Keratin_Pearls_grade);
            setIntensity(data.Keratin_Pearls_found);
        } catch (error) {
            console.error('Error submitting image:', error);
        }
    };


    return (
        <div>
            <div className="container mx-auto p-8">
                <h1 className="my-10 text-3xl font-bold text-gray-700 text-center">Keratin Pearls</h1>
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
                {originalImage ? (
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
                            <div className="grid my-auto text-left md:flex ">
                            <div class="w-full md:w-1/2 cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                                    <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                                        Keratin Pearls Observed?
                                    </h2>
                                    <div class="w-52 h-52 mx-auto my-10 flex items-center justify-center rounded-full bg-pink-200">
                                        <p class="font-bold text-4xl text-pink-700">
                                            Yes
                                        </p>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                                    <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                                        Detected Class
                                    </h2>
                                    <div class="w-52 h-52 mx-auto my-10 flex items-center justify-center rounded-full bg-green-200">
                                        <p class="font-bold text-4xl text-green-700">
                                            {classification}
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                    <p className="text-lg text-gray-700 text-center my-4">
                            <div role="alert" className="rounded border-s-4 border-pink-500 bg-pink-50 p-4 w-1/3 mx-auto">
                                <div className="flex items-center gap-2 text-red-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#ab2467" d="M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75m-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.36 130.36 0 0 1 29.52 128a130.45 130.45 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.36 130.36 0 0 1 226.48 128a130.45 130.45 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"/></svg>

                                    <strong className="block font-semibold text-pink-500"> No Keratin Pearls detected</strong>
                                </div>
                            </div>
                        </p>
                        <div class="w-full md:w-1/3 mx-auto cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                            <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                                Detected Class
                            </h2>
                            <div class="w-52 h-52 mx-auto my-10 flex items-center justify-center rounded-full bg-green-200">
                                <p class="font-bold text-4xl text-green-700">
                                    Normal
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
export default KeratinPearls;


