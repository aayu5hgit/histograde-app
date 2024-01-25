// CellSize.js
import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function CellSize() {
  const [imageFile, setImageFile] = useState(null);
  const [, setResponse] = useState({});
  const [resultImage, setResultImage] = useState("");
  const [totalNuclei, setTotalNuclei] = useState("");
  const [averageTop, setAverageTop] = useState("");
  const [averageMiddle, setAverageMiddle] = useState("");
  const [averageBottom, setAverageBottom] = useState("");
  const [originalImage, setOriginalImage] = useState("");
  const [classification, setClassification] = useState("");

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
      formData.append("image", imageFile);

      const res = await fetch("http://localhost:5000/api/cell_size", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResponse(data);
      setTotalNuclei(data.totalNuclei);
      setAverageTop(data.averageTop);
      setAverageMiddle(data.averageMiddle);
      setAverageBottom(data.averageBottom);
      setResultImage(`data:image/jpg;base64,${data.resultImage}`);
      setOriginalImage(`data:image/jpg;base64,${data.originalImage}`);
      setClassification(data.classificationResult);
    } catch (error) {
      console.error("Error submitting image:", error);
    }
  };

  return (
    <div>
      <div className="container p-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-gray-700">
          Abnormal Variation in Cell Size
        </h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block mb-2 text-sm font-semibold">
            Image File:
          </label>
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

        {resultImage && (
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
                      src={resultImage}
                      alt="Image two"
                    />
                  }
                />
              </div>
              <div className="grid my-auto text-left md:flex ">
                <div class="w-full md:w-1/3 cursor-pointer rounded-l-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                  <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                    Detected Class
                  </h2>
                  <div class="w-52 h-52 mx-auto my-10 flex items-center justify-center rounded-full bg-green-200">
                    <p class="font-bold text-4xl text-green-700">
                      {classification}
                    </p>
                  </div>
                </div>

                <div class="w-full md:w-1/2 cursor-pointer rounded-r-lg border bg-[#f0f0f0] p-2 shadow-none duration-150 hover:shadow-xl">
                  <h2 class="font-bold text-gray-800 text-2xl text-center mt-5">
                    Statistics
                  </h2>
                  <div class="p-1">
                    <div class="my-6 flex items-center justify-between p-4 bg-blue-100">
                      <p class="font-bold text-gray-500">Total Cells</p>
                      <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                        {totalNuclei}
                      </p>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-500 text-md">
                      Average Cell Size
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

export default CellSize;
