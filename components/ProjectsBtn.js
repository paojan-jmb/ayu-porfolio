import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from "react-icons/hi2";


const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'/about'} className='relative w-[185px] h-[185px] flex justify-center items-center  bg-cover bg-no-repeat group'
      >
        <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-cyan-400 group'>
                <span className='group-hover:-translate-y-[120%] group-hover:optional: transition-all duration-500 text-pink-600'>
                  Visit Me
                </span>
                <HiArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
              </button>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
