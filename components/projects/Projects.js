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
            <li className='py-16 px-5 shadow-2xl bg-gray-100 dark:bg-[#111111] gap-2 dark:text-white border-teal-600 border-2 rounded-lg flex flex-col max-w-sm'>
              <h4 className=' text-xl font-medium'>TodoList Vanila</h4>
              <p>A todolist developed with the Javascript Vanila</p>
              <Link href="https://todolist-js-vanila.vercel.app" target="_blank" className='text-teal-600 text-sm'>View more</Link>
            </li>
            <li className='py-16 px-5 shadow-2xl bg-gray-100 dark:bg-[#111111] gap-2 dark:text-white border-teal-600 border-2 rounded-lg flex flex-col max-w-sm'>
              <h4 className=' text-xl font-medium'>Crypto Pages</h4>
              <p>A website developed with ReactJS and using the coingecko api</p>
              <Link href="https://nioritos-using-api-crypto-pages.vercel.app/" target="_blank" className='text-teal-600 text-sm'>View more</Link>
            </li>
            <li className='py-16 px-5 shadow-lg bg-gray-100 dark:bg-[#111111] gap-2 dark:text-white border-teal-600 border-2 rounded-lg flex flex-col max-w-sm'>
              <h4 className=' text-xl font-medium'>Dev.Finance$</h4>
              <p>A webapp to manager your incomes and expenses, developed with HTML, CSS, Javascript and Responsive Design</p>
              <Link href="https://dev-finances-nioritos.vercel.app/" target="_blank" className='text-teal-600 text-sm'>View more</Link>
            </li>
            <li className='py-16 px-5 shadow-lg bg-gray-100 dark:bg-[#111111] gap-2 dark:text-white border-teal-600 border-2 rounded-lg flex flex-col max-w-sm'>
              <h4 className=' text-xl font-medium'>Pokedex</h4>
              <p>A webapp inspired in a pokedex, developed without focus in css code, using Pokedex API, ReactJS, and a Responsive Design.</p>
              <Link href="https://pokedex-nine-flame.vercel.app/" target="_blank" className='text-teal-600 text-sm'>View more</Link>
            </li>
            <li className='py-16 px-5 shadow-lg bg-gray-100 dark:bg-[#111111] gap-2 dark:text-white border-teal-600 border-2 rounded-lg flex flex-col max-w-sm'>
              <h4 className=' text-xl font-medium'>Search GitHub profiles</h4>
              <p>a webapp to get any github profile, using ReactJS and Github api, but it do not have a responsive web design.</p>
              <Link href="https://nioritos-using-api-crypto-pages.vercel.app/" target="_blank" className='text-teal-600 text-sm'>View more</Link>
            </li>

          </ul>
          <Link href="https://github.com/nioritos" className=' mt-6 text-teal-600 text-base'>More repositories in my Github</Link>
        
        </div>
      </section>
    )
};

export default Projects;