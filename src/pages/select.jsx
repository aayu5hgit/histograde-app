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
                    <div className="flex items-center">
                        {/* Use Link from react-router-dom to navigate to processing page */}
                        <Link to={`${product.link}`} className="px-6 py-2 my-3 text-xl font-semibold text-black bg-purple-300 rounded-md cursor-auto hover:cursor-pointer hover:bg-pink-500">
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
            "name": "Hyperchromasia",
            "imageUrl": "https://img.freepik.com/free-photo/beautiful-fertility-concept-3d-rendering_23-2149230687.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "link": "/hyperchromasia",
        },
        {
            "name": "Atypical Mitosis Figures",
            "imageUrl": "https://img.freepik.com/free-photo/3d-medical-background-with-close-up-virus-cells_1048-8328.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "link": "/mitosis",
        },
        {
            "name": "Keratin Pearls",
            "imageUrl": "https://img.freepik.com/free-photo/smoke-design-with-dots-salmon_23-2148226965.jpg?size=626&ext=jpg&ga=GA1.1.1379558139.1705562006&semt=ais",
            "price": "Test",
            "link": "/keratinpearls",
        },
    ];

    return (
        <div>
        <div className="p-10 text-center">
            <h1 className="mb-4 text-4xl font-bold">Choose A Feature</h1>
            <h1 className="text-xl">To Test</h1>
        </div>
        <div className="w-1/2 p-3 mx-auto duration-500 bg-gray-100 shadow-md rounded-xl hover:shadow-xl hover:cursor-pointer">
                <div className="w-1/2 py-3 ">
                    <span className="mr-3 text-xs text-gray-400 uppercase">New Feature</span>
                    <p className="block text-4xl font-bold text-black capitalize">Take Overall Test</p>
                    <div className="flex items-center">
                        {/* Use Link from react-router-dom to navigate to processing page */}
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
