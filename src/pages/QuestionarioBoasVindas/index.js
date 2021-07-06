import React from "react";

import Header from "../../components/Header";

import CardApresentation from "../../components/Card Apresentation";

import CardTitle from "../../components/Card Title";

import CardTip from "../../components/Card Tip";

import "./styles.css"

function QuestionarioBoasVindas() {
    return (
        <div>
            <Header />
            <div className="div_principal_questionarioboas_vindas">
                <CardTitle temBotao={false} />
            </div>
            <div className="div_principal_questionarioboas_vindas">
                <CardTip />
            </div>
            <CardApresentation title="Inicio" type="mensagem" />
        </div>
    );
}

export default QuestionarioBoasVindas;