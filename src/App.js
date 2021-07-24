import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import MarsData from './components/MarsData';
import PictureDay from './components/PictureDay';


const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/picture' component={PictureDay} />
                <Route exact path='/rover' component={MarsData} />
            </Switch>
        </Layout>
    </Router>
);

export default App;