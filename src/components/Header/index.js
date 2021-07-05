import React from "react";

import Logo from "../../assets/styles/imgs/ifpb.png";

import Avin from "../../assets/styles/imgs/avin.png";

import {PrimeReactCSS} from "primereact/resources/themes/fluent-light/theme.css";

import {PrimeReactMinCsss} from "primereact/resources/primereact.min.css";

import {Icons} from "primeicons/primeicons.css";

import {StylesHeader} from "../Header/styles.css";

import {Button} from "primereact/button";

import {Toolbar} from "primereact/toolbar";

function Header() {
    
    const leftContents = (
        <div>
            <Button id="separador">
            <i className="pi pi-bars p-toolbar-separator p-mr-2" style={{"fontSize":"2em"}}/>
            </Button>

            <Button id="ajuda">
            <i id="ajuda" className="pi pi pi-question-circle" style={{"fontSize":"2em"}}/>
            </Button>
            
            <Button id="sign-out">
            <i className="pi pi-sign-out" style={{"fontSize":"2em"}}/>
            </Button>
            
            
        </div>
    );
    
    const rightContents = (
        <div>
            <span id="usuario">
             giuseppe@academico.ifpb.edu.br
            </span>
            <img id="logo" src={Logo} width="40" height="40"></img>
            < img id="avin" src={Avin} width="90" height="40"></img>
        </div>
    );

    return (
        <div>
            <Toolbar id = "Toolbar" left={leftContents} right={rightContents}></Toolbar>
        </div>
        );
}

export default Header;



