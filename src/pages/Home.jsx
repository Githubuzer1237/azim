
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Windows from '../components/Windowsm/Windows';
import Partners from '../components/Partners/Partners';
import LogoWall from '../components/LogoWall/LogoWall';
import Waves from '../components/Waves/Waves';
import LiquidChrome from '../components/LiquidChrome/LiquidChrome';
import Certificate from '../components/Certificate/Certificate';
import Stepper, { Step } from '../components/Stepper/Stepper';
import PhoneInput from 'react-phone-input-2';
import Advantages from '../components/Advantages/Advantages';


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

      <Windows />
      <Waves
  lineColor="#fff"
  backgroundColor="rgba(255, 255, 255, 0.2)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>

       <div className="line"></div>
       
      <Partners />
      
<Advantages />


<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LiquidChrome
    baseColor={[0.1, 0.1, 0.1]}
    speed={1}
    amplitude={0.2}
    interactive={true}
  />
</div>


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
