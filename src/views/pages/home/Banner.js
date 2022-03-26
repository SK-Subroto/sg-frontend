import React from 'react';
import banner_img_1 from '../../../assets/images/banner-img-1.jpg'
import banner_img_2 from '../../../assets/images/banner-img-2.jpg'
import banner_img_3 from '../../../assets/images/banner-img-3.jpg'
import avatar from '../../../assets/images/sk23.jpg'
import circle_icon from '../../../assets/images/circle-icon.png'

import CountUp from 'react-countup';


import { FaEthereum } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-40 md:px-12 px-8 gap-8 py-20'>
            <div className='lg:mt-4'>
                <h1 className='text-4xl font-extrabold uppercase'>Discover, and collect<br className='lg:block hidden' /> Digital Art  NFTs</h1>
                <p className='text-gray-600 py-6 md:w-4/6 lg:text-left text-justify'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                <button type="button" className="text-white bg-indigo-700 border-2 border-indigo-700 rounded-full px-6 py-3 text-center mr-3 md:mr-0 hover:bg-white hover:text-indigo-700">Explore Now</button>
                <div className='grid grid-cols-3 mt-6 lg:w-4/6'>
                    <div>
                        <h1 className='text-4xl font-extrabold'><CountUp duration="3" end={98} /><span className='font-semibold'>K+</span></h1>
                        <h5 className='text-gray-600'>Artwork</h5>
                    </div>
                    <div>
                        <h1 className='text-4xl font-extrabold'><CountUp duration="3" end={12} /><span className='font-semibold'>K+</span></h1>
                        <h5 className='text-gray-600'>Auction</h5>
                    </div>
                    <div>
                        <h1 className='text-4xl font-extrabold'><CountUp duration="3" end={15} /><span className='font-semibold'>K+</span></h1>
                        <h5 className='text-gray-600'>Artist</h5>
                    </div>
                </div>
            </div>
            <div className='relative h-96 mx-auto'>
                <img className='object-cover h-96 w-80 rounded-2xl' src={banner_img_1} alt="" />
                <img className='absolute md:top-8 md:left-6 top-24 object-cover h-80 md:w-80 w-80 rounded-2xl' src={banner_img_2} alt="" style={{ 'zIndex': '-1' }} />
                <img className='absolute md:top-12 md:left-12 top-40 object-cover h-72 md:w-80 w-80 rounded-2xl' src={banner_img_3} alt="" style={{ 'zIndex': '-2' }} />
                <div className=''>
                    <div className='absolute top-4 left-6 text-white'>
                        <h3 className='md:text-lg text-2xl font-semibold'>Abstr Gradient NFT</h3>
                        <div className='flex items-center'>
                            <img className='md:h-6 h-10 rounded-full' src={avatar} alt="" />
                            <small className='md:text-sm text-lg ml-2'>Akrah17</small>
                        </div>
                    </div>
                    <img className='animate-spin-slow object-cover absolute bottom-20 md:-left-12 left-24 w-28 h-28' src={circle_icon} alt="" />
                    <div className='flex justify-around bg-gray-100/[.2] backdrop-blur-md rounded-md py-2 w-72 absolute bottom-3 md:left-4 left-3  text-white'>
                        <div>
                            <small className='text-xs font-light'>Current Bid</small>
                            <p className='text-sm flex items-center'><FaEthereum /> 0.25 ETH</p>
                        </div>
                        <div>
                            <small className='text-xs font-light'>Ends in</small>
                            <p className='text-sm'>12h 43m 42s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;