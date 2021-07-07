import React from "react";
import Header from "../../components/Header";
import CardApresentation from "../../components/Card Apresentation";
import CardTitle from "../../components/Card Title";
import CardTip from "../../components/Card Tip";
import Styles from "./styles.css";
import CardQuestion from "../../components/Card Question";
import QuestionComponent from "../../components/QuestionComponent";
function QuestionarioGrupoQuestao() {
    return (
        <div>
            <Header />
            <div className="div_principal_questionarioboas_vindas">
                <CardTitle temBotao={false} />
            </div>
            <div className="div_principal_questionarioboas_vindas">
                <CardTip />
            </div>
                <CardApresentation title="EIXO 3: POLÍTICAS ACADÊMICAS - DIMENSÃO 2: POLÍTICAS PARA O ENSINO, A PESQUISA EA EXTENSÃO">

                    <CardQuestion 
                    text1="Projeto Pedagógico do Curso (PPC)" 
                    text2="Estrutura curricular" 
                    text3="Turno de funcionamento"
                    text4="Articulação de conteúdos entre as disciplinas do curso"
                    text5="A adequação do material didático e das mídias utilizadas pelos professores com a proposta do curso"
                    text6="Ambiente Virtual de Ensino e Aprendizagem (AVA)"
                    text7="Oferta de projetos e/ou atividades de extensão" 
                    text8="Carga horária das disciplinas"
                    
                    color1="#f0f0f7"
                    color2="white"
                    color3="pink"
                    color4="white"
                    color5="#f0f0f7"
                    color6="white"
                    color7="#f0f0f7"
                    color8="white"

                    textoBotaoVermelho="ETAPA ANTERIOR" textoBotaoVerde="PRÓXIMA ETAPA"

                    group1="question-group1" 
                    group2="question-group2"
                    group3="question-group3"
                    group4="question-group4"
                    group5="question-group5"
                    group6="question-group6"
                    group7="question-group7"
                    group8="question-group8">

                    </CardQuestion>
                    <div className="option">
                            <button className="btn_cancelar">ETAPA ANTERIOR</button>
                            <button className="btn_participar">PRÓXIMA ETAPA</button>
                    </div>
                </CardApresentation>
                
        </div>

    );
}

export default QuestionarioGrupoQuestao;