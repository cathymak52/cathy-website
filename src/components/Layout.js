import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { IconContext } from "react-icons";
import Emoji from 'a11y-react-emoji'



export default function Layout({children}) {
    return (
        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: "1em" }}>
        <div className="layout">
            <Navbar />

      <div className="content">
        {children}
          {/* content for each page */}
      </div>

      <footer>
          <p>Copyright 2021 
          Made with
            {' '}
            <Emoji symbol="❤️" label="love" />
            {' '} by Cathy Makinde</p>
      </footer>
        </div>
        </IconContext.Provider>
    )
}
