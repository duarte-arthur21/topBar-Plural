import React from 'react';

const MeuTemplate = (props) => {
    return (
      <div>
        <header>
          <h1>{props.titulo}</h1>
        </header>
        <main>
          {props.children}
        </main>
        <footer>
          <p>{props.rodape}</p>
        </footer>
      </div>
    );
  }

  export { MeuTemplate };