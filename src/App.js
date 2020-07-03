import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/React_Template' component={Home} />
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </BrowserRouter>
    )
  }
}
