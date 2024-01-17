import CartWidget from "../CartWidget.jsx/CartWidget"
import { Link } from "react-router-dom"

import "./NavBar.css"


const NavBar = () => {
    return (
        <>
            <nav>
                <div className="navContainer">
                    <Link to="/">
                        <h3 className="logo">Lens Decides</h3>
                    </Link>
                    <div className="buttons">
                        <Link className="link" to={'/category/America'}>America</Link>
                        <Link className="link" to={'/category/Europa'}>Europa</Link>
                        <Link className="link" to={'/category/Africa'}>Africa</Link>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </>
    )
}

export default NavBar