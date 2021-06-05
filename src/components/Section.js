import React from 'react'
import Details from './section/Details'
import Products from './section/Products'
import { Route } from "react-router-dom"
import Cart from './section/Cart'
import About from './section/About'
import Contact from './section/Contact'


function Section() {
    return (
        <section>

        <Route path="/" component={Products} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        </section>
    )
}

export default Section
