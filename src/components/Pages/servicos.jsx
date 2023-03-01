import React from 'react';
import reactLogo from '../../assets/react.svg'
import { Titulo } from '../Titulo.style'
import {Text} from '../Text.style'
import { Card } from '../Card.style';
import { Linha } from '../Linha.style';
import { Image } from '../Image.style';
import { Subtitulo } from '../Subtitulo.style';
import {Feed} from '../Feed.style'
import '../../App.css'
import { CardFeed } from '../CardFeed.style';
import { Figure } from '../Figure.style';

export const Servicos = () => {
    return (
      <section>
        <div className="container-fluid">
  
        <Titulo>Serviços</Titulo>
        <Subtitulo>Saiba mais sobre nossos serviços</Subtitulo>

        <Feed>
        <div className="card-body row Feed">
                <CardFeed>
                      <Figure> 
                          <Image src="" alt="Fjords" width="200" height="200"/>
                      </Figure>

                      <a className="txt desc" target="_blank"><b>LIVE - CORDAS VIBRANTES</b></a>
                      <i>14/09/2021</i>
                      <figcaption><Text className="breakWord narrow">No dia 17 de Dezembro, nosso monitor Thulio
                                Muniz esteve apresentando sua Live "Cordas Vibrantes",
                                através da plataforma...</Text>
                      </figcaption>
                  </CardFeed>
  
                  <CardFeed>
                      <Figure>
                        <Image src="" alt="Fjords" width="220" height="170"/>
                      </Figure>
                      <a className="txt desc" target="_blank"><b>Visita a Escola Pais e Mestres</b></a>
                      <i> 04/11/2021</i>
                      <figcaption><Text className="breakWord narrow">No dia 04 de Novembro, o projeto Museu Itinerante esteve 
                        presente na escola Pais e Mestres na cidade de Salgueiro....</Text></figcaption>
                  </CardFeed>
      
                    <CardFeed>
                      <figure className="img">
                        <Image src=".\images\Feed\Post3.jpg"   alt="Fjords" width="220" height="170"/>
                      </figure>
                      <a className="txt desc" target="_blank"><b>Visita a EREM Salgueiro</b></a>                    
                      <i>04/10/2021</i>
                      <figcaption><Text className="breakWord narrow">No dia 17 de Dezembro, nosso monitor Thulio
                                Muniz esteve apresentando sua Live "Cordas Vibrantes",
                                através da plataforma...</Text></figcaption>
                    </CardFeed>
      
                    <CardFeed>
                        <Figure>
                          <Image src="#" alt="Fjords" width="200" height="180"/>
                        </Figure>
                        <a className="txt desc" target="_blank"><b>FAÇA VOCÊ MESMO: Como Construir um Pêndalo Eletroestático.</b></a>
                          <i>25/09/2022</i>
                        <figcaption><Text className="breakWord narrow">FAÇA VOCÊ MESMO é um projeto do museu de ciências Professor 
                          Antônio Carneiro, que movimenta conteúdos no nosso canal do...</Text></figcaption>
                  </CardFeed>
            </div>
        </Feed>
      </div>
      </section>
    );
  }