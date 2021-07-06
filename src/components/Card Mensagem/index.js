import React from "react";

import "./styles.css";

function CardMensagem(props) {
    return (
        <div className="container">
            <div className="info">
                {props.text}
            </div>
            <div className="option">
                <button className="btn_cancelar">{props.textoBotaoVermelho}</button>
                <button className="btn_participar">{props.textoBotaoVerde}</button>
            </div>
        </div>
    );
}

export default CardMensagem;