import React from "react";

import "./styles.css";

import CardTitle from "../Card Title";

import CardMensagem from "../Card Mensagem";

function renderQuestionarios() {
    return (
        <ul className="lista-questionarios">
            <li className="item-questionario">
                <CardTitle />
            </li>
            <li className="item-questionario">
                <CardTitle />
            </li>
            <li className="item-questionario">
                <CardTitle />
            </li>
            <li className="item-questionario">
                <CardTitle />
            </li>
        </ul>
    );
}

function renderQuestao() {
}

function renderMensagem() {
    return (
        <ul className="lista-questionarios">
            <li className="item-questionario">
                <CardMensagem />
            </li>
        </ul>
    );
}

function handleContent(type) {
    if (type === "questionarios") {
        return renderQuestionarios();
    }
    else if (type === "questao") {
        return renderQuestao();
    }
    else if (type === "mensagem") {
        return renderMensagem();
    }
}

function ApresentationCard(props) {
    return (
        <div className="card">

            <div className="card-item" id="card-item-title">
                <h1 className="title"> &gt; {props.title} </h1>
            </div>

            <div className="card-item">
                {handleContent(props.type)}
            </div>
        </div>
    );
}

export default ApresentationCard;