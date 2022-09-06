import React from 'react'

import './aboutus.scss'
import rings from '../../images/mainpage/rings.webp'


export const AboutUs = () => {
  return (
    <>
        <div className='about-us-section'>
            <div className='keka'>
            <h1>Despre <span>Noi</span></h1>
                <div className='info-about-us'>
                    <h1>Confecționăm bijuterii la comandă din <span className='gold'>aur</span> și argint.</h1>
                </div>
                <h3>Comanda durează <span span className='last'>7-10 zile</span> lucrătoare!</h3>
                <div className='card-info'>
                    <div className='card'>
                        <p><strong>5 ani</strong></p>
                        <p>productivi</p>
                        <p>de muncă pe piață</p>
                    </div>
                    <div className='card'>
                        <p><strong>8 ani</strong></p>
                        <p>experiență medie</p>
                        <p>a angajaților</p>
                    </div>
                    <div className='card'>
                        <p><strong>450+</strong></p>
                        <p>bijuterii</p>
                        <p>confecționate până acum</p>
                    </div>
                </div>
                <h3>Fiecare comandă realizată cu <span className='love-creation'>dragoste</span> pentru <span className='love-creation'>creație</span>.</h3>
                <h1 className='h1-bottom'>Savurează calitatea! Împreună cu noi.</h1>
                <div className='call-small-section'>
                    <div className='flex-call-info'>
                        <div className='second-flex'>
                                <div className='flex'>
                                    <input placeholder='Numărul de telefon' />                         
                                    <button>Sună-mă înapoi</button>
                                </div>
                            <p>Află <strong>costul</strong> oricărui serviciu, lasă-ți numărul de telefon!</p>
                        </div>
                        <img className='img-mobile' src={rings} width={130} alt='Rings'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
