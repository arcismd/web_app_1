import React from 'react'
import { CategoriesElements } from './CategoriesElements'

import inele from '../../images/mainpage/second-section-categories/inele.jpg'
import lanturi from '../../images/mainpage/second-section-categories/lanturi.jpg'
import cercei from '../../images/mainpage/second-section-categories/cercei.jpg'
import bratari from '../../images/mainpage/second-section-categories/bratari.jpg'
import verighete from '../../images/mainpage/second-section-categories/verighete.jpg'
import csm from '../../images/mainpage/second-section-categories/csm.jpg'
import './ourworks.scss'

export const OurWorks = () => {

  return (
    <>
    <div className='our-works-section'>
      <h1>Prezentarea <span>Lucrărilor Noastre</span></h1>
      <h3>În decursul anilor, ne-am dezvoltat o deosebită pasiune pentru frumos și perfect, considerând că <span>luxul și eleganța bijuteriilor create din dragoste</span> poate satisface cele mai exigente gusturi.</h3>
    </div>
    <div className='our-works-section-categories'>
      <CategoriesElements 
      image={inele} 
      alt='Inele' 
      name='Inele'
      link='inele'
      />
      <CategoriesElements 
      image={lanturi}
      alt='Lanțuri' 
      name='Lanțuri personalizate'
      link='inele'
      />
      <CategoriesElements 
      image={cercei}
      alt='Cercei' 
      name='Cercei'
      span='element-color'
      link='inele'
      />

      <CategoriesElements 
      image={bratari}
      alt='Brățări' 
      name='Brățări'
      span='element-color'
      link='inele'
      />
      <CategoriesElements 
      image={verighete}
      alt='Verighete' 
      name='Verighete'
      link='inele'
      />
      <CategoriesElements 
      image={csm}
      alt='Cruciulițe și medalioane' 
      name='Cruciulițe și medalioane'
      span='element-color'
      link='inele'
      />  
    </div>           
    </>
  )
}

