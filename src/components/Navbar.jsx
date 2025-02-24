import LogoIcon from '@/assets/images/amnesia.png';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';



const Navbar = () => {
  return (
    <>
        <div className='fixed w-full bg-gray-50'>
            <div className='p-2 sm:p-4 md:p-6 flex items-center justify-between text-center'>
              <div className='flex gap-2 items-center text-center'>
                <motion.img 
                  src={LogoIcon} 
                  className='h-12 w-12'
                  initial={{ rotate: 0, scale: 0.5}}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{ duration: 1, ease: "backInOut", type: "spring", damping: 8 }}
                  />
                  <motion.h2 
                  className='sm:text-3xl md-text-xl text-md tracking-wider font-bold'
                  >
                      Remember Me?
                  </motion.h2>
              </div>
              <div>
                <Drawer>
                    <DrawerTrigger asChild>
                      <Button>By SKumr02</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-[300px]">
                        <DrawerHeader>
                          <DrawerTitle>From Satyam, with love!</DrawerTitle>
                          <DrawerDescription>Checkout my socials</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter className="grid grid-cols-2">
                          <DrawerClose asChild>
                            <Button className="bg-bw text-text" variant="noShadow">
                              Cancel
                            </Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                </Drawer>
              </div>
            </div>

            <hr className='border-black w-full' />
        </div>

    </>
  )
}



export default Navbar


