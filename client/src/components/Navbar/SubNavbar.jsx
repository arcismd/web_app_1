import React from 'react'
import './navbar.scss'

export const SubNavbar = (props) => {

  const [quote, setQuote] = React.useState("quote")

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setQuote("quote")
    } else if (window.scrollY > 70) {
      return setQuote("quote-2")
    } 
  }
  
  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className={props.headerImg}>
    <div className={props.headerHero}>
            <h1><span className={quote}>{props.headerTitle}</span></h1>
    </div>
    </div>
  )
}


