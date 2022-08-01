import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className='Header'>
        <header>
            <h2>STOCK TRACKER</h2>
            <div>
                <Link to="/">
                    <button className="nav-btn">Home</button>
                </Link>
                <Link to="/">
                    <button className="nav-btn">Track Trades</button>
                </Link>
                <Link to="/">
                    <button className="nav-btn">Logout</button>
                </Link>
            </div>
        </header>
        </div>
    )
}

export default Header;