import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {title, description} = useLoaderData()
    return (
        <div className='pt-10 min-h-screen md:p-0 p-3'>
            <div className='md:w-[1240px] mx-auto border-t-2 border-purple-500 pb-20'>
                <h1 className='text-[50px] uppercase text-purple-500 font-bold'>{title}</h1>
                <p className='text-xl mt-3'>{description}</p>
                <div className='flex justify-end mt-10'>
                    <div className='w-[200px] h-[10px] bg-purple-500'></div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;