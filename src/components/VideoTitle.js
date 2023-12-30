import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block pt-6 pb-6 text-lg w-1/3'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className=" bg-white text-black py-1 px-5 md:py-2 md:px-10 text-xl rounded-lg hover:bg-opacity-80">
                ▶️ Play
            </button>

            <button className="hidden md:inline-block mx-5 bg-gray-500 text-white p-2 px-10 text-xl rounded-lg ">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle