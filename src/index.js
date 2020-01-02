import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './HomePage/homepage'
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
import NewsaPage from './Newsa/newsa';
import NewsbPage from './Newsb/newsb';
import Enlist from './Enlist/enlist';
import Ending from './Ending/ending';
import Administrators from './Administrators/administrators';

import NewscPage from './Newsc/newsc';
import NewsdPage from './Newsd/newsd';
import NewsePage from './Newse/newse';
import NewsfPage from './Newsf/newsf';


class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Homepage}></Route>
                        <Route path="/user/login" component={LoginPage}></Route>
                        <Route path="/user/news" component={NewsPage}></Route>
                        <Route path='/user/homepage' component={Homepage}></Route>
                        <Route path="/user/new" component={NewPage}></Route>
                        <Route path='/user/RichText' component={EditorConvertToHTML}></Route>
                        <Route path="/user/organization" component={OrganizationPage}></Route>
                        <Route path="/user/personal" component={PersonalPage}></Route>
                        <Route path="/user/center" component={CenterPage}></Route>
                        <Route path="/user/details" component={Details}></Route>
                        <Route path="/user/enlist" component={Enlist}></Route>
                        <Route path="/user/end" component={Ending}></Route>
                        <Route path="/administrators" component={Administrators}></Route>

                        
                        <Route path="/user/register" component={Register}></Route>
                        <Route path="/user/newsa" component={NewsaPage}></Route>
                        <Route path="/user/newsb" component={NewsbPage}></Route>
                        <Route path="/user/newsc" component={NewscPage}></Route>
                        <Route path="/user/newsd" component={NewsdPage}></Route>
                        <Route path="/user/newse" component={NewsePage}></Route>
                        <Route path="/user/newsf" component={NewsfPage}></Route>
                        
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
