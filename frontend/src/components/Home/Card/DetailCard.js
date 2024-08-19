import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {title, description} = useLoaderData()
    return (
        <div className='pt-14 min-h-screen '>
            <div className='md:w-[1240px] md:p-0 p-3 mx-auto border-t-2 border-purple-500 '>
                <h1 className='md:text-[50px] text-xl uppercase text-purple-500 font-bold pt-20'>{title}</h1>
                <p className='text-xl mt-3'>{description}</p>
                <div className='flex justify-end mt-10'>
                    <div className='w-[200px] h-[10px] bg-purple-500'></div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;