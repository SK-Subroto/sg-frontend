import React from 'react';
import Card from '../../components/home/Card'
import { BsFilter } from "react-icons/bs";

const AllCards = () => {
    return (
        <div className='bg-gray-100'>
            <div className='py-20 lg:px-24 md:px-12 px-8'>
                <h1 className='text-3xl font-bold uppercase'>Discover more NFTs</h1>
                <div className='flex lg:flex-row flex-col justify-between py-6'>
                    <div className='flex flex-nowrap lg:overflow-visible overflow-scroll'>
                        <button type="button" className="rounded-full bg-indigo-700 text-white px-5 py-2.5 text-center text-sm text whitespace-nowrap">All Categories</button>
                        <button type="button" className="ml-2 rounded-full bg-gray-200 text-indigo-700 px-5 py-2.5 text-center text-sm">Art</button>
                        <button type="button" className="ml-2 rounded-full bg-gray-200 text-indigo-700 px-5 py-2.5 text-center text-sm">Celebrities</button>
                        <button type="button" className="ml-2 rounded-full bg-gray-200 text-indigo-700 px-5 py-2.5 text-center text-sm">Gaming</button>
                        <button type="button" className="ml-2 rounded-full bg-gray-200 text-indigo-700 px-5 py-2.5 text-center text-sm">Sport</button>
                        <button type="button" className="ml-2 rounded-full bg-gray-200 text-indigo-700 px-5 py-2.5 text-center text-sm">Music</button>
                    </div>
                    <div className='lg:mt-0 mt-4'>
                        <button type="button" className="mr-2 rounded-full bg-gray-200 text-indigo-700 px-5 py-2.5 text-center text-sm flex items-center"><BsFilter className='text-xl' />All Filters</button>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                    {
                        [1, 2, 3, 4, 5].map((card, idx) => <Card key={idx} />)
                    }
                </div>

                <div className='text-center lg:mt-0 mt-6'>
                    <button type="button" className="text-indigo-700 bg-transparent border-2 border-indigo-700 px-8 py-4 rounded-full text-lg hover:bg-indigo-700 hover:text-white">More NFTs</button>
                </div>
            </div>
        </div>
    );
};

export default AllCards;