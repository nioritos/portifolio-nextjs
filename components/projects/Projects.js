import Link from 'next/link';


function Projects() {
    return(
        <section id="project" className='mt-60 w-full flex justify-center items-center'>
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className='flex flex-col w-full items-center'>
            <h3 className="text-3xl py-1 text-teal-600 font-bold">Projects</h3>
          <h4 className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-[860px]:text-left'>These are my projects, and the tecnologies i used to code it</h4>
          </div>
          <ul className=' flex flex-wrap mt-10 gap-4 max-[860px]:items-center max-[860px]:justify-center max-[1255px]:justify-center'>
            <li className='py-10 px-5 bg-[#101010] gap-2 dark:text-white border-teal-600 border-2 rounded-lg flex flex-col '>
              <h4 className=' text-xl font-medium'>Lorem name project</h4>
              <p>lorem lorem lorem lorem lorem lorem projects</p>
              <Link href="https://github.com/nioritos" className='text-teal-600 text-sm'>View more</Link>
            </li>
            <li className='py-10 px-5 bg-[#101010] gap-2 dark:text-white border-teal-600 border-2 rounded-lg flex flex-col '>
              <h4 className=' text-xl font-medium'>Lorem name project</h4>
              <p>lorem lorem lorem lorem lorem lorem projects</p>
              <Link href="https://github.com/nioritos" className='text-teal-600 text-sm'>View more</Link>
            </li>
            <li className='py-10 px-5 bg-[#101010] gap-2 dark:text-white border-teal-600 border-2 rounded-lg flex flex-col '>
              <h4 className=' text-xl font-medium'>Lorem name project</h4>
              <p>lorem lorem lorem lorem lorem lorem projects</p>
              <Link href="https://github.com/nioritos" className='text-teal-600 text-sm'>View more</Link>
            </li>
          </ul>
          <Link href="https://github.com/nioritos" className=' mt-6 text-teal-600 text-base'>More repositories in my Github</Link>
        
        </div>
      </section>
    )
};

export default Projects;