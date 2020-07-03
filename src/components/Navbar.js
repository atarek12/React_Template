import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'

import openImage from '../images/Navbar/open.png'
import closeImage from '../images/Navbar/close.png'

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.ulRef = React.createRef();
        this.openRef = React.createRef();
        this.closeRef = React.createRef();
    }

    handleClick = () => {
        const ulName = this.ulRef.current;
        const openSpan = this.openRef.current;
        const closeSpan = this.closeRef.current;

        ulName.classList.toggle('active');
        openSpan.classList.toggle('active');
        closeSpan.classList.toggle('active');
    }

    render() {
        return (
            <div className="Navbar" >
                <div className="container">
                    <span className="logo" >Profile Name</span>
                    <span ref={this.openRef} onClick={this.handleClick} className="openIcon active"><img src={openImage} alt="Open" width="40" height="40" /></span>
                    <span ref={this.closeRef} onClick={this.handleClick} className="closeIcon"><img src={closeImage} alt="Close" width="40" height="40" /></span>
                    <ul className="list" ref={this.ulRef}>
                        <li className="listItem" ><Link className="link" to="/React_Template" >Home</Link></li>
                        <li className="listItem" ><a className="link" href="#Work" >Work</a></li>
                        <li className="listItem" ><a className="link" href="#Projects" >Projects</a></li>
                        <li className="listItem" ><a className="link" href="#About" >About</a></li>
                        <li className="listItem" ><a className="link" href="#Portfolio" >Portfolio</a></li>
                        <li className="listItem" ><a className="link" href="#Profile" >Profile</a></li>
                        <li className="listItem" ><Link className="link" to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}