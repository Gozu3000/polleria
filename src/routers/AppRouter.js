import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../view-controllers/Home';
import polleria from '../view-controllers/polleria';
import Error404 from '../view-controllers/Error404';

function AppRouter(){
    return(
       <Router>
           <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/polleria" component={polleria} />
               <Route path="*" component={Error404} />
           </Switch>
       </Router>
    );
}

export default AppRouter;