import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import deved from '../public/dev-ed-wave.png';

import Services from '../components/services/Services';
import Head from '../components/head/Head';


export default function Home() {
  return (
    <div className='py-4 px-6 dark:bg-black'>
    <Head/>
      

      <main className="container min-h-full min-w-full mt-14">
        <section id="home" className='flex flex-row flex-wrap items-center justify-center min-h-full min-w-screen'>
          <div className="flex flex-col justify-center items-center md:items-start md:max-w-[40%] min-w-[40%] m-auto">
            <h1 className='font-bold text-teal-500 text-4xl'>Junior Guimarães</h1>
            <h2 className='font-medium text-lg mt-2 dark:text-gray-200'>Web Developer and UI/UX Designer</h2>
            <p className='text-base text-center md:text-start mt-2 dark:text-gray-300'>Freelancer providing services for programming and design content needs. Contact me now!</p>
            <ul className='flex justify-center items-center gap-4 my-4'>
              <li><AiFillTwitterCircle size="36" className='dark:fill-white' /></li>
              <li><AiFillLinkedin size="36" className='dark:fill-white' /></li>
              <li><AiFillInstagram size="36" className='dark:fill-white' /></li>
              <li><AiFillYoutube size="36" className='dark:fill-white' /></li>
            </ul>
            <Link href="" className='bg-teal-500 py-2 px-20 rounded-lg mb-8'><strong>See more</strong></Link>
          </div>
          <div className="bg-gradient-to-b from-teal-500 circle rounded-full w-80 h-80 relative overflow-hidden m-auto">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <Services/>

        <section id="project" className='mt-60 w-full flex justify-center items-center'>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <h3 className="text-3xl py-1 text-teal-600 font-bold">project</h3>
            <ul className='grid grid-cols-3 mt-10'>
              <li className='p-2'>
                <Image src="" alt="img project" className='w-full h-4' />
                <h4>name project</h4>
                <p>description project</p>
              </li>
              <li className='p-2'>
                <Image src="" alt="img project" className='w-full h-4' />
                <h4>name project</h4>
                <p>description project</p>
              </li>
              <li className='p-2'>
                <Image src="" alt="img project" className='w-full h-4' />
                <h4>name project</h4>
                <p>description project</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
