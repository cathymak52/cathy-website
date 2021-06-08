import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />

      <div className="content">
        {children}
          {/* content for each page */}
      </div>

      <footer>
          <p>Copyright 2021 Created with <span></span> by Cathy Makinde</p>
      </footer>
        </div>
    )
}
