import Link from "next/link";
import { BsFillMoonStarsFill } from 'react-icons/bs';


function Header() {
    return(
<header className='flex w-full h-16 justify-between items-center'>
        <h1 className=' dark:text-white text-black font-bold text-xl' id='logo'>nioritos</h1>
        <ul className='flex gap-4 justify-center items-center'>
          <li><BsFillMoonStarsFill size="24" className='dark:fill-white hover:cursor-pointer' /></li>
          <li className='bg-teal-500 rounded-lg py-2 px-4 duration-700 hover:bg-teal-600 hover:text-white text-gray-200'><Link href="">Resume</Link></li>
        </ul>
      </header>
    )
};

export default Header;