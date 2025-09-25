import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>