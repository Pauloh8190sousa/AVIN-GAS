import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TelaPrincipal from "./pages/TelaPrincipal";
import QuestionarioBoasVindas from "./pages/QuestionarioBoasVindas";
import QuestionarioFinalizado from "./pages/QuestionarioFinalizado";
import QuestionarioGrupoQuestao from "./pages/QuestionarioGrupoQuestao";

function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={TelaPrincipal} />
            <Route path="/questionario_boas_vindas" component={QuestionarioBoasVindas} />
            <Route path="/questionario_finalizado" component={QuestionarioFinalizado} />
            <Route path="/questionario_grupo_questao" component={QuestionarioGrupoQuestao} />
        </BrowserRouter>
    );
}
export default Routes;