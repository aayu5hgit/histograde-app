// src/components/Select.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div className="w-full">
        <div className="p-3 duration-500 bg-gray-100 shadow-md rounded-xl hover:shadow-xl hover:cursor-pointer">
                <img src={product.imageUrl} alt={product.name} className="object-cover mx-auto h-80 w-80 rounded-t-xl" />
                <div className="w-full px-4 py-3">
                    <span className="mr-3 text-xs text-gray-400 uppercase">Feature</span>
                    <p className="block text-lg font-bold text-black capitalize">{product.name}</p>
                    
                    <div className="flex items-center justify-between my-4">
                    <Link
                        to={`${product.link}`}
                        className="flex px-4 py-2 text-white bg-purple-500 rounded-md cursor-auto hover:cursor-pointer hover:bg-pink-500 transition-colors duration-300"
                    >
                        {product.price} &nbsp;
                        <img src="https://api.iconify.design/simple-icons:vitest.svg?color=%23ffffff" className='w-6 h-6' alt="" />
                    </Link>
                    <Link
                        to={`${product.info}`}
                        className="flex text-purple-600 hover:text-purple-800 transition-colors duration-300"
                    >
                        
                        Learn More
                        <img src="https://api.iconify.design/material-symbols:arrow-outward.svg?color=%239721b9" className='w-6 h-6' alt="" />
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
            "description": "Explore abnormal variations in cell size and their implications.",
            "imageUrl": "https://img.freepik.com/free-photo/violet-bubbles-fluid-acrylic-pour-painting_23-2148315548.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "info": "/cellsizedesc",
            "link": "/cellsize",
        },
        {
            "name": "Abnormal Variation in Nucleus Size",
            "description": "Discover abnormal variations in nucleus size and their significance.",
            "imageUrl": "https://img.freepik.com/free-photo/top-view-pink-colored-liquid-glass_23-2147948937.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "info": "/nucleussizedesc",
            "link": "/nucleussize",
        },
        {
            "name": "Hyperchromasia",
            "description": "Learn about hyperchromasia and its clinical implications.",
            "imageUrl": "https://img.freepik.com/free-photo/beautiful-fertility-concept-3d-rendering_23-2149230687.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "info": "/hyperchromasiadesc",
            "link": "/hyperchromasia",
        },
        {
            "name": "Atypical Mitosis Figures",
            "description": "Understand atypical mitosis figures and their pathological significance.",
            "imageUrl": "https://img.freepik.com/free-photo/3d-medical-background-with-close-up-virus-cells_1048-8328.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "info": "/mitosisdesc",
            "link": "/mitosis",
        },
        {
            "name": "Keratin Pearls",
            "description": "Explore keratin pearls and their relevance in dermatopathology.",
            "imageUrl": "https://img.freepik.com/free-photo/smoke-design-with-dots-salmon_23-2148226965.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "info": "/keratinpearlsdesc",
            "link": "/keratinpearls",
        },
        {
            "name": "Increased number of nucleoli",
            "description": "Learn about increased number of nucleoli and their diagnostic significance.",
            "imageUrl": "https://img.freepik.com/free-photo/violet-bubbles-fluid-acrylic-pour-painting_23-2148315548.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "info": "/increasednucleidesc",
            "link": "/increasednuclei",
        }, 
        {
            "name": "N:C Ratio",
            "description": "Learn about increased number of nucleoli and their diagnostic significance.",
            "imageUrl": "https://img.freepik.com/free-photo/violet-bubbles-fluid-acrylic-pour-painting_23-2148315548.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "info": "/ncratiodesc",
            "link": "/ncratio",
        }, {
            "name": "Irregular Stratification",
            "description": "Learn about increased number of nucleoli and their diagnostic significance.",
            "imageUrl": "https://img.freepik.com/free-photo/beautiful-fertility-concept-3d-rendering_23-2149230687.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "info": "/ncratiodesc",
            "link": "/irreg",
        },  
    ];

    return (
        <div>
        <div className="p-10 text-center">
            <h1 className="mb-4 text-4xl font-bold">Features</h1>
        </div>
        <div className="w-[80%] px-6 py-2 my-3 text-xl font-semibold text-black bg-purple-300 rounded-md cursor-auto hover:cursor-pointer hover:bg-pink-500">
                <div className=" p-3">
                    <span className="mr-3 text-xs text-gray-400 uppercase">New Feature</span>
                    <p className="block text-4xl font-bold text-black capitalize">Take Overall Test</p>
                    <div className="flex items-center">
                        <Link to='/result' className="px-6 py-2 my-3 text-xl font-semibold text-black bg-purple-300 rounded-md cursor-auto hover:cursor-pointer hover:bg-pink-500">
                           Go
                        </Link>
                    </div>
                </div>
        </div>
        <section
            id="Projects"
            className="grid justify-center grid-cols-1 mx-auto mt-10 mb-5 w-fit lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14"
        >
            {productsData.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </section>
    </div>
    );
}

export default Select;
