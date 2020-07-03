import React, { Component } from 'react'
import Portfolio from './Portfolio'
import About from './About'
import Work from './Work'
import Profile from './Profile'
import Projects from './Projects'


export default class Home extends Component {
    render() {
        return (
            <div>
                <a id="Work" href="/"></a>
                <Work />
                <a id="Projects" href="/"></a>
                <Projects />
                <a id="About" href="/"></a>
                <About />
                <a id="Portfolio" href="/"></a>
                <Portfolio />
                <a id="Profile" href="/"></a>
                <Profile />
            </div>
        )
    }
}