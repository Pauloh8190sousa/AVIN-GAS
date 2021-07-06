import React from "react";

import Header from "../../components/Header";

import CardApresentation from "../../components/Card Apresentation";

import CardTitle from "../../components/Card Title";

import CardTip from "../../components/Card Tip";

import CardMensagem from "../../components/Card Mensagem";

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
            <CardApresentation title="Inicio">
                <CardMensagem text={
                    <div>
                        <p>Caro Estudante, </p>
                        <p>
                            A Comissão Própria de Avaliação Institucional do IFPB (CPA),
                            com base nas<br />orientações do Sistema Nacional de Avaliação (Sinaes/MEC),
                            através da Lei Federal de <br /> nº 10.861, inicia um novo ciclo de avaliação,
                            com o propósito de coletar informações <br />institucionais junto
                            aos diversos segmentos que fazem o IFPB (Docentes, Discentes e <br />Técnicos Administrativos).
                        </p>
                        <p>
                            Dessa forma, visamos melhorar o processo ensino/aprendizagem e
                            dimensionarmos <br />as potencialidades e fragilidades do IFPB, avaliando a satisfação dos estudantes
                            em <br />relação à instituição e aos seus cursos.
                        </p>
                        <p>
                            Respondendo a este questionário você estará contribuindo para tornar o IFPB <br />cada vez melhor!
                        </p>
                        <p>
                            Obrigado por ajudar a melhorar o IFPB!
                        </p>
                        <p id="assinatura">
                            Comissão Própria de Avaliação (CPA/IFPB)
                        </p>
                    </div>} textoBotaoVermelho="Não quero participar" textoBotaoVerde="Quero participar"/>
            </CardApresentation>
        </div>
    );
}

export default QuestionarioBoasVindas;