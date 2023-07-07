import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Projects = () => {
  const currentPage = useSelector(store => store.currentPage)

  return (
    <section>
      <h1>Projects Page</h1>
      <h2 className=' p-2 text-blue-800'>{currentPage}</h2>
      <NavLink to="/">Start</NavLink>
    </section>
  )
}

export default Projects