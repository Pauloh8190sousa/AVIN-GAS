import React from "react";
import {PrimeReactCSS} from "primereact/resources/themes/fluent-light/theme.css";
import {PrimeReactMinCsss} from "primereact/resources/primereact.min.css";
import {Icons} from "primeicons/primeicons.css";
import StylesCardTitle from "../Card Title/styles.css";
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import {Button} from "primereact/button";

function CardTitle(){
    const footer = <span> 
                <Button label="RESPONDER" icon="pi pi-check" style={{marginRight: '.25em',"fontSize":"15px"}}/>
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" style={{"fontSize":"15px"}}/>
                </span>;
    return(
        <div>
             
            <Panel id="Painel" header="> QUESTIONÁRIOS DISPONÍVEIS" >
               
            <Card id="CardTitle" footer={footer}  title="DISPONÍVEL ATÉ 12/05/2021" subTitle="INSTRUMENTO DE AVALIAÇÃO DOS DISCENTES EAD">
                   
                   <p id="ano">
                   2020.1
                   </p> 
            </Card>
            </Panel>
            
        </div>
    );
}
export default CardTitle;