import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import Menubtn from './Menubtn'
import Socials from './Socials'
import Navmobile from './Navmobile'
const Header = () => {
  const [active,setactive] = useState(false)
  useEffect(()=>{
    const handleScroll = () => {
      setactive(window.scrollY>100)
    }
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[])
  return (
    <header className={`fixed z-50 w-full transition-all ${
    active?'bg-[#030315]  py-6':'bg-transparent py-8'}`}>
      <div className="container mx-auto flex flex-col xl:flex-row items-center
      justify-between">
      <Link
      href={'#'}
      className='relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0'
      >
        <Image
          src="/assets/header/logo.svg"
          alt="logo"
          fill
          className="object-contain"
        />
      </Link>
      <Nav containerStyles="hidden xl:flex items-center gap-x-8"/>
      <Navmobile/>
      <div className="absolute right-7  top-9 z-10 xl:hidden">
        <Menubtn/>
      </div>
      <Socials containerStyle="flex text-[24px] gap-x-4"
      iconStyles="hover:text-accent transition-all"/>
      </div>
    </header>
  )
}

export default Header
