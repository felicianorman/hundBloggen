import { Link } from "react-router-dom"
import '../scss/Navbar.scss'

export const Navbar = () => {
    return (<>
        <nav>
            <ul>
            <li><Link to={'/'}>Hem</Link></li>
            <li><Link to={'/blogs'}>Bloggar</Link></li>
            <li><Link to={'/new'}>Nytt inlägg</Link></li>
            <li><Link to={'/users'}>Användare</Link></li>
        </ul>
        </nav>
</>)
}