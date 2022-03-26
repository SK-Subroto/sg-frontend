import React from 'react';
import { BsCreditCard, BsBarChart } from "react-icons/bs";

const Speciality = () => {
    return (
        <div className='bg-gray-100 lg:px-24 md:px-12 px-8'>
            <div className='py-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-20'>
                <div className='lg:col-span-1 md:col-span-2'>
                    <h1 className='text-3xl font-bold uppercase'>
                        The amazing NFT art of the world here
                    </h1>
                </div>
                <div className='flex'>
                    <BsCreditCard className='text-5xl -mt-2 mr-2' />
                    <div>
                        <h3 className='text-xl font-semibold'>Fast Transaction</h3>
                        <p className='text-sm text-gray-600 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                    </div>
                </div>
                <div className='flex'>
                    <BsBarChart className='text-5xl -mt-2 mr-2' />
                    <div>
                        <h3 className='text-xl font-semibold'>Growth Transaction</h3>
                        <p className='text-sm text-gray-600 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speciality;