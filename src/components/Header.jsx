import React from 'react'
import playstation from '../assets/playstation-logo.svg'
import menu from '../assets/menu.png'

const Header = () => {
  return (
    <header className='header'>
            <img className='header__menu' src={menu} alt="" />
            <img className='header__logo' src={playstation} alt="Logo de PlayStation" />
        <nav className='nav'>
            <ul className='ul'>
                <li className='ul__li'><a href="#">Hardware</a></li>
                <li className='ul__li'><a href="#">Servicios</a></li>
                <li className='ul__li'><a href="#">Noticias</a></li>
                <li className='ul__li'><a href="#">Tienda</a></li>
            </ul>
        </nav> 
            <button className='header__btn-compra'>Comprar ahora</button>
    </header>
  )
}

export default Header
