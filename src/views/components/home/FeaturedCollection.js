import React from 'react';
import avatar from '../../../assets/images/sk23.jpg'
import banner_img_1 from '../../../assets/images/banner-img-1.jpg'
import img_3 from '../../../assets/images/img-3.jpg'

const FeaturedCollection = () => {
    return (
        <div className='mb-8 lg:mb-0 md:mx-auto'>
            <div className='flex md:flex-row flex-col lg:gap-4 md:gap-8'>
                <div>
                    <img className='object-cover lg:h-80 lg:w-80 md:h-96 md:w-96 rounded-xl' src={banner_img_1} alt="" />
                </div>
                <div className='flex md:flex-col justify-between lg:mx-auto mt-8 md:mt-0'>
                    {
                        [1, 2, 3].map((img, idx) => (
                            <div key={idx}>
                                <img className='object-cover h-24 w-24 rounded-xl' src={img_3} alt="" />
                            </div>
                        ))
                    }

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
    );
};

export default FeaturedCollection;