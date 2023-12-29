import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='pt-6 pb-6 text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className="bg-white text-black p-2 px-10 text-xl rounded-lg hover:bg-opacity-80">
                ▶️ Play
            </button>

            <button className="mx-5 bg-gray-500 text-white p-2 px-10 text-xl rounded-lg ">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle