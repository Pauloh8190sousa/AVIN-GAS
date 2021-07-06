import React from "react";

import Header from "../../components/Header";

import CardApresentation from "../../components/Card Apresentation";

import CardTitle from "../../components/Card Title";

import CardTip from "../../components/Card Tip";

import CardMensagem from "../../components/Card Mensagem";

import "./styles.css";

function QuestionarioFinalizado() {
    return (
        <div>
            <Header />
            <div className="div_principal_questionarioboas_vindas">
                <CardTitle temBotao={false} />
            </div>
            <div className="div_principal_questionarioboas_vindas">
                <CardTip />
            </div>
            <CardApresentation title="Confirmar envio do questionario">
                <CardMensagem text={
                    <div>
                        <p>Caro Estudante, </p>
                        <p>
                        Obrigado por ajudar a melhorar o IFPB!  Agradecemos a sua participação.  Solicitamos<br/> 
                        o seu apoio para que possamos divulgar amplamente este processo de avaliação. <br/>
                        Portanto, convide seus colegas estudantes, professores e técnicos administrativos <br/>
                        para participarem desta importante iniciativa.
                        </p>
                        <p id="assinatura">
                            Comissão Própria de Avaliação (CPA/IFPB)
                        </p>
                    </div>} textoBotaoVermelho="Voltar etapa" textoBotaoVerde="Enviar"/>
            </CardApresentation>
        </div>
    );
}

export default QuestionarioFinalizado;