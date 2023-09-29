import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai';

const InternshipsScreen = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white/10 flex md:flex-row flex-col md:gap-20 gap-10 rounded-3xl shadow-md shadow-white/50 border-2 border-solid border-[#8154db] mx-4 my-10 md:m-20 px-4 py-10 md:p-20'>
        <div className='flex flex-col justify-center gap-10 md:gap-20 w-full md:w-1/2'>
          <section className='text-center text-2xl md:text-4xl flex flex-col gap-4 font-semibold text-white'>
            <h1>Software Development Intern</h1>
            <h1 className='text-[#8154db]'>Indian National Science Academy (INSA)</h1>
          </section>
          <section className='flex justify-between text-white font-semibold text-md md:text-xl'>
            <h1>07/2023 - 10/2023</h1>
            <h1>Delhi</h1>
          </section>
        </div>
        <div className='flex md:bg-white/5 md:p-6 md:rounded-3xl md:shadow-md md:shadow-white/50 md:border-2 md:border-solid md:border-[#8154db] flex-col md:gap-10 gap-4 w-full md:w-1/2'>
          <h1 className='text-white md:text-3xl text-2xl text-center font-semibold'>Responsibilities/Tasks</h1>
          <ul className='list-disc text-white text-justify text-md md:text-lg font-semibold pl-5'>
            <li>Worked on a project entitled “Online Fellow Nomination” with INSA IT team members.</li>
            <li>Developed a User Model of “Online Fellow Nomination” in documented form (assigned task) and gave presentations on this model during the offline internship.</li>
            <li>Managed INSA Events with INSA IT team members and learnt SQL side by side.</li>
          </ul>
          <section className='flex md:flex-row flex-col justify-between gap-4 items-center'>
            <NavLink target='_blank' to='https://drive.google.com/file/d/15AHefzZfuwekqpHH09EOcDYD_5l4hyZu/view' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
              <button>Documentation link</button>
            </NavLink>
            <NavLink target='_blank' to='https://drive.google.com/file/d/1QwixRpTPpYnoFMCCerB4X3r7DfdJHPTy/view' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
              <button>Certificate link</button>
            </NavLink>
          </section>
        </div>
      </div>

      <div className='bg-white/10 flex md:flex-row flex-col md:gap-20 gap-10 rounded-3xl shadow-md shadow-white/50 border-2 border-solid border-[#8154db] mx-4 my-10 md:m-20 px-4 py-10 md:p-20'>
        <div className='flex flex-col justify-center gap-10 md:gap-20 w-full md:w-1/2'>
          <section className='text-center text-2xl md:text-4xl flex flex-col gap-4 font-semibold text-white'>
            <h1>Web Development Intern</h1>
            <h1 className='text-[#8154db]'>CodeClause</h1>
          </section>
          <section className='flex justify-between text-white font-semibold text-md md:text-xl'>
            <h1>07/2023 - 08/2023</h1>
            <h1>Delhi</h1>
          </section>
        </div>
        <div className='flex md:bg-white/5 md:p-6 md:rounded-3xl md:shadow-md md:shadow-white/50 md:border-2 md:border-solid md:border-[#8154db] flex-col md:gap-10 gap-4 w-full md:w-1/2'>
          <h1 className='text-white md:text-3xl text-2xl text-center font-semibold'>Responsibilities/Tasks</h1>
          <ul className='list-disc text-white text-justify text-md md:text-lg font-semibold pl-5'>
            <li>Worked from home and improved proficiency in my skills i.e. React JS, Express JS, Node JS, MongoDB.</li>
            <li>Developed a web application (allocated task) during the internship called ApnaPizza.</li>
            <li>Technologies Used : MERN , Redux , Stripe , Bootstrap.</li>
          </ul>
          <section className='flex md:flex-row flex-col justify-between gap-4 items-center'>
            <NavLink target='_blank' to='https://github.com/nerdTushar/ApnaPizza' className='text-3xl'>
              <AiFillGithub />
            </NavLink>
            <NavLink target='_blank' to='https://real-gray-bear-sari.cyclic.app' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
              <button>Live Site link</button>
            </NavLink>
            <NavLink target='_blank' to='https://drive.google.com/file/d/1f4x135sBKGz0VW04SI9CWi4PIpG2IYcv/view' className='bg-[#8154db] flex justify-center text-white hover:bg-[#733381] md:w-1/2 w-full py-2 rounded-3xl font-bold'>
              <button>Certificate link</button>
            </NavLink>
          </section>
        </div>
      </div>
      <Footer />
    </> 
  )
}

export default InternshipsScreen;
