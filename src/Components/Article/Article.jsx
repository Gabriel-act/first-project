import React from "react";
import "./style.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src="" alt="" />

        <div className="article-infos">
          <h2>Desing Dashboards</h2>
          <h3>NASA</h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta suscipit culpa sit delectus dolorem architecto maxime illum! Dolores unde, aut fuga quia aliquam, nobis sint aspernatur, necessitatibus omnis maiores ab!
          </p>
        </div>
      </article>
    )
  }
}