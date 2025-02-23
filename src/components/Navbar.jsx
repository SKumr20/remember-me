import LogoIcon from '@/assets/images/amnesia.png';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";



const Navbar = () => {
  return (
    <>
        <div className='fixed w-full bg-gray-50'>
            <div className='p-6 flex gap-2 items-center text-center'>
                <motion.img 
                src={LogoIcon} 
                className='h-12 w-12'
                initial={{ rotate: 0, scale: 0.5}}
                animate={{ rotate: 360, scale: 1 }}
                transition={{ duration: 1, ease: "backInOut", type: "spring", damping: 8 }}
                 />
                <motion.h2 
                className='text-3xl tracking-wider font-bold'
                >
                    Remember Me?
                </motion.h2>
            </div>
            <hr className='border-black w-full' />
        </div>

    </>
  )
}



export default Navbar


