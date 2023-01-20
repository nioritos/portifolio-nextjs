import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import deved from '../public/dev-ed-wave.png';
import FaviconVercel from '../public/favicon.ico';

import Services from '../components/services/Services';
import Header from '../components/header/Header';
import Projects from '../components/projects/Projects';

export default function Home() {
  return (
    <div className='py-4 px-6 dark:bg-black'>
      <Head>
        <title>Nioritos</title>
        
        <meta name="description" content="Nioritos's portifolio, here you will look my knowledges, projects and more about me" />
        <link rel="icon" href={deved}/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className="container min-h-full min-w-full mt-14">
        <section id="home" className='flex flex-row flex-wrap items-center justify-center min-h-full min-w-screen'>
          <div className="flex flex-col justify-center items-center md:items-start md:max-w-[40%] min-w-[40%] m-auto">
            <h1 className='font-bold text-teal-500 text-4xl'>Junior Guimarães</h1>
            <h2 className='font-medium text-lg mt-2 dark:text-gray-200'>Web Developer and UI/UX Designer</h2>
            <p className='text-base text-center md:text-start mt-2 dark:text-gray-300'>Freelancer providing services for programming and design content needs. Contact me now!</p>
            <ul className='flex justify-center items-center gap-4 my-4'>
              <li>
                <Link href="https://twitter.com/nioritado" target="_blank">
                  <AiFillTwitterCircle size="36" className='dark:fill-white hover:opacity-80 duration-700 cursor-pointer' />
                </Link>
              </li>
              <li>
                <Link href="https://br.linkedin.com/in/junior-guimar%C3%A3es-952625203" target="_blank">
                  <AiFillLinkedin size="36" className='dark:fill-white hover:opacity-80 duration-700 cursor-pointer' />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/nioritos" target="_blank">
                  <AiFillGithub size="36" className='dark:fill-white hover:opacity-80 duration-700 cursor-pointer' />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/nioritos" target="_blank">
                  <AiFillInstagram size="36" className='dark:fill-white hover:opacity-80 duration-700 cursor-pointer' />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCIQQVyoUl-POpXFfvi3imxA" target="_blank">
                  <AiFillYoutube size="36" className='dark:fill-white hover:opacity-80 duration-700 cursor-pointer' />
                </Link>
              </li>
            </ul>
            <Link href="" className='bg-teal-500 duration-700 hover:bg-teal-600 hover:text-white text-gray-200 py-2 px-20 rounded-lg mb-8 '><strong>See more</strong></Link>
          </div>
          <div className="bg-gradient-to-b from-teal-500 circle rounded-full w-80 h-80 relative overflow-hidden m-auto">
            <Image src={deved} layout="fill" objectFit="cover" alt='my image' />
          </div>
        </section>
        <Services />
        <Projects />

        <section className=''>
		<div className=''>
			<form action=''> 
	  			:	
	  		</form>
	        </div>
        </section>
      </main>
    </div>
  )
}
