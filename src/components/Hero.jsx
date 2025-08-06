import React from 'react';
import hero1Img from '../assets/hero1.png';
import hero2Img from '../assets/hero2.jpg';

const Hero = () => {
  return (
    <div>
        <div className='bg-teal-50 text-center p-4'>
            <h1 className='text-6xl font-bold'>iPhone</h1>
            <h3 className='mt-2 font-bold text-3xl'>Meet the iphone 16 family</h3>
            <button className='p-2 rounded-xl bg-sky-500 text-center m-5 border hover:border-blue-400 hover:bg-white font-bold'>Learn More</button>
            <button className='p-2 rounded-xl bg-white text-center border border-blue-400 hover:bg-blue-400 font-bold'>Shop Now</button>
            <img className='mx-auto h-96' src={hero1Img} />
        </div>

        <div className='mt-5 bg-blue-100 p-4 text-center'>
            <h1 className='text-6xl font-bold'>MacBook Air M3</h1>
            <h3 className='mt-2 font-bold text-3xl'>Light. Powerful. All-day learning</h3>
            <h3 className='mt-2 font-bold text-2xl'>Learning has never been this light</h3>
            <button className='p-2 rounded-xl bg-sky-500 text-center m-5 border hover:border-blue-400 hover:bg-white font-bold'>Learn More</button>
            <button className='p-2 rounded-xl bg-white text-center border border-blue-400 hover:bg-blue-400 font-bold'>Shop Now</button>
            <img className='mx-auto h-96' src={hero2Img} />

        </div>
      
    </div>
  )
}

export default Hero
