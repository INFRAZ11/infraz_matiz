/*import "./Style.css"
function Header() {
    return (
        <div>
            <header>
                <nav>
                    Home | About | Services | Contact
                </nav>
            </header>
        </div>
    );
}

export default Header;*/
import React from 'react';
import './Style.css';
function Header() {
    return (
        <div>
            <header>
                <nav className='navigation'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
                </nav>
            </header>
        </div>
    );
}

export default Header;