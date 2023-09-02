import { Navbar } from "../components/Navbar"
import '../scss/Main.scss'
import '../scss/Frontpage.scss'

export const FrontPage = () => {
    return (<>

    <div className="frontpage">
        <Navbar></Navbar>
<div className="frontpage--container">
    <h1>Hundbloggen</h1>
    <p>En sida där din hund kan blogga!</p>
    </div>
    </div>

    </>)
}