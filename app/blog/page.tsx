'use client'
import React from 'react'
import useIsUsingMobile from '../hooks/useMobile';

function blog() {
    const isMobile = useIsUsingMobile();
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[#DCAFB2]">
      <img
        src="https://i.imgur.com/bgReeWa.jpeg"
        className={isMobile ? 'absolute top-0 left-0 w-full h-full object-contain scale-220' : 'absolute top-0 left-0 w-full h-full object-contain scale-[110%]'}
        alt="Background"
      />

    </section>
  )
}

export default blog