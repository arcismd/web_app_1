import React from 'react'
import { Link } from 'react-router-dom'

export const CategoriesElements = (props) => {
  return (
    <>
    <div className='img-position'>
        <div className='img-effect'>
          <Link to={props.link}>
            <img src={props.image} alt={props.alt} />
          </Link>
            <h3><span className={props.span}>{props.name}</span></h3>
        </div>
    </div>
    </>
  )
}
