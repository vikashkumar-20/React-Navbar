import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }
        return (
        <header>
            <section className="container">
                <div className="navbar">
                    <div className="logo-container">
                        <h1>VIKASH.WORLD</h1>
                    </div>
                    <div className={`menu-items ${menu ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-icon">
                        <button onClick={handleMenu}>
                            <IoMdMenu />
                        </button>
                    </div>

                </div>
            </section>
        </header>
    );
}