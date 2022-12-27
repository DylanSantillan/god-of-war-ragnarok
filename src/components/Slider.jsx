import React from 'react'
import separador from '../assets/separador.svg'
import sliderAtreus from '../assets/slider-atreus.jpg'
import sliderBrokSindri from '../assets/slider-brok-sindri.jpg'
import sliderFreya from '../assets/slider-freya.jpg'
import sliderKratos from '../assets/slider-kratos.jpg'
import sliderMimir from '../assets/slider-mimir.jpg'
import sliderThor from '../assets/slider-thor.jpg'
import sliderTyr from '../assets/slider-tyr.jpg'

const Slider = () => {
  return (
    <section className='conteiner-slider'>
        <img className='conteiner-slider__separador' src={separador} alt="separador de seccion" />
        <h2 className='conteiner-slider__title'>Los mejores héroes de los nueve reinos, luchando por un futuro en el que creen</h2>
        <div className='slider'>
            <div className='conteiner-img'>
              <img className='conteiner-img__hero--atreus' src={sliderAtreus} alt="Atreus" />  
            </div>
            <div className='conteiner-img'>
              <img className='conteiner-img__hero--brock-sindri' src={sliderBrokSindri} alt="Brok y Sindri" />  
            </div>
            <div className='conteiner-img'>
              <img className='conteiner-img__hero--freya' src={sliderFreya} alt="Freya" />  
            </div>
            <div className='conteiner-img'>
              <img className='conteiner-img__hero--kratos' src={sliderKratos} alt="Kratos" />  
            </div>
            <div className='conteiner-img'>
              <img className='conteiner-img__hero--mimir' src={sliderMimir} alt="Mimir" />  
            </div>
            <div className='conteiner-img'>
              <img className='conteiner-img__hero--thor' src={sliderThor} alt="Thor" />  
            </div>
            <div className='conteiner-img'>
              <img className='conteiner-img__hero--tyr' src={sliderTyr} alt="Tyr" />  
            </div>
        </div>
    </section>
  )
}

export default Slider
