import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from './ProtectedRoute';
import Login from './pages/Login/Logon';
import Register from './pages/Login/Register';
import UserPage from './pages/UserPage';
import PageNotFound from './pages/PageNotFound';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <ProtectedRoute exact path="/" component={UserPage} />
               <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}