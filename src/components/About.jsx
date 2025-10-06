import React from 'react';
import { aboutImg } from '../utils/image';


export default function About() {
 
  return(
    <section className='py-16 bg-dark '>
    <div className='bg-dark flex gap-15 items-center max-w-6xl mx-auto px-4 '>
      <div className=''>
        <img src={aboutImg} className='w-100 ' />
      </div>
      <div className='flex-1'>
        <h1 className='text-white px-5 dance-font text-7xl'>We are Feane</h1>
        <p className='text-white px-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. Al</p>
      <button className='mt-10 rounded-4xl px-10 py-2 bg-yellow text-white'>Read More</button>
      </div>
    </div>
    </section>
  );

}