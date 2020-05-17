import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Create from './Create';
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';
import Login from './Login';
import PrivateRouter from './PrivateRouter'
import Nav from './Nav'


const Routes = () => {
    return(
        <BrowserRouter>
        <Nav />
            <Switch> 
                <Route path="/" exact component={App}/>
                <PrivateRouter path='/create' exact component={Create}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/post/:slug' exact component={SinglePost}/>
                <PrivateRouter path='/post/update/:slug' exact component={UpdatePost}/>
            </Switch>   
        </BrowserRouter>
    )
}


export default Routes;