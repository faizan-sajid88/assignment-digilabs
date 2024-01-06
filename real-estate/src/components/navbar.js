import { Link } from "react-router-dom"
import logo from "../images/logo.jpg"
import Hamburger from "./hamburger"
export default function Navbar(){

    return(
        <div className="navbar-div">
        <div className="logo" >
<img src={logo} alt="compony-logo" />
        </div>
        <div className="navigations">
<ul>
    <li className="nav-navigations">Rent</li>
    <li className="nav-navigations">Buy</li>
    <li className="nav-navigations">Sell</li>
    <li className="nav-navigations">Manage Property</li>
    <li className="nav-navigations">Resources</li>
</ul>
        </div>
    <Hamburger />
        <div className="nav-btns">
<div>
    <button className="log-in">
        <Link
        style={{color:"black"}}
        className="link" to="/login">Login</Link>
    </button>
    <button className="sign-up">
    <Link
    style={{color:"white"}}
    className="link" to="/signup">Signup</Link>
    </button>
</div>
        </div>
        </div>
    )
}