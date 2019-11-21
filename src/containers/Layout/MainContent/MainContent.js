import React, {Component} from 'react';
import GenreRow from '../../GenreRow/GenreRow';
import Footer from '../../../components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';


class MainContent extends Component {


    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <GenreRow/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainContent; 