import React from "react";
import "../components/styles/Badge.css";
import confLogo from '../components/images/starweaver.png';

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>
        
        <div className="badge_section-name">
            <img className="badge_avatar"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHSKeMv1M_sQA/profile-displayphoto-shrink_200_200/0/1579720850585?e=1616630400&v=beta&t=nhrsorx-LpCsx_roSvjmfVQDhsTtvS4R4kgbnC2nELQ" 
            alt="Avatar"/>
        <div>
          <h1>Viviana <br /> Choque</h1>
        </div>
        </div>

        <div className="badge_section-info">
          <h3>Front-End Dev</h3>
          <div>@starweavergroup</div>
        </div>
        <div className="badge_footer">#StarweaverConf</div>
      </div>
    );
  }
}
export default Badge;
