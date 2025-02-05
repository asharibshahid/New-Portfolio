'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroAbout = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 } });

    // Hero Section Animation
    tl.from(heroRef.current, { opacity: 0, y: -50 })
      .from(textRef.current, { opacity: 0, x: -50 }, '-=1')
      .from(imgRef.current, { opacity: 0, x: 50, scale: 0.9 }, '-=1');

    // About Section Scroll Animation
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className='relative flex flex-col md:flex-row items-center justify-between h-screen px-10 bg-gradient-to-br from-indigo-900 to-purple-700 text-white overflow-hidden'
      >
        <div ref={textRef} className='text-left max-w-xl'>
          <h1 className='text-5xl font-extrabold leading-tight'>Hello, I'm  Asharib</h1>
          <div className='  text-white text-center shadow-lg rounded-lg p-4 mt-4'>
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI/UX Designer', 'Frontend Developer', 'Prompt Engineer' ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className='mt-4 text-lg text-gray-200'>A passionate developer crafting stunning web experiences.</p>
          <Link href="/components/contact"> 
          <button className='mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-lg transition-all'>
            Contact Me
          </button>
          </Link>
          <Link href="/components/services"> 
          <button className='mt-6 px-6 py-3 bg-slate-500  hover:bg-yellow-500 text-black text-lg ml-3 font-semibold rounded-lg shadow-lg transition-all'>
            Srevices
          </button>
          </Link>
        </div>
        <div ref={imgRef} className='w-64 h-64 bg-white rounded-full shadow-lg overflow-hidden'>
          <img src='/hero-image.png' alt='Profile' className='w-full h-full object-cover' />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className='py-20 bg-gray-900 text-white text-center'>
        <h2 className='text-4xl font-bold mb-6 text-cyan-400'>About Me</h2>
        <p className='max-w-3xl mx-auto text-lg text-gray-300'>
          I specialize in creating modern, high-performance websites and web applications using the latest technologies like Next.js, React, and GSAP for smooth animations.
          </p>
          <br />
         <div>
         <h2 className='text-emerald-400'>Info:</h2>  <ul>
            <li>Age : 16</li>
            <li>Edu : Matric</li>
            <li>Hafiz Al Quran</li>
            <li className='text-fuchsia-500'>Giaic Q3</li>
          </ul>
          </div>
       
      </section>
    </>
  );
};

export default HeroAbout;
