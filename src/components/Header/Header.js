import React from 'react';
import Logo from "./Logo";


const Header = () => {
    return (
        <header>
            <div className='header'>
                <div className='header_container container'>

                    <div className= 'header_box_title'>
                        <Logo/>
                        <h1 className='header_title'>SenseofMove</h1>
                    </div>
                    <nav className='header_box_navigation'>
                        <input type='checkbox' className='menu_btn' id='menu_btn'/>
                        <div className='hamburger'>
                            <label htmlFor="menu_btn" className="menu_toggle">
                                <span className='bar'></span>
                                <span className='bar'></span>
                                <span className='bar'></span>
                            </label>
                        </div>
                        <div className='header_navigation'>
                            <ul className='header_navigation_menu'>
                                <li><a className="header_navigation_element" href="#diagnosis">Diagnoza</a>
                                </li>
                                <li><a className="header_navigation_element" href="#therapy">Terapia</a>
                                </li>
                                <li><a className="header_navigation_element" href='#aboutUs'>Poznaj nas</a>
                                </li>
                                <li><a className="header_navigation_element" href="#webinars">Webinary</a>
                                </li>
                            </ul>
                            <button className='button header_button'>
                                <a href='#contactUs'>Kontakt</a>
                            </button>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;