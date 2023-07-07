import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Contact = () => {
  const currentPage = useSelector(store => store.currentPage)
  const {register, reset, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = () =>{
    
  }

  return (
    <section className='bg-zinc-900 text-white min-h-screen p-4 scroll-smooth'>
    <section className='max-w-6xl m-auto'>
      <h2 className='p-2 text-3xl text-[#00bdff] tracking-widest select-none '>Contact</h2>
      <p className='p-3 pt-1 text-start text-lg sm:text-xl'>If you’d like to chat about a project or just have question, please get in touch.</p>
      <section className='w-full '>


        <form action="" onSubmit={handleSubmit(onSubmit)} className='p-2 max-w-xl m-auto'>
          {/**NAME */ }
          <div className='grid gap-1'>
            <label htmlFor="name" className='p-1'>Your Name</label>
            <input id='name' placeholder='Type your name...' type="text" className='p-2 rounded-md overflow-hidden outline-none bg-slate-500' {...register("name",
            {required: "This field is required",
            maxLength:{
              value: 30,
              message: "The text is very long! No more than 30 characters!"
            }
          })} />
          {errors.name && <p className='text-sm text-red-400 text-center'>{errors.name.message}</p>}
          </div>

          {/**EMAIL */ }
          <div className='grid gap-1'>
            <label htmlFor="email" className='p-1'>Email</label>
            <input id='email' type="email" placeholder='hello@example.co' className='p-2 rounded-md overflow-hidden outline-none bg-slate-500' {...register("email",
            {required: "This field is required",
            pattern:{
              value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "The format is not valid!"
            }})} />
            {errors.email && <p className='text-sm text-red-400 text-center'>{errors.email.message}</p>}
          </div>

          {/**MESSAGE */ }
          <div className='grid gap-1'>
            <label htmlFor="message" className='p-1'>General Message</label>
            <textarea name="message" id="message"  rows="6" placeholder='Say Hi!...' className='p-2 rounded-md overflow-hidden outline-none bg-slate-500' {...register("message", {
              required: "This field is required"
            })}></textarea>
            {errors.message && <p className='text-sm text-red-400 text-center'>{errors.message.message}</p>}
          </div>
          <div className='w-full p-3 flex justify-center'>
            <button className='p-2 sm:px-4 shadow-sm rounded-md backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md '>Send</button>
          </div>
          
        </form>

        <section className='w-full'>
          <h2 className='text-center text-lg sm:text-xl pb-1'>Also...</h2>
          <ul className='flex gap-4 justify-center'>
            <Link to="https://www.linkedin.com/in/luis-reyes-1732a3227/" target='_blank' className='sm:text-lg hover:underline hover:text-blue-500 font-semibold'>Linkedin</Link>
            <Link to="https://wa.me/522215870242" target='_blank' className='sm:text-lg hover:underline hover:text-emerald-500 font-semibold'>WhatsApp</Link>
            <Link to="https://github.com/LuisEnrique25" target='_blank' className='sm:text-lg hover:underline hover:text-gray-500 font-semibold'>GitHub</Link>
          </ul>
        </section>

      </section>
    </section>
    <NavLink to="/">Start</NavLink>
    </section>
  )
}

export default Contact
