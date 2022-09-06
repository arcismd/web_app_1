import React from 'react'
import { Link } from 'react-router-dom';

import './index.scss'

import phone from '../../images/phone.png'

export const Post = ({
  id,
  isFullPost,
    title,
    number,
    mass,
    category,
    user,
    viewsCount,
    imageUrl
}) => {
  return (
    <div className='bijuterie-box'>
       {isFullPost ?  
       <div>
                <h1 className='full-h1'><span>&#8592; Înapoi </span>{title}</h1>
       <div className='full-flex-items'>
      <div className='item item-2'>
      {imageUrl && (
        <img
          className='full-post-img'
          src={`http://localhost:4444${imageUrl}`}
          alt={title}
        />
      )}
      </div>
      <div className='item item-1'>
      <div className='details'>
      <p>Denumire</p>
      {title}
      </div>
      <div className='details'>
      <p>Număr de referință</p>
      {number}
      </div>
      <div className='details'>
      <p>Greutate</p>
      {mass} grame
      </div>
      <div className='call'><h2 className='full-h2'>Pentru a obține detalii <span>sau a efectua o comandă</span></h2><a href="tel:+37369186608"><img src={phone} width={80} alt='Phone'/></a></div>
      </div>
      </div>
      </div> :
       <div>
       <div>
      {imageUrl && (
        <img
          className='post-img'
          src={`http://localhost:4444${imageUrl}`}
          alt={title}
        />
      )}
      </div>
        <div className='bijuterie-title'> 
            <Link
          to={`/posts/${id}`}><h1>{title}</h1>
          <h2>{number}</h2>
          </Link>
      </div>
      </div> }
    </div>
  )
}
