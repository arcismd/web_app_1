import React from 'react'

import './aboutinfo.scss'
import bijutier from '../../../images/about-us/bijutier.webp'
import award from '../../../images/about-us/award.png'
import plier from '../../../images/about-us/plier.png'
import model from '../../../images/about-us/3d-model.png'

export const AboutInfo = () => {
  return (
    <div className='about-info'>
        <h1>Fiecare comandă realizată<span>
        cu dragoste pentru creație</span></h1>
        <div className='flex-about-info'>
            <div className='first'>
                <img src={bijutier} alt='Despre Noi' />
            </div>
            <div className='second'>
                <h2>Ne-am lansat pe piață în anul 2016, din pasiunea pentru frumos, mereu am tins spre perfecțiune, de aia vă vom bucura cu o gamă largă de bijuterii ca : inele de logodnă, cerceii, brățări, lanțuri, pandative, inele pentru bărbați și verighete executate sub design personal care nu le veți mai întâlni pe piață, vă bucurăm cu modele deosebite pentru maturi cât și pentru odraslele dumneavoastră.</h2>
            </div>
        </div>
        <h1>Atelierul nostru<span className='line'>se ocupă cu</span></h1>
        <div className='flex-3-elements'>
                <div className='block'>
                    <img src={award} />
                    <h2>Confecționarea bijuteriilor la comandă din aur și argint</h2>
                </div>
                <div className='block'>
                    <img src={plier} />
                    <h2>Servicii de reparații și restaurare pentru bijuterii</h2>
                </div>
                <div className='block'>
                    <img src={model} />
                    <h2>Modelarea și prototiparul bijuteriilor 3D</h2>
                </div>
            </div>
    </div>
  )
}
