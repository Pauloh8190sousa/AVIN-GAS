import React from "react";
import "../styles.css";

function ApresentationCard(props) {

    return (
        <div className="card">

            <div className ="card-item" id="card-item-title">
                <h1 className="title"> {props.title} </h1>
            </div>

            <div className="card-item">
                <ul className="lista-questionarios">
                    <li className="item-questionario">
                        {/*Inserir lista de cards aq*/}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ApresentationCard;