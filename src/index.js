import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Homepage/homepage'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom';
import LoginPage from './Login/login';
import NewsPage from './News/news'
import WaterfallPage from './Waterfall/waterfall';
import NewPage from './new/new';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Homepage}></Route>
                        <Route path="/login" component={LoginPage}></Route>
                        <Route path="/news" component={NewsPage}></Route>
                        <Route path='/homepage' component={Homepage}></Route>
                        <Route path="/waterfall" component={WaterfallPage}></Route>
                        <Route path="/new" component={NewPage}></Route>
                    </Switch>
                </BrowserRouter>
               
            </div>
        )
    }
}
  
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
