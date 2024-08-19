import React, { useEffect, useState } from 'react';
import SearchTab from '../SearchTab';
import { useNavigate } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner'
const Cards = () => {
    const [helpcards, setHelpCards] = useState([])
    const [loading, setLoading] = useState(false)
    // const [text, setText] = useState("")
    const navigate = useNavigate()
    const fetchData = (findtext) => {
        setLoading(true)
        const textWithoutSpace = encodeURIComponent(findtext);
        fetch(`https://helphand.vercel.app/cards?findtext=${textWithoutSpace ? textWithoutSpace : " "}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setHelpCards(data);
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        fetchData()
    }, []);

    const refetch = (searchText) =>{
        fetchData(searchText)
    }

    return (
        <div>
            <SearchTab refetch={refetch}></SearchTab>
            <div className='md:w-[1240px] mx-auto mt-14 min-h-[50vh]'>
                {
                    loading ?
                    <div className='w-full h-[200px] flex items-center justify-center'>
                        <MutatingDots
                            visible={true}
                            height="100"
                            width="100"
                            color="#A855F7"
                            secondaryColor="#A855F7"
                            radius="12.5"
                            ariaLabel="mutating-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                    :
                    <div className='md:p-0 p-3'>
                        {
                            helpcards.length < 1 ? 
                            <div>
                                <h4 className='text-center text-xl text-purple-500'>No data founded!</h4>
                                <p className='text-md text-black text-center mt-3'>Please search correctly.</p>
                            </div>
                            :
                            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                            {
                                helpcards.map((item, i) => 
                                    <div 
                                    onClick={() => navigate(`/card/${item.title}/${item.id}`)}
                                        key={i}
                                        className='bg-gray-50 border-[1px] border-purple-400 rounded-xl'
                                    >
                                        <h2 className='text-xl font-bold border-b-[1px] px-4 text-purple-500 py-2 border-gray-400'>{item.title}</h2>
                                        <p className='p-4 '>
                                            {item.description}
                                        </p>
                                    </div>)
                            }
                            </div>
                        }
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Cards;