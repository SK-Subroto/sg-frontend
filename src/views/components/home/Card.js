import React from 'react';
import { FaEthereum } from "react-icons/fa";
import img_2 from '../../../assets/images/img-2.jpg'
import avatar from '../../../assets/images/sk23.jpg'

const Card = () => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden bg-white">
            <div className='relative'>
                <div className='p-4'>
                    <img className="object-cover h-64 rounded-xl" src={img_2} alt="Sunset in the mountains" />
                </div>
                <img className='h-10 rounded-full border-2 border-gray-200 absolute -bottom-2 left-6' src={avatar} alt="" />
                <img className='h-10 rounded-full border-2 border-gray-200 absolute -bottom-2 left-6 ml-6' src={avatar} alt="" />
                <img className='h-10 rounded-full border-2 border-gray-200 absolute -bottom-2 left-6 ml-12' src={avatar} alt="" />
                <img className='h-10 rounded-full border-2 border-gray-200 absolute -bottom-2 left-4 ml-20' src={avatar} alt="" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">ArtCrypto</div>
                <div className='flex justify-between border-b pb-4'>
                    <p className='text-xs text-green-600 flex items-center'><FaEthereum />0.25 ETH</p>
                    <p className='text-xs text-gray-600'>1 of 321</p>
                </div>
                <div className='flex justify-between pt-4'>
                    <div className="mr-2 rounded-full bg-gray-100 text-indigo-700 px-5 py-2.5 text-center text-xs">
                        <span className='font-semibold'>2</span>h <span className='font-semibold'>50</span>m <span className='font-semibold'>2</span>s left
                    </div>
                    <button type="button" className="mr-2 text-indigo-700 font-medium py-2.5 text-center text-sm">Place a bid</button>
                </div>
            </div>
        </div>
    );
};

export default Card;