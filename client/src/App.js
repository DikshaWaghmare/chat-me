import { BrowserRouter, Switch, Route , Redirect} from "react-router-dom";

import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Navbar from "./components/Navbar";
export default function App(){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Redirect from='*' to='/'/>
            </Switch>
        </BrowserRouter>
    )
}