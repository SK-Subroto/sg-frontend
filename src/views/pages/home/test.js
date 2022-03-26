import React from 'react';
import banner_img_1 from '../../../assets/images/banner-img-1.jpg'
import banner_img_2 from '../../../assets/images/banner-img-2.jpg'
import banner_img_3 from '../../../assets/images/banner-img-3.jpg'
import img_2 from '../../../assets/images/img-2.jpg'
import img_3 from '../../../assets/images/img-3.jpg'
import avatar from '../../../assets/images/sk23.jpg'
import circle_icon from '../../../assets/images/circle-icon.png'

import CountUp from 'react-countup';
import { Fade, Flip } from 'react-reveal';


import { FaEthereum, FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsCreditCard, BsBarChart, BsFilter, BsFillPatchCheckFill } from "react-icons/bs";

const Banner = () => {
    return (
        <div>
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
                    <img className='absolute md:top-8 md:left-6 top-24 object-cover h-80 md:w-80 w-80 rounded-2xl' src={banner_img_2} alt="" style={{ 'z-index': '-1' }} />
                    <img className='absolute md:top-12 md:left-12 top-40 object-cover h-72 md:w-80 w-80 rounded-2xl' src={banner_img_3} alt="" style={{ 'z-index': '-2' }} />
                    <div className=''>
                        <div className='absolute top-4 left-6 text-white'>
                            <h3 className='md:text-lg text-2xl font-semibold'>Abstr Gradient NFT</h3>
                            <div className='flex items-center'>
                                <img className='md:h-6 h-10 rounded-full' src={avatar} alt="" />
                                <small className='md:text-sm text-lg ml-2'>Akrah17</small>
                            </div>
                        </div>
                        {/* <div className='absolute bottom-28 md:-left-12 left-24 md:w-20 md:h-20 w-28 h-28 bg-orange-100 rounded-full flex justify-center items-center'>
                            <FaEthereum className='text-xl' />
                        </div> */}
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

            {/* new section  */}
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

            {/* new section */}
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

            {/* new section  */}
            <div className='bg-gray-100'>
                <div className='py-20 lg:px-24 md:px-12 px-8'>
                    <h1 className='text-3xl font-bold uppercase mb-8 lg:text-left md:text-center'>Collection Featured NFTs</h1>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
                        <div className='mb-8 lg:mb-0 md:mx-auto'>
                            <div className='flex md:flex-row flex-col lg:gap-4 md:gap-8'>
                                <img className='object-cover lg:h-80 lg:w-80 md:h-96 md:w-96 rounded-xl' src={banner_img_1} alt="" />
                                <div className='flex md:flex-col justify-between lg:mx-auto mt-8 md:mt-0'>
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                </div>
                            </div>
                            <h4 className='text-lg font-semibold mt-4'>Amazing Collection</h4>
                            <div className='flex justify-between rounded-md lg:w-full mt-2'>
                                <div className='flex items-center'>
                                    <img className='h-10 rounded-full' src={avatar} alt="" />
                                    <div className='ml-2'>
                                        <small>by Arkham</small>
                                    </div>
                                </div>
                                <button type="button" className="text-indigo-700 bg-transparent border-2 border-indigo-700 px-2.5 rounded-full text-sm">Total 54 Items</button>
                            </div>
                        </div>
                        <div className='mb-8 lg:mb-0 md:mx-auto'>
                            <div className='flex md:flex-row flex-col lg:gap-4 md:gap-8'>
                                <img className='object-cover lg:h-80 lg:w-80 md:h-96 md:w-96 rounded-xl' src={banner_img_1} alt="" />
                                <div className='flex md:flex-col justify-between lg:mx-auto mt-8 md:mt-0'>
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                </div>
                            </div>
                            <h4 className='text-lg font-semibold mt-4'>Amazing Collection</h4>
                            <div className='flex justify-between rounded-md lg:w-full mt-2'>
                                <div className='flex items-center'>
                                    <img className='h-10 rounded-full' src={avatar} alt="" />
                                    <div className='ml-2'>
                                        <small>by Arkham</small>
                                    </div>
                                </div>
                                <button type="button" className="text-indigo-700 bg-transparent border-2 border-indigo-700 px-2.5 rounded-full text-sm">Total 54 Items</button>
                            </div>
                        </div>
                        <div className='mb-8 lg:mb-0 md:mx-auto'>
                            <div className='flex md:flex-row flex-col lg:gap-4 md:gap-8'>
                                <img className='object-cover lg:h-80 lg:w-80 md:h-96 md:w-96 rounded-xl' src={banner_img_1} alt="" />
                                <div className='flex md:flex-col justify-between lg:mx-auto mt-8 md:mt-0'>
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                    <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                                </div>
                            </div>
                            <h4 className='text-lg font-semibold mt-4'>Amazing Collection</h4>
                            <div className='flex justify-between rounded-md lg:w-full mt-2'>
                                <div className='flex items-center'>
                                    <img className='h-10 rounded-full' src={avatar} alt="" />
                                    <div className='ml-2'>
                                        <small>by Arkham</small>
                                    </div>
                                </div>
                                <button type="button" className="text-indigo-700 bg-transparent border-2 border-indigo-700 px-2.5 rounded-full text-sm">Total 54 Items</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* new section  */}
            <div className='grid lg:grid-cols-7 sm:grid-cols-1 lg:gap-8 gap-14 py-20 lg:px-24 md:px-12 px-8'>
                <div className='col-span-4 grid md:grid-cols-2 grid-cols-1 gap-12'>
                    <div className='flex flex-col justify-between gap-12'>
                        <Flip left>
                            <div className='relative lg:mx-0 mx-auto'>
                                <img className='float-right object-cover h-72 w-72 rounded-xl' src={banner_img_1} alt="" />
                                <img className='h-12 rounded-full border-2 border-gray-200 absolute -bottom-2 -right-2' src={avatar} alt="" />
                            </div>
                        </Flip>
                        <Flip left>
                            <div className='relative lg:mx-0 mx-auto'>
                                <img className='float-right object-cover lg:h-56 lg:w-56 h-72 w-72 rounded-xl' src={banner_img_3} alt="" />
                                <img className='h-12 rounded-full border-2 border-gray-200 absolute -bottom-2 -right-2' src={avatar} alt="" />
                            </div>
                        </Flip>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <Flip left>
                            <div className=' relative lg:mx-0 mx-auto'>
                                <img className='object-cover lg:h-64 lg:w-64 h-72 w-72 rounded-xl' src={banner_img_2} alt="" />
                                <img className='h-12 rounded-full border-2 border-gray-200 absolute -bottom-2 lg:right-20 -right-2' src={avatar} alt="" />
                            </div>
                        </Flip>
                    </div>
                </div>
                <div className='lg:col-span-3 col-span-4 flex flex-col justify-center'>
                    <div className=''>
                        <h1 className='text-3xl font-bold uppercase'>Create and<br className='lg:block hidden' /> sell your NFTs</h1>
                        <p className='text-sm text-gray-600 py-6 lg:text-left text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                        <button type='button' className='inline mt-2 rounded-full bg-indigo-700 text-white border-2 border-indigo-700 px-5 py-2.5 text-center hover:bg-white hover:text-indigo-700'>Sign Up Now</button>
                    </div>
                </div>
            </div>

            {/* new section */}
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

                    </div>

                    <div className='text-center lg:mt-0 mt-6'>
                        <button type="button" className="text-indigo-700 bg-transparent border-2 border-indigo-700 px-8 py-4 rounded-full text-lg hover:bg-indigo-700 hover:text-white">More NFTs</button>
                    </div>
                </div>
            </div>

            {/* new section */}
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

export default Banner;