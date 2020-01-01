import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Homepage/homepage'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom';
import LoginPage from './Login/login';
import NewsPage from './News/news'
import NewPage from './new/new';
import EditorConvertToHTML from './Pages/RichText'
import OrganizationPage from './Organization/organization';
import PersonalPage from './Personal/personal';
import CenterPage from './Center/center';
import Details from './Details/details';
import Register from './Register/register'
import Enlist from './Enlist/enlist';
import Ending from './Ending/ending';



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
                        <Route path="/new" component={NewPage}></Route>
                        <Route path='/RichText' component={EditorConvertToHTML}></Route>
                        <Route path="/organization" component={OrganizationPage}></Route>
                        <Route path="/personal" component={PersonalPage}></Route>
                        <Route path="/center" component={CenterPage}></Route>
                        <Route path="/details" component={Details}></Route>
                        <Route path="/enlist" component={Enlist}></Route>
                        <Route path="/end" component={Ending}></Route>

                        <Route path="/register" component={Register}></Route>
                       
                
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
