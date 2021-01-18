import React from "react";
import confLogo from "../components/images/starweaver.png"

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>

        <div>
          <h1>Viviana Choque</h1>
        </div>

        <div>
          <p>Front-End Dev</p>
          <p>@anytwitter</p>
        </div>
      </div>
    );
  }
}
export default Badge;
