import { LogOut, Menu, Search } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser';
import { useContentStore } from '../store/content';

const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
    const {user} = useAuthStore();
    const {logout} = useAuthStore();

    

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
          const mobileMenu = document.querySelector('.mobile-navbar-animation');
          if (mobileMenu) {
            mobileMenu.classList.add('mobile-navbar-animation-leave');
            setTimeout(() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }, 500);
          }
        } else {
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }
      };
      
    const {  setContentType } = useContentStore();

  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 b ">
        <div className="flex items-center- gap-10 z-50">
            <Link to='/' ><img src="/netflix-logo.png" alt="netflix logo"  className='w-32 sm:w-40' /></Link>

            {/* desktop navbar items  */}
            <div className="hidden sm:flex gap-2 items-center">
                <Link to='/' className='hover:text-red-500 ' onClick={()=>setContentType('movie')} >Movies</Link>
                <Link to='/' className='hover:hover:text-red-500' onClick={()=>setContentType('tv')}  >Tv Shows</Link>
                <Link to='/history' className='hover:hover:text-red-500' >Search History</Link>
            </div>
        </div>

        <div className="flex gap-2 items-center z-50">
            <Link to='/search' >
            <Search className='size-6 cursor-pointer' />
            </Link>
            <img src={user.image} alt="user image"  className='h-8 rounded cursor-pointer' />

            <LogOut onClick={logout}  className='size-6 cursor-pointer'   />

            <div className="sm:hidden">
                <Menu  className='size-6 cursor-pointer'  onClick={toggleMobileMenu} />
            </div>
        </div>
        {/* mobile navbar  */}

        {
            isMobileMenuOpen && (
                <div className='mobile-navbar-animation w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800' >
                        <Link to='/' className='block hover:text-red-500 p-2' onClick={()=>{
                            toggleMobileMenu();
                            setContentType('movie')
                        }}   >Movies
                        </Link>
                        <Link to='/' className='block hover:text-red-500 p-2' onClick={()=>{
                            toggleMobileMenu();
                            setContentType('tv')
                        }} >Tv Shows
                        </Link>
                        <Link to='/history' className='block hover:text-red-500 p-2' onClick={toggleMobileMenu} >Search History
                        </Link>
                    </div>
            )
        }
    </header>
  )
}

export default Navbar