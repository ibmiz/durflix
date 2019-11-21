import React, {Component} from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header';
import GenreRow from '../../GenreRow/GenreRow';
import Footer from '../../../components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import {apiKey, baseUrl} from '../../../config'


class MainContent extends Component {

    state = {selectedHeaderContent: {}};

    componentDidMount = () => {
        this.getMainHeader();
    };

    getMainHeader = () => {
        const movieId = 157336;
        const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}`;
        axios.get(url).then(response => {
            const movieData = response.data;
            movieData.backdrop_path = '/walWq52PP2IGRc98VkPG7Wp77lK.jpg';
            this.setState({selectedHeaderContent: movieData});
        }).catch(error => {console.log(error);});
    };

    render() {
        const {selectedHeaderContent} = this.state;
        return (
            <BrowserRouter>
                <div className="container">
                    <Header headerContent={selectedHeaderContent}/>
                    <GenreRow/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainContent; 