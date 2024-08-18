
const SearchTab = ({refetch}) => {

    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target
        const searchText= form.search.value
        refetch(searchText)
        form.reset()
    }

    return (
        <div className='w-full h-[300px] bg-purple-200 flex items-center justify-center'>
            <div>
                <h1 className='text-center text-[60px] text-purple-500 mb-5'>How can we help?</h1>
                <form onSubmit={handleSearch}>
                    <input id='search' name='search'  type="text" className='w-[600px] py-2 rounded-l-md px-3 outline-none' placeholder='type here...' />
                    <button type='submit'  className='h-full py-2 px-8 rounded-r-md text-white bg-purple-500'>
                        Search
                    </button>
                </form>

            </div>
        </div>
    );
};

export default SearchTab;