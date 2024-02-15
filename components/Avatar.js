import Image from "next/image";

const Avatar = () => {
  return(
    <div className='hidden xl:flex xl:max-w-none'>
      <Image 
      src={'/ayu.png'} 
      width={400} 
      height={400} 
      alt='' 
      className='translate-z-0 '
      />
    </div>
  );
};

export default Avatar;
