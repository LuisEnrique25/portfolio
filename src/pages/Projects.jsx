import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DB from '../db/projects.json'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const currentPage = useSelector(store => store.currentPage)
  console.log(projects);
  
  useEffect(() =>{
    setProjects(DB)
  }, [])
  return (
    <section className='bg-zinc-900 text-white min-h-screen p-4 scroll-smooth'>
    <section className='max-w-6xl m-auto'>
      <h2 className='p-2 text-3xl text-[#00bdff] tracking-widest select-none '>{currentPage}</h2>
      <p className='p-3 pt-1 text-center text-xl'>Things I've made or learned at the time</p>

      <section className='w-full  flex flex-col gap-4 justify-center items-center'>
        {
          projects.map((project) => <ProjectCard key={project.name} project={project}/>)
        }
      </section>
        <NavLink to="/">Start</NavLink>
    </section>
    </section>
  )
}

export default Projects