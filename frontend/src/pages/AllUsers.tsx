import '../scss/Main.scss'
import { DisplayUsers } from "../components/DisplayUsers"
import { Navbar } from "../components/Navbar"

export const AllUsers = () => {
    return (<>
    <Navbar></Navbar>
    <DisplayUsers></DisplayUsers>
    </>)
}