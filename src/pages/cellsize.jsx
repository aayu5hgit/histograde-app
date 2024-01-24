import React, { useState } from 'react';

function CellSize() {
    const [imageFile, setImageFile] = useState(null);
    const [, setResponse] = useState({});
    const [resultImage, setResultImage] = useState('');
    const [totalNuclei, setTotalNuclei] = useState('');
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

            const res = await fetch('http://localhost:5000/api/cell_size', {
                method: 'POST',
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
        } catch (error) {
            console.error('Error submitting image:', error);
        }
    };

    return (
        <div>
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-700">Abnormal Variation in Cell Size</h1>
                <form onSubmit={handleSubmit} className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Image File:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-30% p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                    />
                    <button
                        type="submit"
                        className="flex mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-purple-300 focus:outline-none focus:shadow-outline-blue"
                    >
                        Submit
                    </button>
                </form>

                {resultImage && (
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                            <div>
                                <p className="text-lg font-semibold mb-2">Original Image:</p>
                                <img src={originalImage} alt="Original" className="w-3/4 rounded shadow-lg" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold mb-2">Proceesed Image:</p>
                                <img src={resultImage} alt="Processed" className="w-3/4 rounded shadow-lg" />
                            </div>
                        </div>
                        <div className="mt-6 text-left">
                            <p className="text-lg font-semibold mb-2">Total Cells: {totalNuclei}</p>
                            <h3 className="text-lg font-semibold mb-2">Average Cell Size</h3>
                            <p>Top Section: {averageTop} pixels</p>
                            <p>Middle Section: {averageMiddle} pixels</p>
                            <p>Bottom Section: {averageBottom} pixels</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default CellSize;

   
