import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Homepage from './HomePage/homepage'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'


export default class Root extends React.Component{
    render(){
        return(
            <div>
                 <BrowserRouter basename='vacation'>
                 <Switch>
                 <Route path='/' exact component={Homepage}></Route>
               
                </Switch>
                </BrowserRouter>
               
            </div>
        )
    }
}
  
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
