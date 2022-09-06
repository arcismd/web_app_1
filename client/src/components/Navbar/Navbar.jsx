import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../images/navbar/logo.png'
import menu from '../../images/navbar/menu.png'

import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";

import './navbar.scss'

export const Navbar = () => {

    const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

    function burgerMenu() {
        const x = document.getElementById("burger-menu")
        if (x.style.display === "flex") {
          x.style.display = "none"
        } else {
          x.style.display = "flex"
        }
      }

      let opened = false

      function animBurger() {
        const x = document.getElementById('burger-anim')
        if (opened === false) {
            x.style.transform = 'rotateX(180deg)'
            opened = true
        } else if (opened === true) {
            x.style.transform = 'rotateX(0deg)'
            opened = false
        }
      }

      const navLinkStyles = ({ isActive }) => {
        return {
            borderBottom: isActive ? '1px dashed rgb(94, 63, 36)' : 'none',
        }
      }

      const navMobLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
      }

      const linkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
      }

      const [open, setOpen] = React.useState(false);

    return (
        <>
           <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <div className='call-me'>
            Introdu numărul de telefon
            <input 
            placeholder='069186608'
            />
            <button onClick={() => setOpen(false)}>Trimite</button>
          </div>
        </div>
      </div>
        <div className='nav-bg'>
            <div className='navbar'>

            <div className='burger-menu' onClick={burgerMenu}>
                    <div onClick={animBurger} 
                    className='burger-menu-animation' id='burger-anim'><img src={menu} width={32} alt='Menu'/></div>
                </div>

                <div className='navbar-grid-1'>
                <NavLink style={navLinkStyles} className='left-menu' to={'our-works'}>
                    <span className='hover-link'>Lucrările noastre</span>
                </NavLink>
                <NavLink style={navLinkStyles} className='left-menu' to={'about-us'}>
                    <span className='hover-link'>Despre noi</span>
                </NavLink>
                <NavLink style={navLinkStyles} className='left-menu' to={'contacts'}>
                    <span className='hover-link'>Contacte</span>
                </NavLink>
                </div>

                <div className='navbar-grid-2'>
                <NavLink to={'/'}>
                    <img src={logo} alt='Logo'/>
                </NavLink>
                </div>

                <div className='navbar-grid-3'>
                    <div className='flex-element-3'>
                        <a href="tel:+37369186608"><span className='prefix-tel'>(+373)</span> 069 186 608</a>
                        <span className='right-menu' onClick={() => setOpen(true)}><span className='hover-link'>Solicitați un apel</span></span>
                    </div>
                </div>
            </div>
            <div className='navbar-mobile-1' id='burger-menu'>
                <NavLink style={navMobLinkStyles} className='left-menu' to={'our-works'}>
                    <span className='hover-link'>Lucrările noastre</span>
                </NavLink>
                <NavLink style={navMobLinkStyles} className='left-menu' to={'about-us'}>
                    <span className='hover-link'>Despre noi</span>
                </NavLink>
                <NavLink style={navMobLinkStyles} className='left-menu' to={'contacts'}>
                    <span className='hover-link'>Contacte</span>
                </NavLink>
                </div>
            <div className='sub-nav-menu'>
                <hr></hr>
                    <div className='flex-menu-items'>
                    {isAuth ? (
							<NavLink to={"admin"}>
								   <span className='hover-link'><strong style={{color: "red"}}>AP</strong></span>
							</NavLink>
						) : (
							<div className='ap-block'></div>
						)}
                    <NavLink style={linkStyles} to={'inele'}>
                        <span className='hover-link'>Inele</span>
                    </NavLink>
                    <span className='hover-link'>Verighete</span>
                    <span className='hover-link'>Cercei</span>
                    <span className='hover-link'>Lanțuri</span>
                    <span className='hover-link'>Brățări</span>
                    <span className='hover-link'>Cruciulițe</span>
                    </div>
                <hr></hr>
            </div>
        </div>
        </>
    )
}

