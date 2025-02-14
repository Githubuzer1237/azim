

import React, { useEffect, useState } from 'react';
import WebCourse from '../components/WebCourse/WebCourse';
import Grafic from '../components/Grafic/Grafic';
import ScratchSection from '../components/ScratchSection/ScratchSection';
import LogoWall from '../components/LogoWall/LogoWall';
import LetterGlitch from '../components/LetterGlitch/LetterGlitch';
import { useLocation } from 'react-router-dom';

const Courses = () => {
  const [prices, setPrices] = useState({});
  const location = useLocation();
  useEffect(() => {
    fetch('http://localhost:3001/prices')
      .then(response => response.json())
      .then(data => {
        console.log('Полученные цены:', data); 
        setPrices(data); 
      });
  }, []);




  const logoImgs = [
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" }
  ];




  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
     <div id='web'>
     <WebCourse  price={prices.WebCourse} />
     </div>
     
    <div id='graf'>
    <Grafic price={prices.Grafic} />
    </div>


     <div style={{height: '300px', width: '100%', position: 'relative'}}>
  <LogoWall
    items={logoImgs}
    direction='horizontal'
    pauseOnHover={true}
    size='clamp(8rem, 1rem + 20vmin, 25rem)'
    duration='60s'
    bgColor='#060606'
    bgAccentColor='#111111'
  />  
</div>


<div id='scratch'>
<ScratchSection price={prices.ScratchSection} />
</div>         
         
<div id='node'>
<LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
  price={prices.NodeJs}
/>

</div>




    </>
  );
};

export default Courses;
