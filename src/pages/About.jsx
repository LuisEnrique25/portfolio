import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Nav from '../components/Nav'

const About = () => {
  const currentPage = useSelector(store => store.currentPage)

  return (
    <section className='bg-zinc-900 text-white min-h-screen p-4 scroll-smooth'>
    <section className='max-w-6xl m-auto'>
      <h2 className='p-2 text-3xl text-[#00bdff] tracking-widest select-none '>About Luis Reyes</h2>
      <section className='w-full mt-5'>


        <section className='grid sm:grid-cols-2 gap-3 items-center'>
          <div className='relative max-h-80 aspect-square rounded-[50%] overflow-hidden self-center m-auto'>
            <img src="/images/pick1.webp" alt="" className=''  />
          </div>
          <div>
          <p className='p-1 text-justify text-lg sm:text-xl'>I am a front-end developer from Mexico City, Mexico. Currently enrolled in the Full Stack Developer program at Academlo.</p>
          <p className='p-1 text-justify text-lg sm:text-xl'>You can find me in <Link to="https://www.linkedin.com/in/luis-reyes-1732a3227/" target='_blank' className='font-medium underline hover:text-blue-500'>Linkedin</Link> and <Link to="https://github.com/LuisEnrique25" target='_blank' className='font-medium underline hover:text-gray-500'>Github</Link>!</p>
          </div>
        </section>

        <section className='grid gap-4 p-3 mt-10'>
          <h3 className='text-center text-xl sm:text-3xl text-[#00bdff]  mb-5'>Front-End Deveoper</h3>
          <div className='flex flex-col sm:flex-row-reverse gap-3 justify-evenly items-center'>
            <div className='max-h-80 max-w-xs sm:max-h-96 sm:max-w-sm rounded-md overflow-hidden '>
              <img src="/images/respWeb.webp" alt="" />
            </div>
            <p className='max-w-xl md:text-lg text-justify'>Throughout my career, I have gained expertie in creating responsive websites and web applications that provide users with a seamless and enjoyable experience across various devices.</p>
          </div>

          

          <div className='flex flex-col sm:flex-row gap-3 justify-evenly items-center'>
            <div className='max-h-80 max-w-xs sm:max-h-96 sm:max-w-sm rounded-md overflow-hidden'>
              <img src="/images/code.webp" alt="" />
            </div>
            <p className='max-w-xl md:text-lg text-justify'>I am passionate about working in front-end development as it allows me to combine my creativity with technical skills to deliver visually appealing and functional solutions. </p>
          </div>
          
        </section>

        <section className='grid gap-4 p-3 mt-10'>
          <h3 className='text-center text-xl sm:text-3xl text-[#00bdff] '>Skills</h3>
          <section className='w-full'>
            <section className='max-w-3xl m-auto flex flex-col gap-3'>
              <p className='md:text-lg text-justify'>My primary focus revolves around using modern technologies such as <span className='text-blue-500 font-medium'>React</span>, <span className='text-yellow-500 font-medium'>JavaScript</span>, <span className='text-red-500 font-medium'>HTML5</span> and <span className='text-sky-500 font-medium'>CSS3</span>. These tools enable me to develop interactive, dynamic, and highly responsive user interfaces. With React, I can build reusable components that facilitate the construction and maintenance of scalable web applications.</p>
              <div className='flex justify-around p-2'>
                <i className="fa-brands fa-html5 text-red-500"></i>
                <i className="fa-brands fa-js text-yellow-500"></i>
                <i className="fa-brands fa-css3 text-sky-500"></i>
                <i className="fa-brands fa-react animate-spin-slow text-blue-500"></i>
              </div>
              <p className='md:text-lg text-justify'>I have also learned to use development tools such as:</p>
              <div className='flex justify-around p-2'>
                <p className="text-red-500">Git</p>
                <p className="text-yellow-500">GitHub</p>
                <p className="text-sky-500">Tailwind</p>
              </div>
              <NavLink to="/projects" className="p-2 w-fit m-auto shadow-sm rounded-md backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md ">Check some Projects</NavLink>
            </section>
          </section>
        </section>




        <section className=' p-3 mt-10'>
          <section className='grid gap-4 max-w-3xl m-auto'>
        <h3 className='text-center text-xl sm:text-3xl text-[#00bdff]'>Contact Me!</h3>
        <p>I am thrilled at the opportunity to join to your team. I am confident that together, we can create captivating and effective digital experiences that delight users across all devices. Thank you for your attention, and I am eager to start working together!</p>
        <NavLink to="/contact" className="w-fit m-auto p-2 shadow-sm rounded-md backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md " >Get In Touch</NavLink>

          </section>
        </section>


      </section>
    </section>
      <Nav/>
    </section>
  )
}

export default About