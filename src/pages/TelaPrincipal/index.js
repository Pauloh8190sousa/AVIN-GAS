import React from "react";

import Header from "../../components/Header";

import CardApresentation from "../../components/Card Apresentation";


function TelePrincipal() {
    return (
        <div>   
            <Header/>
            <CardApresentation title="Questionarios Disponiveis" type="questionarios" />
        </div>

    );
}

export default TelePrincipal;