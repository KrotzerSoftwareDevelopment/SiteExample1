import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import './fonts/RussoOne-Regular.ttf';
import './FilePages/Styles.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Home from './FilePages/Home.jsx';
import bg from './Assets/bg.png';
import Footer from './FilePages/Footer.jsx';
ReactDOM.render(
    
    <div>
    <div>
        <img className="bgStyle" src={bg} />
    <BrowserRouter>
    
    <App />
    
    <Footer />
    
    </BrowserRouter>
   
    </div>
    
    </div>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
