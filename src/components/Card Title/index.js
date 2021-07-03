import React from "react";
import StylesCard from "../Card Title/styles.css";

function CardTitle(){
    
    return(
        <div className="courses-container">
            <div className="course">

                <div className="course-info">
                    <h3 className="info">DISPONÍVEL ATÉ 05/12/2021</h3>
                    <h2>INSTRUMENTO DE AVALIAÇÃO DOS DISCENTES EAD</h2>
                    <h3 className="info">2020.1</h3>
                    <button className="btn">Responder</button>
                </div>
            </div>
        </div>
    );
}

export default CardTitle;