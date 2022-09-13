import React, { Component } from 'react'
import logo from '../img/book-logo.jpg'
import '../stylesheet/NavBar.css'


class NavBar extends Component{

    render() {
        return <nav>
            <img src={logo} alt="Logo"/>
            <ul>
                <li>Accueil</li>
                <li>Books</li>
                <li>About</li>
            </ul>
        </nav>
    }

}
 
export default NavBar