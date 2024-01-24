// src/components/Select.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div className="w-full">
        <div className=" p-3 bg-gray-100 shadow-md rounded-xl duration-500 hover:shadow-xl hover:cursor-pointer">
                <img src={product.imageUrl} alt={product.name} className="mx-auto h-80 w-80 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-full">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Feature</span>
                    <p className="text-lg font-bold text-black block capitalize">{product.name}</p>
                    <div className="flex items-center">
                        {/* Use Link from react-router-dom to navigate to processing page */}
                        <Link to={`${product.link}`} className="text-xl px-6 py-2 hover:cursor-pointer bg-purple-300 hover:bg-pink-500 rounded-md font-semibold text-black cursor-auto my-3">
                            {product.price}
                        </Link>
                    </div>
                </div>
        </div>
        </div>

    );
}

function Select() {
    const productsData = [
        {
            "name": "Abnormal Variation in Cell Size",
            "imageUrl": "https://img.freepik.com/free-photo/violet-bubbles-fluid-acrylic-pour-painting_23-2148315548.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "link": "/cellsize",
        },
        {
            "name": "Abnormal Variation in Nucleus Size",
            "imageUrl": "https://img.freepik.com/free-photo/top-view-pink-colored-liquid-glass_23-2147948937.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "link": "/nucleussize",
        },
        {
            "name": "Increased N:C Ratio",
            "imageUrl": "https://img.freepik.com/free-photo/beautiful-fertility-concept-3d-rendering_23-2149230687.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "link": "/ncratio",
        },
        {
            "name": "Atypical Mitosis Figures",
            "imageUrl": "https://img.freepik.com/free-photo/3d-medical-background-with-close-up-virus-cells_1048-8328.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "link": "/atypicalmitosis",
        },
        {
            "name": "Apoptotic Mitosis",
            "imageUrl": "https://img.freepik.com/free-photo/smoke-design-with-dots-salmon_23-2148226965.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "link": "/apoptoticmitosis",
        },
    ];

    return (
        <div>
        <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4">Choose A Feature</h1>
            <h1 className="text-xl">To Test</h1>
        </div>
        <section
            id="Projects"
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
            {productsData.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </section>
    </div>
    );
}

export default Select;
