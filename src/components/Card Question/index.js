import React from "react";
import Styles from "./styles.css";
import QuestionComponent from "../QuestionComponent";

function CardQuestion(props){
    return(
        <div>
            <div className="question-container">
                <div className="course-question">

                    <div className="course-info-question">
                        <h3 className="info-question">QUESTÃO</h3>
                        <p>Como você avalia a <b>qualidade do seu curso</b>, considerando o momento atual no contexto da pandemia:</p>   
                        
                            <QuestionComponent text={props.text1} group={props.group1} color={props.color1}/>

                            <QuestionComponent text={props.text2} group={props.group2} color={props.color2}/>

                            <QuestionComponent text={props.text3} group={props.group3} color={props.color3}/>

                            <QuestionComponent text={props.text4} group={props.group4} color={props.color4}/>
   
                            <QuestionComponent text={props.text5} group={props.group5} color={props.color5}/>

                            <QuestionComponent text={props.text6} group={props.group6} color={props.color6}/>

                            <QuestionComponent text={props.text7} group={props.group7} color={props.color7}/>

                            <QuestionComponent text={props.text8} group={props.group8} color={props.color8}/>
    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardQuestion;