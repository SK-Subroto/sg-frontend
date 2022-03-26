import React from 'react';
import { Flip } from 'react-reveal';
import avatar from '../../../assets/images/sk23.jpg'
import banner_img_1 from '../../../assets/images/banner-img-1.jpg'
import banner_img_2 from '../../../assets/images/banner-img-2.jpg'
import banner_img_3 from '../../../assets/images/banner-img-3.jpg'

const About = () => {
    return (
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
    );
};

export default About;