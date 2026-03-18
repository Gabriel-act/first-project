import React from "react"
import logoImg from "./assets/Images/logo.png"

// Um componente em classe, herda a class Component do React e retorna
// HTML dentro do método render.



class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso 
  // componente.
  render() {
    return (
      <div>
        <header>
          <nav id="navbar">
            <div className="nav-brand">
              <img src={logoImg} alt="" />
              <h1>Space Fligt News</h1>
            </div>

            <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/">Trending</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">About us</a></li>
            </ul>
          </nav>
        </header>
        
      </div>
    )
  }
  
}

export default App;
