import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { setCurrentPage } from '../store/slices/currentPage.slice'
import './mainPage.css'
import iconsDB from '../db/icons.json'

const MainPage = () => {

    const currentPage = useSelector(store => store.currentPage)
    
    const dispatch = useDispatch()


    const handleClickAbout = () => {
        const page = 'About'
        dispatch(setCurrentPage(page))
        
    }
    const handleClickProjects = () => {
        const page = 'Projects'
        dispatch(setCurrentPage(page))
        
    }
    const handleClickContact = () => {
        const page = 'Contact'
        dispatch(setCurrentPage(page))
        
    }

  return (
    <section className='bg-zinc-950 min-h-screen '>
    <section className='relative w-full max-h-screen bg-zinc-950 flex overflow-hidden flex-col max-w-[1450px] m-auto'>
       {/** */}
        {
            iconsDB.map((icon) => <div key={icon} className='relative -top-36 w-full flex py-3 whitespace-nowrap  text-4xl sm:text-6xl -rotate-12 rowContainer'>
                    <div className='itemsList'> 
                    {
                        iconsDB.map((icon) => <i className={`${icon}`} key={icon}></i> )
                    }
                    </div>
                    <div className='itemsList'> 
                    {
                        iconsDB.map((icon) => <i className={`${icon}`} key={icon}></i> )
                    }
                    </div> 
        </div>)
        }
        
        <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <section className='text-white flex flex-col justify-center items-center '>
                <h1 className='text-3xl sm:text-4xl text-center p-2 transition-all duration-500 ease-linear'>Hi! I´m <Link to="/about" className='text-blue-500 font-semibold hover:text-[#00bdff]  '>Luis Reyes</Link>,</h1>
                <h2 className='uppercase text-lg sm:text-xl text-center p-2 transition-all duration-500 ease-linear'>I am a <span className='text-[#00bdff]'>Front-end </span> developer focused on working with React. <i className='fa-brands fa-react text-blue-500 animate-spin-slow '></i></h2>
            </section>    
            <nav className='text-white flex gap-4 p-3 justify-center'>
                <NavLink to="/about" onClick={handleClickAbout} className="p-2 shadow-sm rounded-md backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md ">About</NavLink>
                <NavLink to="/projects" onClick={handleClickProjects}  className="p-2 shadow-sm rounded-md backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md ">Projects</NavLink>
                <NavLink to="/contact" onClick={handleClickContact}  className="p-2 shadow-sm rounded-md backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md " >Contact</NavLink>
            </nav>

        </section>
    </section>
    </section>
  )
}

export default MainPage