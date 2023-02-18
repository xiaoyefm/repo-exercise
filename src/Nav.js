import { Link } from "react-router-dom"


export default function Nav(){
    return (
        <nav>
            <ul className="menu">
                <li>
                <Link to="/">Home</Link>
                    {/* <a href="#Home">Home</a> */}
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Menu">Menu</a>
                </li>
                <li>
                    <a href="reservations">Reservations</a>
                </li>
                <li>
                    <Link to="#booking">OrderOnline</Link>
                    {/* <a href="#OrderOnline">Order Online</a> */}
                </li>
                <li>
                    <a href="#Login">Login</a>
                </li>
            </ul>
        </nav>
    )
}