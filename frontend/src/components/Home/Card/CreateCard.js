import React, { useEffect, useState } from 'react';


const CreateCard = () => {
    const [successMsg, setSuccessMsg] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmitData = (e) => {
        e.preventDefault()
        const form = e.target
        const id = form.id.value
        const title = form.title.value
        const description = form.description.value

        const submitdata = {
            id, title, description
        }

        fetch(`https://helphand.vercel.app/cards`, {
            method: "POST",
            headers: {
                'content-type':"application/json"
            },
            body: JSON.stringify(submitdata)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.error){
                setError(data.error)
                setSuccessMsg(false)
            }
            else{
                setSuccessMsg(true)
                setError("")
                form.reset()
            }
        })

        console.log(id, title, description);
    }

    return (
        <div className='md:w-[1240px] w-full mx-auto pt-20 flex justify-center min-h-screen'>
            <div className=' gap-5 w-full p-5 md:p-0'>
            <form onSubmit={handleSubmitData} className=' md:w-[800px] mx-auto'>
                <label htmlFor="id" className='text-sm font-bold pl-1'>Id</label><br />
                <input id='id' name='id' className='mt-1 outline-none border-[1px] border-gray-400 px-3 py-2 w-full rounded-md' placeholder='unique id' type="text" />
                {
                    error && <p className='text-red-600 text-sm'>{error}</p>
                }
                <div className='my-3'>
                    <label htmlFor="title" className='text-sm font-bold pl-1'>Title</label><br />
                    <input id='title' name='title' className='mt-1 outline-none border-[1px] border-gray-400 px-3 py-2 w-full rounded-md' placeholder='Create a title' type="text" />
                </div>

                <label htmlFor="description" className='text-sm font-bold pl-1'>Description</label><br />
                <textarea id='description' name='description' className='mt-1 outline-none border-[1px] border-gray-400 px-3 py-2 w-full h-[100px] rounded-md' placeholder='add a description' type="text" />
                {
                    successMsg && <p className='text-md text-green-500'>Data added succsessfully.</p>
                }
                <button className='mt-3 bg-purple-500 text-white w-full py-3 rounded-md'>Submit</button>
            </form>
            </div>
        </div>
    );
};

export default CreateCard;