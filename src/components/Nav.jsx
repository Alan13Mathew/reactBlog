import React from 'react'
import './nav.css'

function Nav() {
    const styleHeader = {
        display : 'flex',
        margin: '10px',
    }

  return (
    <header className="header">
        <h1>My Blog</h1>
        <nav style={ styleHeader }>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>
  )
}

export default Nav;