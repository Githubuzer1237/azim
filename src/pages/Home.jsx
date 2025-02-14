
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Windows from '../components/Windowsm/Windows';
import Partners from '../components/Partners/Partners';
import LogoWall from '../components/LogoWall/LogoWall';
import Certificate from '../components/Certificate/Certificate';
import Stepper, { Step } from '../components/Stepper/Stepper';
import PhoneInput from 'react-phone-input-2';
import Advantages from '../components/Advantages/Advantages';
import Squares from '../components/Squares/Squares';
import CircularGallery from '../components/CircularGallery/CircularGallery';


const Home = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('Сергели');

  const logoImgs = [
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" }
  ];









  const sendToTelegram = () => {
    const botToken = '7651889112:AAHsQV2wx-ja5Vn5VZU5GLtw2HHQxSW34EE';
    const chatId = '-4698727851';

    const message = `Новая заявка:  
    📍 Филиал: ${branch}  
    👤 Имя: ${name}  
    📞 Телефон: ${phone}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
  };



  return (
    <>
      <Hero />

      {/* <div style={{height: '300px', width: '100%', position: 'relative'}}>
  <LogoWall
    items={logoImgs}
    direction='horizontal'
    pauseOnHover={true}
    size='clamp(8rem, 1rem + 20vmin, 25rem)'
    duration='60s'
    bgColor='#060606'
    bgAccentColor='#111111'
  />  
</div> */}
<div style={{ height: '550px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
      <Windows />



  
<Squares 
speed={0.5} 
squareSize={40}
direction='diagonal'
borderColor=' rgb(0, 0, 0)'
hoverFillColor='rgb(64, 64, 64)'
/>


       <div className="line"></div>
       
      <Partners />
      
<Advantages />





<Certificate/>





<div id="help">


<Stepper 
        initialStep={1}
        onStepChange={(step) => console.log(step)}
        onFinalStepCompleted={sendToTelegram}
        backButtonText="Назад"
        nextButtonText="Дальше"
      >
        <Step>
          <h2>Давайте пройдем консультацию!</h2>
          <p>Нажмите на кнопку, чтобы начать!</p>
        </Step>
        <Step>
          <h2>Какой филиал вам удобнее?</h2>
          <select 
  className="stepper__input"
  value={branch} 
  onChange={(e) => setBranch(e.target.value)}
>
  <option value="" disabled hidden>Выберите филиал</option>  
  <option value="Сергели">Сергели</option>
  <option value="Главпочтампт">Главпочтампт</option>
</select>
        </Step>
        <Step>
          <h2>Как вас зовут?</h2>
          <input className="stepper__input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" />
        </Step>
        <Step>
          <h2>Ваш номер телефона</h2>
          <PhoneInput country="uz" value={phone} onChange={setPhone} />
        </Step>
        <Step>
          <h2>Последний шаг</h2>
          <p>Нажмите на кнопку, чтобы отправить заявку!</p>
        </Step>
      </Stepper>

</div>








    </>
  );
};

export default Home;
