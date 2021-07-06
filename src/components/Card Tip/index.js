import React from "react";

import "./styles.css";
function CardTip() {
    return (
        <div id="principal_dica">
            <h1 id="h1_dica">
                Dicas
            </h1>
            <p id="texto_dica">
                1. As respostas são armazenadas sem indentificá-lo, preservando o seu anonimato.<br/>
                2. Ao prosseguir com este questionário você concorda em participar do processo avaliativo.<br/>
                3. O questionário não poderá mais ser mais modificado depois de enviado.<br/>
                4. Passe por cada etapa do questionári usando os botões ao final da tela para 
                <span id="verde">  avançar (verde)</span> ou <br/><span id="vermelho">retroceder (vermelho)</span>.
            </p>
        </div>

    );
}
export default CardTip;
