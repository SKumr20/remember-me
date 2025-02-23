import LogoIcon from '@/assets/images/amnesia.png';

import { Button } from '@/components/ui/button'


const Navbar = () => {
  return (
    <>
        <div className='fixed w-full bg-gray-50'>
            <div className='p-6 flex gap-2 items-center text-center'>
                <img src={LogoIcon} className='h-12 w-12'></img>
                <h2 className='text-3xl tracking-wider font-bold'>
                    Remember Me?
                </h2>
            </div>
            <hr className='border-black w-full' />
        </div>

    </>
  )
}

export default Navbar