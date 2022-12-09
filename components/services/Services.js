import design from '../../public/design.png';
import consulting from '../../public/consulting.png';
import code from '../../public/code.png';
import Link from 'next/link';
import Image from 'next/image';


function Services() {
    return(
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
                <h4 className='font-semibold '>I write code with my knowledges about clean and perfomatic code, applyed in very projects i coded</h4>
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
    )
};

export default Services;