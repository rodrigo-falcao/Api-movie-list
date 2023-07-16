import React from 'react'
import './index.scss'


const Header = (props) => {
    function handleSubmit(event) {
        event.preventDefault() //para que ele não recarregue a página no submit
        const searchValue = event.target[0].value //pegar o valor e trazer até o componente
        props.onSubmit(searchValue); //passando o valor e levando ele para outro lugar
        event.target[0].value = "";
        
    }

    return (
        <header>
            <div className='Header'>
                <a href='/' className='Header__Link'>
                Inicio 
                </a>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Pesquisa por filmes' />
                </form>
            </div>
        </header>
)
}

export default Header