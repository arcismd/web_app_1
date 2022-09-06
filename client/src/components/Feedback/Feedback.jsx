import React from 'react'

import userlogo from '../../images/mainpage/user.jpg'
import './feedback.scss'

export const Feedback = () => {
  return (
    <>
        <div className='feedback-section'>
            <h1>Feedback din partea clienților noștri</h1>
            <div className='feedback'>
                <div className='flex-left'>
                    <h2>Recomand cu multă încredere!</h2>  
                    <div className='user'>
                        <img src={userlogo} width={110} height={110} alt='Feddback User'/> 
                        <p><span>Maricica Ceban</span> <span>or. Chișinău</span></p> 
                    </div>   
                    <button 
                        onClick={ () => 
                        window.open("https://www.facebook.com/", "_blank")}>
                            Mai multe
                    </button>     
                </div>   
                    <div className='descr'>
                    Recomand cu multa incredere. Lucrarile sint facute calitative si dau dovada de profesionalizm. Am apelat si voi mai apela cu siguranta. Multumesc frumos si succese mari sa aveti. 👍🤗👍
                </div>
                <button 
                    className='button-mobile'
                        onClick={ () => 
                        window.open("https://www.facebook.com/", "_blank")}>
                            Mai multe
                    </button>    
            </div>
        </div>
    </>
  )
}
