import React from 'react'
import { Navigate } from 'react-router-dom'
import { selectIsAuth } from '../../redux/slices/auth'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './adminpanel.scss'

export const AdminPage = () => {

    const isAuth = useSelector(selectIsAuth)

    if (!isAuth) {
        return <Navigate to={'/admin'} />
    }

  return (
    <>
    <div className='ap-wrapper'>
        <h1>Panel<span>Administrator</span></h1>

        <Link to={"/add"}>
				add
		</Link>
    </div>
    </>
  )
}
