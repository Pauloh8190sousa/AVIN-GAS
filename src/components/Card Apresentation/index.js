import React from "react";

import "./styles.css";

function ApresentationCard(props) {
    return (
        <div className="principal">
            <div className="card">

                <div className="card-item" id="card-item-title">
                    <h1 className="title"> &gt; {props.title} </h1>
                </div>
                <div className= "content">   
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ApresentationCard;