import { BrowserRouter, Switch, Route , Redirect} from "react-router-dom";

import Home from "./routes/Home";

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                
                <Redirect from='*' to='/'/>
            </Switch>
        </BrowserRouter>
    )
}