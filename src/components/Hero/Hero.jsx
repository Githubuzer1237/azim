
import { useRef } from 'react';
import s from './Hero.module.scss';

const Hero = () => {
 
  const scrollToConnectSection = () => {
    const section = document.getElementById("help");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
 


    <div className={s.container}>

      <div className={s.wrapper}>
        <img className={s.anal} src="/itacademylogo.svg" alt="" />
        
        <div className={s.text}>
          <p>
            IT курсы в Ташкенте, нам доверяют уже больше 5 лет, тут вас ждет 
           дружный
            коллектив, а также лучшие курсы программирования в Ташкенте.
          </p>
          <button onClick={scrollToConnectSection} style={{}}
              className={s.playful_btn}
            >
              получить консультацию
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
