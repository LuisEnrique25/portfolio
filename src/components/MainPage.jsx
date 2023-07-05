import React from 'react'
import { NavLink } from 'react-router-dom'

const MainPage = () => {

    const handleClickAbout = () => {
        console.log("Click About");
    }
    const handleClickProjects = () => {
        console.log("Click Projects");
    }
    const handleClickContact = () => {
        console.log("Click Contact");
    }

  return (
    <section>
        <nav>
            <NavLink to="/about" onClick={handleClickAbout}>About</NavLink>
            <NavLink to="/projects" onClick={handleClickProjects}>Projects</NavLink>
            <NavLink to="/contact" onClick={handleClickContact} >Contact</NavLink>
        </nav>
    </section>
  )
}

export default MainPage