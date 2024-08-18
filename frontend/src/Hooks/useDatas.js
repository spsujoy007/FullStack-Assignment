import { useState, useEffect } from 'react';

const useDatas = () => {
    const [helpcards, setHelpCards] = useState([]);
    const [refetch, setRefetch] = useState(false)
    const fethData = (findtext) => {
        const textWithoutSpace = encodeURIComponent(findtext);
        fetch(`http://localhost:5000/helpcards?findtext=${textWithoutSpace ? textWithoutSpace : ""}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setHelpCards(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        fethData()
    }, []);

    const reFetchingData = () =>{
        fethData()
    }

    return {helpcards, newSearch: fethData, 'refetchData': reFetchingData, isRefetch: refetch};
};

export default useDatas;
