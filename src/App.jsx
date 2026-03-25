import React from "react"
import "./Styles/App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Article } from "./Components/Article/Article";

import nasaImg from "./assets/Images/nasa.jpg"
import img1 from "./assets/Images/img1.png"
import img2 from "./assets/Images/img2.webp"

// Um componente em classe, herda a class Component do React e retorna HTML dentro do método render.

// Compontente funcional é uma função que retorna HTML

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente.
  render() {
    return (
      <>
        <Navbar />
      
        <section id="articles">
          <Article 
          title="Desing Dashbords"
          provider="NASA"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta suscipit culpa sit delectus dolorem architecto maxime illum! Dolores unde, aut fuga quia aliquam, nobis sint aspernatur, necessitatibus omnis maiores ab!"
          thumbnail={nasaImg}
          />

          <Article 
          title="Vibrant Portraits of 2020"
          provider="SpaceNews"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta suscipit culpa sit delectus dolorem architecto maxime illum! Dolores unde, aut fuga quia aliquam, nobis sint aspernatur, necessitatibus omnis maiores ab!"
          thumbnail={img1}
          />
          
          <Article 
          title="36 Days of Malayalam type"
          provider="SpecifyNews"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta suscipit culpa sit delectus dolorem architecto maxime illum! Dolores unde, aut fuga quia aliquam, nobis sint aspernatur, necessitatibus omnis maiores ab!"
          thumbnail={img2}
          />

          <Article 
          title="Desing Dashbords"
          provider="NASA"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta suscipit culpa sit delectus dolorem architecto maxime illum! Dolores unde, aut fuga quia aliquam, nobis sint aspernatur, necessitatibus omnis maiores ab!"
          thumbnail={nasaImg}
          />
        </section>
      </>
    )
  }
  
}

export default App;
