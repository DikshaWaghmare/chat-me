 import {React} from 'react';

import { BrowserRouter, Switch, Route , Redirect} from "react-router-dom";

import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Navbar from "./components/Navbar";
import AddPost from "./routes/AddPost";
import CreateAcc from "./routes/CreateAcc";
import Login from "./routes/Login";


import UserToken from "./components/UserToken";

export default function App(){
    const {token, setToken} = UserToken();
    if(!token || token.err){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />

                <Route path="/create-account" component={CreateAcc} />
                {/* <Route path="/login" component={Login} /> */}

                <Login setToken={setToken} />
                
                <Redirect from='*' to='/'/>
            </Switch>
        </BrowserRouter>
    )}else{
        return(<BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/addPost" component={AddPost} />
                
                {token ? <Redirect to='/dashboard' /> : <Login /> }
                
            </Switch>
        </BrowserRouter>
    )}
}