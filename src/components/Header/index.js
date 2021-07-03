import React from "react";

import Logo from "../../assets/styles/imgs/ifpb.png";
import Avin from "../../assets/styles/imgs/avin.png";
import StylesHeader from "../Header/styles.css";
import {PrimeReactCSS} from "primereact/resources/themes/fluent-light/theme.css";
import {PrimeReactMinCsss} from "primereact/resources/primereact.min.css";
import {Icons} from "primeicons/primeicons.css";
import { Toolbar } from "primereact/toolbar";
import {Button} from "primereact/button";

function Header() {
    
    const leftContents = (
        <React.Fragment>
            <Button id="separador">
            <i className="pi pi-bars p-toolbar-separator p-mr-2" style={{"fontSize":"3em"}}/>
            </Button>

            <Button id="ajuda">
            <i id="ajuda" className="pi pi pi-question-circle" style={{"fontSize":"3em"}}/>
            </Button>
            
            <Button id="sign-out">
            <i className="pi pi-sign-out" style={{"fontSize":"3em"}}/>
            </Button>
            
            
        </React.Fragment>
    );
    
    const rightContents = (
        <React.Fragment>
            <p id="usuario">
             giuseppe@academico.ifpb.edu.br
            </p>
            <img id="logo" src={Logo} width="40" height="50"></img>
            <img id="avin" src={Avin} width="90" height="40"></img>
        </React.Fragment>
    );

    return (
        <div>
          <Toolbar id="Toolbar" left={leftContents} right={rightContents}/>
        </div>
      
        );
        
    
}

export default Header;



