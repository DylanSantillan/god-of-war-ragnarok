import React from 'react'
import videoLg from '../assets/hero-lg.mp4'
import videoMd from '../assets/hero-md.mp4'
import logo from '../assets/logo-gow.png'

const Hero = () => {
  return (
    <main className='main'>

          <video className='main__video--lg' src={videoLg} autoPlay loop playsInline></video>
          <video className='main__video--md' src={videoMd} autoPlay loop playsInline></video>
        <div className='wrapper-shadow'>
        </div>

        <div className='wrapper-presentation'>
          <div className='presentation'>
            <img className='presentation__logo' src={logo} alt="Logo de God Of War Ragnarok" />
            <p className='presentation__paragraph'>Desde el mármol y las columnas ornamentadas del Olimpo hasta los bosques, este es un nuevo reino, con su propia especie de criaturas, monstruos y dioses.</p>

            <div className='buttons'>
              <button className='buttons__presentation'>Comprar ahora</button>
              <button className='buttons__presentation--mas'>Ver más</button>
            </div>
          </div>

        </div>
    </main>
  )
}

export default Hero