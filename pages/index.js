import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import deved from '../public/dev-ed-wave.png';


export default function Home() {
  return (
    <div className='py-4 px-6'>
      <Head>
        <title>Nioritos</title>
        <meta name="description" content="Nioritos's portifolio, here you will look my knowledges, projects and more about me" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <header className='flex w-full h-16 justify-between items-center'>
        <h1 className='text-black font-bold text-xl' id='logo'>nioritos</h1>
        <ul className='flex gap-4 justify-center items-center'>
          <li><BsFillMoonStarsFill size="24" className='hover:cursor-pointer' /></li>
          <li className='bg-teal-500 rounded-lg py-2 px-4 duration-700 hover:bg-teal-600'><Link href="" className='text-white'>Resume</Link></li>
        </ul>
      </header>

      <main className="container min-h-full min-w-full">
        <section id="home flex flex-col justify-center items-center">
          <div className="flex flex-col items-center m-auto w-90">
            <h1 className='font-bold text-teal-500 text-4xl'>Junior Guimarães</h1>
            <h2 className='font-medium text-lg p-2'>Web Developer and UI/UX Designer</h2>
            <p className='text-base text-center'>Freelancer providing services for programming and design content needs. Contact me now!</p>
          </div>

          <ul className='flex justify-center items-center gap-4'>
            <li>
              <AiFillTwitterCircle size="32" />
            </li>
            <li>
              <AiFillLinkedin size="32" />
            </li>
            <li>
              <AiFillInstagram size="32" />
            </li>
            <li>
              <AiFillYoutube size="32" />
            </li>
          </ul>
          <div className="bg-gradient-to-b from-teal-500 circle rounded-full w-80 h-80 m-auto relative overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>

        </section>
      </main>
    </div>
  )
}
