import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Bucket from './Bucket'
import ToDo from './ToDo';
import App from './App';

function Home() {
    return (<div>Helo</div>)
}

export default () =>
    <BrowserRouter>
        <Switch>
            <App>
                <Route exact path="/" component={Bucket}/>
                <Route exact path="/bucket-details" component={Home}/>
                <Route exact path="/todo" component={ToDo}/>
            </App>
        </Switch>
    </BrowserRouter>;

