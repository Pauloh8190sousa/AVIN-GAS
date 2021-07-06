import React from "react";

import "./styles.css";

function CardMensagem(props) {
    return (
        <div className="container">
            <div className="info">
                <div>
                    <p>Caro Estudante, </p>
                    <p>
                        A Comissão Própria de Avaliação Institucional do IFPB (CPA),
                        com base nas<br/>orientações do Sistema Nacional de Avaliação (Sinaes/MEC),
                        através da Lei Federal de <br/> nº 10.861, inicia um novo ciclo de avaliação,
                        com o propósito de coletar informações <br/>institucionais junto
                        aos diversos segmentos que fazem o IFPB (Docentes, Discentes e <br/>Técnicos Administrativos).
                    </p>
                    <p>
                        Dessa forma, visamos melhorar o processo ensino/aprendizagem e
                        dimensionarmos <br/>as potencialidades e fragilidades do IFPB, avaliando a satisfação dos estudantes
                        em <br/>relação à instituição e aos seus cursos.
                    </p>
                    <p>
                        Respondendo a este questionário você estará contribuindo para tornar o IFPB <br/>cada vez melhor!
                    </p>
                    <p>
                        Obrigado por ajudar a melhorar o IFPB!
                    </p>
                    <p id="assinatura">
                        Comissão Própria de Avaliação (CPA/IFPB)
                    </p>
                </div>
            </div>
            <div className="option">
                <button className="btn_cancelar">Não quero participar</button>
                <button className="btn_participar">Quero Participar</button>
            </div>
        </div>
    );
}

export default CardMensagem;