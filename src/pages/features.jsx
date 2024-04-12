import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function Features() {
  const [imageFile, setImageFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [avgCellSize, setAvgCellSize] = useState("");

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

      const res = await fetch("http://localhost:5000/api/features", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResponse(data);
      setAvgCellSize(data.resultCell['totalCellSize']);
      console.log(data);
    } catch (error) {
      console.error("Error submitting image:", error);
    }
  };

  return (
    <div>
      <div className="container p-8 mx-auto">
        <h1 className="my-10 text-3xl font-bold text-gray-700 text-center">
          Abnormal Variation in Cell Size
        </h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="items-center justify-center max-w-xl mx-auto">
            <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
              <span className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <span className="font-medium text-gray-600">{imageFile ? imageFile.name : 'Drop Image or Upload here'}</span>
              </span>
              <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" id="input"/>
            </label>
          </div>
          <button
            type="submit"
            className="w-1/5 justify-center mx-auto flex mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-purple-300 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </form>

        {response && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Results {avgCellSize}</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Result Type</th>
                  <th className="px-4 py-2">Result</th>
                </tr>
              </thead>
              <tbody>
                {/* {Object.entries(response).map(([key, value]) => (
                  <tr key={key}>
                    <td className="border px-4 py-2">{key}</td>
                    <td className="border px-4 py-2">{value}</td>
                  </tr>
                ))} */}
              <tr>
    <td>Total Cell Size:</td>
    <td> {avgCellSize} </td>
</tr>

              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;
