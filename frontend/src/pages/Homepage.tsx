import '../scss/Homepage.scss'
import { DisplayPosts } from '../components/DisplayPosts'
import { CreatePost } from '../components/CreatePost'

export const HomePage = () => {

         
    return (<>
    <div className='wrapper'>
        <h1>Alla blogginlägg</h1>
        <DisplayPosts></DisplayPosts>
        <CreatePost></CreatePost>
    </div>

    </>)
}