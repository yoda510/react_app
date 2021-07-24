import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4" style = {{color: "white"}}>NASA APIS</h1>
            <p className="lead" style = {{color: "white"}}>A look at the images and data that NASA freely provides through their APIS. This 
            webpage does all the work for you so you can take a look at the picture of the day or go back in time and see what you missed. Hopefully I will
            get to expand and pull in all the other amazing APIS they have.

            </p>
            
            <Link className="btn btn-primary btn-lg" to='/picture' role="button">Picture of the Day</Link>
        </div>
    </div>
);
export default Home;