import React from 'react';
import FeaturedCollection from '../../components/home/FeaturedCollection';

const FeaturedCollections = () => {
    return (
        <div className='bg-gray-100'>
            <div className='py-20 lg:px-24 md:px-12 px-8'>
                <h1 className='text-3xl font-bold uppercase mb-8 lg:text-left md:text-center'>Collection Featured NFTs</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
                    {
                        [1, 2, 3].map((collection, idx) => <FeaturedCollection key={idx} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedCollections;