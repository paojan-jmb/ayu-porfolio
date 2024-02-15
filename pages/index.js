//next image
import Image from "next/image";
// next link
import Link from "next/link";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//frame motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-[#2c2c2c] h-full'>
      {/* logo */}
      <header className='absolute  w-full flex items-center px-16 xl:px-0 xl:h-[90px] top-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'}>
              <Image 
              src={'/logo XTM.png'} 
              width={100} 
              height={100} 
              alt='' 
              priority={true}
              className='mix-blend-color-dodge animate-pulse duration-75 z-10 max-w-[100px] max-h-[100px] relative top-3  bg-white/10 backdrop-blur rounded-full'/>
            </Link>  
        </div>
      </div>
      </header>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-[#040404] via-[#414141]/10 to-[#040404]/30'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto text-blue-700'> 
          {/* title */}
          <motion.h1 
          variants={fadeIn('down', 0.2)} 
          initial='hidden' 
          animate='show'
          exit='hidden' 
          className='h1' z-10
          >
            Hallo <br /> {' '}
            <span className=' text-pink-600'>Selamat Datang</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
          variants={fadeIn('down', 0.3)} 
          initial='hidden' 
          animate='show'
          exit='hidden' 
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-lg z-10'
          >
            Namaku Ayu. Sebagai anak pertama dalam keluarga, saya selalu merasa bertanggung jawab dan siap menghadapi tantangan. Hobiku adalah mendaki gunung, karena saya percaya bahwa perjuangan di alam bebas menciptakan karakter dan ketangguhan. Saya seorang pejuang yang tidak kenal lelah, dan saya bertekad untuk berusaha sekeras mungkin mencapai tujuan hidup saya. Saya percaya bahwa dengan dedikasi dan semangat pantang menyerah, saya bisa mencapai puncak keberhasilan yang saya impikan.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectBtn />
          </div>
          <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial='hidden' 
          animate='show'
          exit='hidden' 
          className='hidden xl:flex'
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge transate-z-0 '></div>
        {/* particle */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div 
        variants={fadeIn('up', 0.5)} 
        initial='hidden' 
        animate='show'
        exit='hidden' 
        transition={{duration:1, ease:'easeInOut'}}
        className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
