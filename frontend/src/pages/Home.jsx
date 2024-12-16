import React from 'react'
import Slider from '../components/Slider';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';

function Home() {
    const images = [
        img1,
        img2,
        img3,
        img4,
       
      ];
  return (
    <>
    
    <Slider images={images} interval={2000} />
    <div className='-mt-4'>
        <img src={img5} alt="" />
        <img src={img6} alt="" />
    </div>
    </>
  )
}

export default Home