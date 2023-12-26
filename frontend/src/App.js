import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import MyNoticesPage from './components/MyNoticesPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/my-notices" component={MyNoticesPage} />
            </Switch>
        </Router>
    );
};

export default App;
