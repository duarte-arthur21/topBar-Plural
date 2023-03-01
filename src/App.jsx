import React from 'react';
import { useState } from 'react'
import { MeuTemplate } from '../template/index'
import {Home, Contatos, Sobre} from './components/Pages/index'
import { Servicos } from './components/Pages/servicos';
import {Button} from './components/Button.style';
import { Wrapper } from './components/Wrapper.style';
import { Menu } from './components/TopBar.style';
import { NavBrand } from './components/NavBrand.style';

function App() {
  const [count, setCount] = useState(0)

  const [secaoAtual, setSecaoAtual] = useState('primeira');

  const handleSelecionaSecao = (secao) => {
    setSecaoAtual(secao);
  };

  const render = () => {
    if (secaoAtual === 'primeira')
      return <Home/>

    else if (secaoAtual === 'segunda')
      return <Sobre/>

    else if (secaoAtual === 'terceira')
      return <Contatos/>

    else if (secaoAtual === 'quarta')
      return <Servicos/>
  }

  return (
    <Wrapper>
      <MeuTemplate titulo="" rodape="">
            <Menu>
                <NavBrand>Top Bar | </NavBrand>
                <Button onClick={() => handleSelecionaSecao('primeira')} className={secaoAtual === 'primeira' ? 'ativo' : ''}>Home</Button>
                <Button onClick={() => handleSelecionaSecao('segunda')} className={secaoAtual === 'segunda' ? 'ativo' : ''}>Sobre</Button>
                <Button onClick={() => handleSelecionaSecao('terceira')} className={secaoAtual === 'terceira' ? 'ativo' : ''}>Contatos</Button>
                <Button onClick={() => handleSelecionaSecao('quarta')} className={secaoAtual === 'quarta' ? 'ativo' : ''}>Serviços</Button>
            </Menu>
            
       {render() }
      </MeuTemplate>
    </Wrapper>


  )
}

export default App
