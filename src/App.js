import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import PictureDay from './components/PictureDay';


const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/picture' component={PictureDay} />
        
            </Switch>
        </Layout>
    </Router>
);

export default App;