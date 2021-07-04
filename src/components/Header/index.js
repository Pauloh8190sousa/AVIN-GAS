import React from "react";

import Logo from "../../assets/styles/imgs/ifpb.png";

import Avin from "../../assets/styles/imgs/avin.png";

function Header() {
    
    const leftContents = (
        <div>
            <button id="separador">
            <i className="pi pi-bars p-toolbar-separator p-mr-2" style={{"fontSize":"3em"}}/>
            </button>

            <button id="ajuda">
            <i id="ajuda" className="pi pi pi-question-circle" style={{"fontSize":"3em"}}/>
            </button>
            
            <button id="sign-out">
            <i className="pi pi-sign-out" style={{"fontSize":"3em"}}/>
            </button>
            
            
        </div>
    );
    
    const rightContents = (
        <div>
            <p id="usuario">
             giuseppe@academico.ifpb.edu.br
            </p>
            <img id="logo" src={Logo} width="40" height="50"></img>
            <img id="avin" src={Avin} width="90" height="40"></img>
        </div>
    );

    return (
        <div>

        </div>
        );
}

export default Header;



