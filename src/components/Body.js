import React from 'react'
import LoginPage from './LoginPage'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<LoginPage/>
        },
        {
            path:"/browser",
            element:<Browse/>
        },
    ])
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body