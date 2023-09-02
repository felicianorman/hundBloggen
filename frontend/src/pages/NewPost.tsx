import { CreatePost } from "../components/CreatePost"
import { Navbar } from "../components/Navbar"
import '../scss/NewPost.scss'

export const NewPost = () => {
    return (<>
    <Navbar></Navbar>
    <div className="newpost--wrapper">
    <CreatePost></CreatePost>
    </div>
    </>)
}