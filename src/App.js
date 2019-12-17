import React from 'react';
import MySite from "./container/MySite/MySite";
import MyFitstProject from './container/MyFirstProject/MyFirstProject'
import MySecondProject from './container/MySecondProject/MySecondProject'
import MyThirdProject from './container/MyThirdProject/MyThirdProject'
import MyFourthProject from './container/MyFourthProject/MyFourthProject'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';


const App = ()=> (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={MySite}/>
            <Route path='/firstProject' component={MyFitstProject}/>
            <Route path='/secondProject' component={MySecondProject}/>
            <Route path='/thirdProject' component={MyThirdProject}/>
            <Route path='/fourthProject' component={MyFourthProject}/>
        </Switch>
    </BrowserRouter>
);

export default App;
