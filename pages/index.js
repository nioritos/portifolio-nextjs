import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import code from '../public/code.png';


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
        <h1 className=' dark:text-white text-black font-bold text-xl' id='logo'>nioritos</h1>
        <ul className='flex gap-4 justify-center items-center'>
          <li><BsFillMoonStarsFill size="24" className='dark:fill-white hover:cursor-pointer' /></li>
          <li className='bg-teal-500 rounded-lg py-2 px-4 duration-700 hover:bg-teal-600 hover:text-white text-gray-200'><Link href="">Resume</Link></li>
        </ul>
      </header>

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

        <section id="services" className='mt-60 w-full flex justify-center items-center'>
          <div className="flex flex-col w-full md:justify-center md:items-center">
            <div className=' flex flex-col mb-10 md:max-w-[60%] md:justify-center md:items-center'>
              <h3 className="text-3xl py-1 text-teal-600 font-bold">Services I offer</h3>
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

            <ul className='w-full  h-full flex flex-wrap gap-4 md:justify-center md:items-center'>
              <li className=' bg-zinc-900 dark:bg-white flex flex-col justify-center items-center w-full h-112 dark:text-zinc-900 rounded-lg md:w-[30%]'>
                <div className='p-6 flex flex-col justify-center items-center text-center'>
                  <Image src={code} width="100" height="100" />
                  <h3 className='font-bold text-lg text-teal-600'>Clean and perfomatic code</h3>
                  <h4 className='font-semibold '>I write code with my knowledges about clean and perfomatic code, applyed in very projects i code</h4>
                  <h5 className='font-medium'>Development tecnologies i use for programming</h5>
                  <ul className='mt-4 text-gray-800 font-medium flex flex-col justify-center items-center max-w-[80%] gap-4'>
                    <li className=''>Nextjs</li>
                    <li className=''>Typescript</li>
                    <li className=''>Nodejs</li>
                    <li className=''>Prisma</li>
                    <li className=''>React Native</li>
                    <li><Link href="https://github.com/nioritos" className='text-teal-600 text-sm'>View more</Link></li>
                  </ul>
                </div>
              </li>
              <li className=' bg-zinc-900 dark:bg-white flex flex-col justify-center items-center w-full h-112 dark:text-zinc-900 rounded-lg md:w-[30%]'>
                <div className='px-6 py-20 flex flex-col justify-center items-center text-center'>
                  <Image src={design} width="100" height="100" />
                  <h3 className='font-bold text-lg text-teal-600'>Modern and beatyful layouts</h3>
                  <h4 className='font-semibold'>I do layout with my knowledges about UI and UX Design</h4>
                  <h5 className='font-medium'>Design tools i use</h5>
                  <ul className='mt-4 text-gray-800 font-medium flex flex-col justify-center items-center max-w-[80%] gap-4'>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
              </li>
              <li className=' bg-zinc-900 dark:bg-white flex flex-col justify-center items-center w-full h-112 dark:text-zinc-900 rounded-lg md:w-[30%]'>
                <div className='px-6 py- flex flex-col justify-center items-center'>
                  <Image src={consulting} width="100" height="100" />
                  <h3 className='font-bold text-lg text-teal-600'>Semanctic code, better to SEO</h3>
                  <h4 className='font-semibold text-center'>I write code with my knowledges about SEO Optimization, good for your business,blog, website...</h4>
                  <ul className='mt-4 text-gray-800 font-medium flex flex-wrap justify-center items-center max-w-[80%] gap-4'>
                    
                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </section>

        <section id="project" className='mt-60 w-full flex justify-center items-center'></section>
      </main>
    </div>
  )
}
