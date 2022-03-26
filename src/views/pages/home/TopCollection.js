import React from 'react';
import { Fade } from 'react-reveal';
import avatar from '../../../assets/images/sk23.jpg';
import { FaEthereum } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import img_3 from '../../../assets/images/img-3.jpg'
import img_2 from '../../../assets/images/img-2.jpg'


const TopCollection = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 py-20 lg:px-24 md:px-12 px-8'>
            <div className='lg:col-span-1 md:col-span-2 md:mb-32 lg:mb-0'>
                <img className='object-cover lg:h-96 lg:w-96 md:h-full md:w-full h-72 w-72 rounded-xl lg:mx-0 mx-auto' src={img_2} alt="" />
                <div className='flex justify-between rounded-md py-4 lg:w-96 md:w-full w-72 mt-4 lg:mx-0 mx-auto'>
                    <div className='flex'>
                        <img className='h-12 rounded-full' src={avatar} alt="" />
                        <div className='ml-2'>
                            <h4 className='text-xl font-semibold'>The Futr Abstr</h4>
                            <small className='text-xs'>10 in the stock</small>
                        </div>
                    </div>
                    <div>
                        <small className='text-xs'>Highest Bid</small>
                        <p className='flex items-center font-semibold'><FaEthereum /> 0.25 ETH</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between lg:pb-6'>
                <div className='flex lg:mb-0 mb-4'>
                    <img className='object-cover lg:h-32 lg:w-32 h-28 w-28 rounded-xl' src={img_3} alt="" />
                    <div className='lg:ml-4 ml-2'>
                        <h3 className='font-medium'>The Futr Abstr</h3>
                        <div className='flex items-center'>
                            <img className='h-10 rounded-full' src={avatar} alt="" />
                            <div className='ml-2 border-2 border-green-400 rounded text-green-400 text-sm px-2 py-1 flex items-center'><FaEthereum />0.25 ETH</div>
                            <small className='ml-2 text-gray-400'>1 of 8</small>
                        </div>
                        <button type='button' className='mt-2 rounded-full bg-indigo-700 border-2 border-indigo-700 text-white px-5 py-2.5 text-center text-sm'>Place a bid</button>
                    </div>
                </div>
                <div className='flex lg:mb-0 mb-4'>
                    <img className='object-cover lg:h-32 lg:w-32 h-28 w-28 rounded-xl' src={img_3} alt="" />
                    <div className='lg:ml-4 ml-2'>
                        <h3 className='font-medium'>The Futr Abstr</h3>
                        <div className='flex items-center'>
                            <img className='h-10 rounded-full' src={avatar} alt="" />
                            <div className='ml-2 border-2 border-green-400 rounded text-green-400 text-sm px-2 py-1 flex items-center'><FaEthereum />0.25 ETH</div>
                            <small className='ml-2 text-gray-400'>1 of 8</small>
                        </div>
                        <button type='button' className='mt-2 rounded-full border-2 border-indigo-700 text-indigo-700 px-5 py-2.5 text-center text-sm'>Place a bid</button>
                    </div>
                </div>
                <div className='flex lg:mb-0 mb-4'>
                    <img className='object-cover lg:h-32 lg:w-32 h-28 w-28 rounded-xl' src={img_3} alt="" />
                    <div className='lg:ml-4 ml-2'>
                        <h3 className='font-medium'>The Futr Abstr</h3>
                        <div className='flex items-center'>
                            <img className='h-10 rounded-full' src={avatar} alt="" />
                            <div className='ml-2 border-2 border-green-400 rounded text-green-400 text-sm px-2 py-1 flex items-center'><FaEthereum />0.25 ETH</div>
                            <small className='ml-2 text-gray-400'>1 of 8</small>
                        </div>
                        <button type='button' className='mt-2 rounded-full border-2 border-indigo-700 text-indigo-700 px-5 py-2.5 text-center text-sm'>Place a bid</button>
                    </div>
                </div>
            </div>
            <div className='lg:border-l border-gray-200 lg:px-12 px-6'>
                <h1 className='text-xl font-bold'>Top Collections over</h1>
                <p className='text-indigo-700 text-sm'>Last 7 days</p>
                <ul className=" text-sm font-medium text-gray-900 bg-white mt-4">
                    <li className="w-full py-2 border-b">
                        <Fade top>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-medium'>1</p>
                                <div className='relative'>
                                    <img className='h-14 rounded-full' src={avatar} alt="" />
                                    <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' />
                                </div>
                                <div>
                                    <p>CryptoFunks</p>
                                    <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                                </div>
                                <p className='text-green-600'>+26.52%</p>
                            </div>
                        </Fade>
                    </li>
                    <li className="w-full py-2 border-b">
                        <Fade top>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-medium'>2</p>
                                <div className='relative'>
                                    <img className='h-14 rounded-full' src={avatar} alt="" />
                                    {/* <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' /> */}
                                </div>
                                <div>
                                    <p>CryptoFunks</p>
                                    <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                                </div>
                                <p className='text-red-600'>+26.52%</p>
                            </div>
                        </Fade>
                    </li>
                    <li className="w-full py-2 border-b">
                        <Fade top>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-medium'>3</p>
                                <div className='relative'>
                                    <img className='h-14 rounded-full' src={avatar} alt="" />
                                    <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' />
                                </div>
                                <div>
                                    <p>CryptoFunks</p>
                                    <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                                </div>
                                <p className='text-green-600'>+26.52%</p>
                            </div>
                        </Fade>
                    </li>
                    <li className="w-full py-2 border-b">
                        <Fade top>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-medium'>4</p>
                                <div className='relative'>
                                    <img className='h-14 rounded-full' src={avatar} alt="" />
                                    <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' />
                                </div>
                                <div>
                                    <p>CryptoFunks</p>
                                    <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                                </div>
                                <p className='text-red-600'>+26.52%</p>
                            </div>
                        </Fade>
                    </li>
                    <li className="w-full py-2 border-b">
                        <Fade top>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-medium'>5</p>
                                <div className='relative'>
                                    <img className='h-14 rounded-full' src={avatar} alt="" />
                                    {/* <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' /> */}
                                </div>
                                <div>
                                    <p>CryptoFunks</p>
                                    <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                                </div>
                                <p className='text-green-600'>+26.52%</p>
                            </div>
                        </Fade>
                    </li>
                    <li className="w-full py-2 border-b">
                        <Fade top>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-medium'>6</p>
                                <div className='relative'>
                                    <img className='h-14 rounded-full' src={avatar} alt="" />
                                    {/* <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' /> */}
                                </div>
                                <div>
                                    <p>CryptoFunks</p>
                                    <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                                </div>
                                <p className='text-red-600'>+26.52%</p>
                            </div>
                        </Fade>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopCollection;