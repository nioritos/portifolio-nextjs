import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import deved from '../public/dev-ed-wave.png';


export default function Home() {
  return (
    <div className='py-4 px-6 dark:bg-black'>
      <Head>
        <title>Nioritos</title>
        <meta name="description" content="Nioritos's portifolio, here you will look my knowledges, projects and more about me" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <header className='flex w-full h-16 justify-between items-center'>
        <h1 className=' dark:text-gray-200 text-black font-bold text-xl' id='logo'>nioritos</h1>
        <ul className='flex gap-4 justify-center items-center'>
          <li><BsFillMoonStarsFill size="24" className='hover:cursor-pointer' /></li>
          <li className='bg-teal-500 rounded-lg py-2 px-4 duration-700 hover:bg-teal-600'><Link href="" className='text-white'>Resume</Link></li>
        </ul>
      </header>

      <main className="container min-h-full min-w-full mt-14">
        <section id="home" className='flex flex-row flex-wrap items-center justify-center min-h-full min-w-screen'>
          <div className="flex flex-col justify-center items-center md:items-start md:max-w-[40%] min-w-[40%] m-auto">
            <h1 className='font-bold text-teal-500 text-4xl'>Junior Guimarães</h1>
            <h2 className='font-medium text-lg mt-2 dark:text-gray-200'>Web Developer and UI/UX Designer</h2>
            <p className='text-base text-center md:text-start mt-2 dark:text-gray-300'>Freelancer providing services for programming and design content needs. Contact me now!</p>
            <ul className='flex justify-center items-center gap-4 my-4'>
              <li><AiFillTwitterCircle size="36" className='dark:fill-white'/></li>
              <li><AiFillLinkedin size="36" className='dark:fill-white'/></li>
              <li><AiFillInstagram size="36" className='dark:fill-white'/></li>
              <li><AiFillYoutube size="36" className='dark:fill-white'/></li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-teal-500 circle rounded-full w-80 h-80 relative overflow-hidden m-auto">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section id="services" className='mt-60 flex justify-center items-center'>
          <div className="flex-col">
          <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
