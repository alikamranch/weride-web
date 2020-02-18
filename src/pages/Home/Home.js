import React from 'react';
import './Home.css'
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <div className="text">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;
