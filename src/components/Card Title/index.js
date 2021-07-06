import React from "react";

import "./styles.css";

function adicionarBotao(temBotao) {
    if (temBotao) {
        return (<button className="btn">Responder</button>);
    }
}

function CardTitle(props) {

    return (
        <div className="courses-container">
            <div className="course">

                <div className="course-info">
                    <h3 className="info">DISPONÍVEL ATÉ 05/12/2021</h3>
                    <h2>INSTRUMENTO DE AVALIAÇÃO DOS DISCENTES EAD</h2>
                    <h3 className="info">2020.1</h3>      
                    {adicionarBotao(props.temBotao)}
                </div>
            </div>
        </div>
    );
}

export default CardTitle;