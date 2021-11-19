import { BrowserRouter, Switch, Route , Redirect} from "react-router-dom";

import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Navbar from "./components/Navbar";
import AddPost from "./routes/AddPost";
import CreateAcc from "./routes/CreateAcc";
import Login from "./routes/Login";
export default function App(){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/addPost" component={AddPost} />

                <Route path="/create-account" component={CreateAcc} />
                <Route path="/login" component={Login} />
                
                <Redirect from='*' to='/'/>
            </Switch>
        </BrowserRouter>
    )
}