import React from 'react'
import SpotlightCard from '../SpotlightCard/SpotlightCard'
import s from './Advantages.module.scss'
const Advantages = () => {
  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: "70px", fontFamily: "Soyuz Grotesk", fontSize: "45px"}}>Почему именно мы?</h1>
    <div className={s.spotlight__cards}>
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
 <h2 className={s.item_title}>Профессиональные преподаватели</h2>
 <p className={s.item_text}>Мы работаем с опытными и квалифицированными преподавателями, которые разделяют свой опыт и знания, помогая вам достичь успех. </p>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h2 className={s.item_title}>Актуальные программы обучения</h2>
    <p className={s.item_text}>Наши курсы всегда соответствуют последним трендам и технологиям в индустрии, гарантируя вам актуальные навыки. </p>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h2 className={s.item_title}>Практический опыт</h2>
    <p className={s.item_text}>Мы ставим акцент на практике. Программа построена так, что вы не только постоянно пополняете портфолио самостоятельными кейсами, но и работете в командах. </p>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h2 className={s.item_title}>Коворкинг
    зона</h2>
    <p className={s.item_text}>Все наши ученики получают безлимитный доступ к коворкинг зоне, где вы можете закреплять пройденный материал, и практиковаться в собственных проектах</p>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h2 className={s.item_title}>Более 4 лет доверия</h2>
    <p className={s.item_text}>Уже более 4 лет нам доверяют жители Ташкента как для получения будущих профессий, так и IT навыков для будущего
    </p>
</SpotlightCard>

    </div>
    </>
  )
}

export default Advantages