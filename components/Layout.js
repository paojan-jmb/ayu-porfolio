// Font
import {Poppins} from '@next/font/google'
// Font Setting
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '600'],
});

// Component
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import { Children } from 'react';


const Layout = ({ children }) => {
  return (
    <div className={'page bg-[#2c2c2c] text-white bg-cover bg-no-repeat ${poppins.variable} font-poppins relative'}
    >
      <TopLeftImg />
      <Nav />
     
      <Header />
      {children}
    </div>
  );
};


export default Layout;
