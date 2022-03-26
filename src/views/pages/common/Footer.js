import React from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 grap-4 py-20 lg:px-24 md:px-12 px-8'>
                <div>
                    <h1 className='text-2xl font-bold'>NFters</h1>
                    <p className='text-sm text-gray-400 py-6'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    <div className='flex text-4xl'>
                        <FaFacebookSquare className='mr-4 text-blue-500' />
                        <FaTwitterSquare className='mr-4 text-sky-500' />
                        <FaLinkedin className='mr-4 text-cyan-500' />
                    </div>
                </div>
                <div className='grid grid-cols-2 grap-4 lg:my-0 my-8'>
                    <div>
                        <ul className="">
                            <li className="w-full text-xl font-bold mb-4">Market place</li>
                            <li className="w-full py-2">All NFTs</li>
                            <li className="w-full py-2">New</li>
                            <li className="w-full py-2">Art</li>
                            <li className="w-full py-2">Sports</li>
                            <li className="w-full py-2">Utilities</li>
                            <li className="w-full py-2">Music</li>
                            <li className="w-full py-2">Domain Name</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="">
                            <li className="w-full text-xl font-bold mb-4">My Account</li>
                            <li className="w-full py-2">Profile</li>
                            <li className="w-full py-2">Favorite</li>
                            <li className="w-full py-2">My Collections</li>
                            <li className="w-full py-2">Settings</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-bold'>Stay in the loop</h3>
                    <p className='text-sm text-gray-400 py-6'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                    <div className='relative'>
                        <input className='lg:w-5/6 w-full rounded-full border-2 border-gray-200 text-sm px-6 py-4' type="email" placeholder='Enter your email address' />
                        <button type='button' className='absolute lg:right-20 bottom-1 right-1 mt-2 rounded-full bg-blue-700 text-white px-4 py-3 text-center hover:bg-indigo-700'>Subscribe Now</button>
                    </div>
                </div>
            </div>
            <div className='text-center text-gray-400 text-sm py-4 border-t-2'>Copyright © 2022 Subroto Karmokar</div>
        </div>
    );
};

export default Footer;