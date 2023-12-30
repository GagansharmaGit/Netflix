import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input 
                className='p-4 m-4 col-span-9 rounded-lg' 
                type="text" 
                placeholder='I know you want to watch movies 🎥' 
            />
            <button 
                className='m-4 col-span-3 py-2 px-4  bg-red-600 rounded-lg text-white font-bold fot'>
                    Search
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar