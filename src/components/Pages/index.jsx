import React from 'react';
import reactLogo from '../../assets/react.svg'
import { Titulo } from '../Titulo.style'
import {Text} from '../Text.style'
import { Card } from '../Card.style';
import { Linha } from '../Linha.style';
import { Image } from '../Image.style';
import { Subtitulo } from '../Subtitulo.style';
import { Link } from '../Link.style';
import '../../App.css'

const Home = () => {
  return (
    <section>
      <Titulo>Bem Vindo</Titulo>
          <Text>Esse é o desafio do TopBar com Components Styles</Text>

        <Text>O projeto em questão é uma aplicação Front-end simples construída durante o decorrer da formação da 
          Plural Systens.</Text>

        <Text>A aplicação consiste em uma TopBar implementada com styled-componnets onde o usario pode realizar a navegação entre telas.</Text>

        <Linha/>
        <Titulo>Tecnologias Utilizadas</Titulo>

      <Card>
              <Image src="/vite.svg" alt="Vite logo" />

              <Image src="/JavaScript.jpeg" alt="JavaScript" />
            
              <Image src={reactLogo} alt="React logo" />

              <Image src='/Nodejs.png' alt='Node JS'/>
      </Card>

      <Linha/>
        <Titulo>Realização</Titulo>
        
        <Card>
            <Image src='/Plural.jpg' alt='Plural'/>
        </Card>

    </section>

    
  )
}


const Sobre = () => {
  return (
    <section>
      <Titulo>Sobre Mim</Titulo>

      <Card>
        <img src="/perfil.jpeg" className="perfil" alt="Vite logo" />
        <Linha></Linha>
      </Card>

      <Card>
        <h3 className="title"> Olá eu sou o Arthur Duarte! 👋 </h3>

        <Text>
          Cursando sexto semestre de Tecnologia em Sistemas para Internet, Técnico de Informática,🧑‍💻!
        </Text>

        <Text>
          Tenho como objetivo entrar no mercado de trabalho como desenvolvedor Front-end
        </Text>
      </Card>

      
    </section>
  );
}

const Contatos = () => {
  return (
    <section>
      <Titulo>Contatos</Titulo>
      <Subtitulo>Sigam Nossas redes Sociais</Subtitulo>

      <Linha/>

      <div>
        <div className='row Feed'>

          <div id="Contatos" className='mb-3'>
            <img src='/Plural.jpg' alt='Plural'/>
          </div>

            <div id="Contatos" className='mb-3'>
                <h2>Plural Systems</h2>
                <p>R. Sergipe, 1440 - Savassi, Belo Horizonte - MG, 30130-174</p>
                <h2>Telefone</h2>
                <p> (31) 99162-4391</p>
                <h2>E-mail</h2>
                <p>pluralsystems@email.page</p>
                <h2>Siga-nos</h2>
                <Link href="https://www.instagram.com/pluralsystems/" alt="Instagram">Instagram</Link>
            </div>
          </div>
      </div>
    </section>
  );
}

export {Home, Contatos, Sobre}
