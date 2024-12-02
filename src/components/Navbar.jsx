import { NavLink } from 'react-router-dom';
import { links } from '../data';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';



const Navbar = () => {
  let [fade, setFade] = useState('end')
  const handleClick = (() => {
    if (fade === 'start') setFade('end')
    else setFade('start')
  });
  return (
    <nav className='container nav'>
      <div className='nav__logo'><a href="main"><h2 className='nav__title'>YoungFit!</h2></a></div>
      <div className="mobile">
        <ul className='nav__links'>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index} className={'content ' + fade}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              )
            })
          }
          <li className='mobile'>
            <div className='hamburger'>
              <h2><FaBars className='nav__toggle' onClick={() => handleClick()} /></h2>
            </div>
          </li>
        </ul>
      </div>
      <div className="desktop">
        <ul className='nav__links'>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index} className={'content ' + fade}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              )
            })
          }
          <li className='mobile'>
            <div className='hamburger'>
              <h2><FaBars className='nav__toggle' onClick={() => handleClick()} /></h2>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
