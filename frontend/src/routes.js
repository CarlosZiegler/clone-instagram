import React from 'react';
import { Switch, Route } from "react-router-dom";

// importar as paginas
import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return(
        // Switch faz a comparacao da rota digitada pelo usuario
        <Switch>
        <Route path="/" exact component= {Feed} />
        <Route path="/new" exact component= {New} />
        </Switch>
    );
}
export default Routes;