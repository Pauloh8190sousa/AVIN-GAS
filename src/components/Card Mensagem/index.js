import React from "react";

function CardMensagem(props) {
    return (
        <div className="courses-container">
            <div className="course-info">
                <p>Flamengo perdeu</p>
            </div>
            <div className="course-option">
                <button className="btn">Não quero participar</button>
                <button className="btn">Quero participar</button>
            </div>
        </div>
    );
}

export default CardMensagem;