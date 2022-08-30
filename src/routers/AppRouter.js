import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from '../components/layout/Layout';
import Home from '../components/Home'
import Promociones from '../components/Promociones';
import Extras from '../components/Extras';
import Error404 from '../components/Error404';
import Menu from '../components/Menu'

function AppRouter(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/promociones" component={Promociones} />
                    <Route exact path="/extras" component={Extras} />
                    <Route exact path="/menu" component={Menu} />
                    <Route component={Error404} />
                </Switch>
            </Layout>
       </BrowserRouter>
      
    );
}

export default AppRouter;


// Alternativa al 404
/* <Route path="*" component={Error404} /> */