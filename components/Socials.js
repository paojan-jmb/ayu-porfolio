// link
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkdnLine,
} from 'react-icons/ri'

const Socials = () => {
  return(
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={' '} className='hover:text-cyan-400 transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={' '} className='hover:text-cyan-400 transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={' '} className='hover:text-cyan-400 transition-all duration-300'>
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;