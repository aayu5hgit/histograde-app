import React, { useState } from 'react';

function IncreasedNuclei() {
    const [imageFile, setImageFile] = useState(null);
    const [nuclei, setNuclei] = useState(null);
    const [error, setError] = useState(null);

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

            const res = await fetch('http://localhost:5000/api/increasednucleoli', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            setNuclei(data.cellsWithMultipleNuclei);
        } catch (error) {
            console.error('Error analyzing nucleoli:', error);
            setError(error.message);
        }
    };

    return (
        <div>
            <div className="container p-8 mx-auto">
                <h1 className="my-10 text-3xl font-bold text-center text-gray-700">Increased Number of Nucleoli</h1>
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
                        className="flex justify-center w-1/5 px-4 py-2 mx-auto mt-4 text-white bg-pink-500 rounded hover:bg-purple-300 focus:outline-none focus:shadow-outline-blue"
                    >
                        Submit
                    </button>
                </form>

                {nuclei !== null && (
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                            <div>
                                <p className="mb-2 text-lg font-semibold">Results</p>
                                <p className="text-gray-700">Increased Nucleoli Count: {nuclei}</p>
                            </div>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="mt-4 text-red-600">{error}</div>
                )}
            </div>
        </div>
    );
}

export default IncreasedNuclei;
