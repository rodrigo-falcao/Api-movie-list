import React from 'react'
import './index.scss'
import imgReact from '../../assets/images/react.png'
import imgAxios from '../../assets/images/axios.png'
import imgVite from '../../assets/images/vite.png'
import imgRouter from '../../assets/images/react-router.png'

const Footer = () => {
  return (
    <footer>
        <p className='FooterText'>Tecnologias Utilizadas</p>
        <ul>
            <li>
                <img className='imgFooter'
                src={imgReact} 
                alt="Imagem logo React" 
                />
            </li>
            <li>
                <img className='imgFooter'
                src={imgAxios} 
                alt="Imagem logo Axios" 
                />
            </li>
            <li>
                <img className='imgFooter'
                src={imgVite} 
                alt="Imagem logo Vite" 
                />
            </li>
            <li>
                <img className='imgFooter'
                src={imgRouter} 
                alt="Imagem logo React Rouder Dom" 
                />
            </li>
        </ul>
        <p className='FooterText FooterText--Name'>Desenvolvido por Rodrigo Falcão ®</p>
    </footer>
  )
}

export default Footer