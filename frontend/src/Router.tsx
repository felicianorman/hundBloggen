import { createBrowserRouter } from 'react-router-dom'
import { FrontPage } from './pages/FrontPage'
import { AllPosts } from './pages/AllPosts'
import { NewPost } from './pages/NewPost'
import { AllUsers } from './pages/AllUsers'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <FrontPage></FrontPage>,
    }, 
    {
        path: "/blogs",
        element: <AllPosts></AllPosts>
    },
    {
        path: "/new",
        element: <NewPost></NewPost>
    },
    {
        path: '/users',
        element: <AllUsers></AllUsers>
    }
])