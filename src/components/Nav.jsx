import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [show, setShow] = useState(false)

  return (
    
    
    <section className='fixed top-0 left-0 right-0  sm:right-1/2 sm:translate-x-1/2'>
        <nav className={`text-white flex flex-col sm:flex-row  justify-center ${show ? "visible" : "invisible"} sm:visible`}>
                <NavLink to="/about"  className="p-2 shadow-sm backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md hover:text-sky-600">About</NavLink>
                <NavLink to="/projects"   className="p-2 shadow-sm backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md hover:text-sky-600 ">Projects</NavLink>
                <NavLink to="/contact"  className="p-2 shadow-sm backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md hover:text-sky-600" >Contact</NavLink>
        </nav>
        <div onClick={() => setShow(!show)} className='absolute top-2 right-3 p-1 cursor-pointer text-zinc-300  hover:text-[#00bdff] rounded-xl sm:hidden'>
            <i className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
    </section>
    
  )
}

export default Nav