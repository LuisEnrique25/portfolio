import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const About = () => {
  const currentPage = useSelector(store => store.currentPage)

  return (
    <section>
      <h1>About Page</h1>
      <h2 className=' p-2 text-blue-800'>{currentPage}</h2>
      <NavLink to="/">Start</NavLink>
    </section>
  )
}

export default About