import React from "react"
import "./Styles/App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Article } from "./Components/Article/Article";

// Um componente em classe, herda a class Component do React e retorna HTML dentro do método render.

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente.
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article />
        </section>
      </>
    )
  }
  
}

export default App;
