import React from 'react';
import { motion } from "framer-motion";
import Cards from './ui/Cards';
import { Car } from 'lucide-react';

const Header = () => {
  return (
    <>
        <div className='flex inset-0 min-h-screen w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]'>
          <div className='mt-32'>
            <Cards />
          </div>
        </div>
    </>
  )
}

export default Header