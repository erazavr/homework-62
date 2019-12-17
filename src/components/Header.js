import React, {Component} from 'react';
import images from '../images.js';
import {NavLink} from "react-router-dom";
class Header extends Component {
    render() {
        return(

            <header className = 'header'>
                <div className="container clearfix">
                    <a href="#" className="logo">
                        <img src={images.logo}/>
                    </a>
                    <nav className="main-nav">
                        <ul>
                            <li><NavLink to='/firstProject'>My First Work</NavLink></li>
                            <li><NavLink to='/secondProject'>My Second Work</NavLink></li>
                            <li><NavLink to='/thirdProject'>My Third Work</NavLink></li>
                            <li><NavLink to='/fourthProject'>My Fourth Work</NavLink></li>
                        </ul>
                    </nav>
                </div>

            </header>

        )
    }
}
export default Header
