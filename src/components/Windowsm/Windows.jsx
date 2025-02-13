// import React from 'react'
// import s from './Windows.module.scss';
// import Window from '../Window/Window';


// const Windows = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="line"></div>
//       <div className={s.windows}>

//   <Window positionx={700} positiony={400}  special="Azim Makhmov" windowtext="Учителя в айти академии самые лучшие!" h1="error 404" />
//   <Window positionx={200} positiony={300} special="Aleksandr Martin" windowtext="Спасибо академии за возможность получить столь ценные знания" />
//   <Window positionx={300} positiony={150} special="Bobur Ubayev" windowtext="Очень приятные цены на курсы"   />    {/* bgcolor="pink" */}
//   <Window positionx={600} positiony={200} special="Odil Khaharov" windowtext="МЕТОД ОБУЧЕНИЯ ПРОСТО ВАУ!!! "   />
   
  
//   </div>
//       </div>
//     </>
//   )
// }

// export default Windows


import React, { useState } from 'react';
import s from './Windows.module.scss';
import Window from '../Window/Window';

// Список комментариев
const comments = [
  { special: "Azim Makhmov", windowtext: "Обучение здесь — это мощный старт в мир IT! 🔥" },
  { special: "Aleksandr Martin", windowtext: "Спасибо академии за практический подход и топовых преподавателей! 🚀" },
  { special: "Bobur Ubayev", windowtext: "Лучшее место для освоения программирования! 💻" },
  { special: "Odil Khaharov", windowtext: "Метод обучения просто ВАУ! Все разложено по полочкам. 😍" },
  { special: "Mikhail Petrov", windowtext: "Максимум практики и полезной информации, рекомендую! ✅" },
  { special: "Amina Saidova", windowtext: "После этих курсов я уверенно чувствую себя в коде! 🎯" },
  { special: "Erkin Rasulov", windowtext: "Очень полезные материалы, даже новичок поймет! 📚" },
  { special: "Tatiana Ivanova", windowtext: "Теперь программирование — моя страсть, спасибо Академии! ❤️" },
  { special: "Rustam Kadyrov", windowtext: "Лучший курс! Все сложное объясняют простым языком. 👍" },
  { special: "Diana Karimova", windowtext: "Интенсивно, круто и невероятно интересно! 😃" },
  { special: "Sergey Volkov", windowtext: "Дают не просто знания, а реальный опыт работы! 💼" },
  { special: "Nargiza Tursunova", windowtext: "Не просто курсы, а полноценное IT-сообщество! 🌍" },
  { special: "Victor Smirnov", windowtext: "Наконец-то нашел курсы, где реально учат! 🎓" },
  { special: "Elena Maksimova", windowtext: "Моя первая работа в IT — благодаря этим курсам! 🏆" },
  { special: "Alisher Nurmatov", windowtext: "Думал, будет сложно, но здесь все на высшем уровне! 💡" }
];

const getRandomComment = () => {
  return comments[Math.floor(Math.random() * comments.length)];
};

const Windows = () => {
  const [windows, setWindows] = useState([
    { id: 1, positionx: 700, positiony: 400, ...getRandomComment() },
    { id: 2, positionx: 200, positiony: 300, ...getRandomComment() },
    { id: 3, positionx: 300, positiony: 150, ...getRandomComment() },
    { id: 4, positionx: 600, positiony: 200, ...getRandomComment() },
  ]);

  const handleReplaceWindow = (id) => {
    setWindows((prevWindows) =>
      prevWindows.map((win) =>
        win.id === id ? { ...win, ...getRandomComment() } : win
      )
    );
  };

  return (
    <div className="container">
      <div className="line"></div>
      <div className={s.windows}>
        {windows.map(({ id, positionx, positiony, special, windowtext }) => (
          <Window
            key={id}
            positionx={positionx}
            positiony={positiony}
            special={special}
            windowtext={windowtext}
            onClose={() => handleReplaceWindow(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Windows;
