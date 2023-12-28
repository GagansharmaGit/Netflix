import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='p-6 text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className="bg-gray-800 text-white p-2 px-10 text-xl rounded-lg bg-opacity-50">
                ▶️ Play
            </button>

            <button className="mx-5 bg-gray-800 text-white p-2 px-10 text-xl rounded-lg bg-opacity-50">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle