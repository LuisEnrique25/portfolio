import { Link, NavLink } from 'react-router-dom'

const ProjectCard = ({project}) => {
    


    

  return (
    <article className='p-2 flex flex-col justify-center items-center lg:flex-row lg:gap-7 max-w-lg lg:max-w-full shadow-md'>
        <div className='py-2 max-w-md'>
            <img src={project.img} alt=""  />
        </div>
        <section>
            <div className='w-fit m-auto'>
            <Link to={project.link} target='_blank' className='text-xl text-center p-2 hover:text-[#00bdff] hover:underline font-semibold'>{project.name}</Link>
            </div>


            <p className={`text-sm text-justify p-2   overflow-hidden  sm:max-w-md`}>{project.description}</p>

            <div className=' p-2 flex flex-col justify-center items-center gap-2'>
            

            
            <div className='flex gap-5'>
            <Link to={project.github} target='_blank' className='hover:text-[#10FFF1] text-lg' > <i className="fa-brands fa-github"></i></Link>
            <Link to={project.link} target='_blank' className='hover:text-[#10FFF1] text-lg' > <i className="fa-solid fa-link"></i></Link>
            </div>
            </div>
        </section>
    </article>
  )
}

export default ProjectCard