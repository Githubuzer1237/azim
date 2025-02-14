
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const toggleBurger = () => {
    setActive(!active);
  };

  const closeBurger = () => {
    setActive(false);
  };

  const scrollToConnectSection = () => {
    const section = document.getElementById("footer");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(false);
    }
  };


  const handleNavigate = (sectionId) => {
    navigate(`/about#${sectionId}`);
    setActive(false);

  };


  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to={'/'}>
          <img src="/itacademylogo.svg" alt="Logo" className={s.logo} />
        </Link>

        <div className={`${s.links} ${active ? s.active : ''}`}>
          <Link onClick={closeBurger} to={'/'}>
            главная
          </Link>
          <Link onClick={closeBurger} to={'/freelesson'}>
            Бесплатный урок
          </Link>
          <Link onClick={closeBurger} to={'/studio'}>
            О нас
          </Link>
          <Link onClick={closeBurger} className={s.dropdown} to={'/courses'}>
                Курсы

                <div>
                  <Link onClick={() => handleNavigate("web")} to={'/courses#web'}>веб программирование</Link>
                  <Link onClick={() => handleNavigate("graf")} to={'/courses#graf'}>Графический дизайн</Link>
                  <Link onClick={() => handleNavigate("node")} to={'/courses#node'}>Node JS</Link>
                  <Link onClick={() => handleNavigate("scratch")} to={'/courses#scratch'}>Scratch</Link>
                </div>
              </Link>
          <Link onClick={closeBurger} className={s.dropdown} to={'/branches'}>
                Филиалы

                <div>
                  <Link onClick={closeBurger} to={'/branches'}>Главпочтампт</Link>
                  <Link onClick={closeBurger} to={'/branches'}>Сергели</Link>
                </div>
              </Link>
 
          <a style={{cursor: "pointer"}}  onClick={scrollToConnectSection}>Контакты</a>
   
          
        </div>

        <div
          onClick={toggleBurger}
          className={`${s.burger} ${active ? s.active : ''}`}
        >
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
