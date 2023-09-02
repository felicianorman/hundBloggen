import { DisplayPosts } from "../components/DisplayPosts"
import { Navbar } from "../components/Navbar"
import "../scss/AllPosts.scss";
import '../scss/Main.scss'

export const AllPosts = () => {
    return (<>
    <Navbar></Navbar>
    <div className="wrapper">
        <DisplayPosts></DisplayPosts>
        </div>
    </>)
}