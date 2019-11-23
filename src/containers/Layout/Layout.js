import React, {Component} from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import MainContent from '../Layout/MainContent/MainContent';
import Content from '../../components/Content/Content';
import Modal from '../../components/UI/Modal/Modal';
import ContentDetails from '../../components/Content/ContentDetails/ContentDetails';
import {apiKey, baseUrl} from '../../config'

class Layout extends Component {

    state = {
        toggleList: true,
        contentList: [],
        toggleModal: false,
        contentOverview: {},
    };

    /** Make API call as soon as the user starts typing.  */
    makeApiCall = (searchItem) => {
        const url = `${baseUrl}/search/multi?api_key=${apiKey}&language=en-US&query=${searchItem}`;

        axios.get(url)
            .then(response => {
                const results = response.data.results;
                let ImageUrl;
                let rows = [];

                results.forEach((result) => {
                    if (result.poster_path !== null && result.media_type !== 'person') {
                        ImageUrl = 'https://image.tmdb.org/t/p/w500' + result.poster_path;

                        const Component = <Content
                            details={() => this.selectMovieHandler(result)}
                            key={result.id}
                            image={ImageUrl}
                            movie={result}/>;

                        rows.push(Component);
                    }
                });
                this.setState({contentList: rows});
            }).catch(error => {
            console.log(error);
        });
    };

    /** Get the user input  */
    onSearchHandler = (event) => {
        this.setState({
            toggleList: false
        });

        const userInput = event.target.value;
        this.makeApiCall(userInput);

        if (userInput === '') {
            this.setState({
                toggleList: true
            });
        }
    };

    selectMovieHandler = (content) => {
        this.setState({toggleModal: true});

        let url;
        /** Make the appropriate API call to get the details for a single movie or tv show. */
        if (content.media_type === 'movie') {
            const movieId = content.id;
            console.log(content.id);
            url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}`;

        } else if (content.media_type === 'tv') {
            const tvId = content.id;
            url = `${baseUrl}/tv/${tvId}?api_key=${apiKey}`;
        }

        axios.get(url).then(response => {
            const movieData = response.data;
            this.setState({contentOverview: movieData});
        }).catch(error => {
            console.log(error);
        });
    };

    closeModal = () => {
        this.setState({toggleModal: false});
    };

    render() {
        const {contentOverview, toggleList, contentList} = this.state;
        return (
            <div>
                <Navbar showMovies={this.onSearchHandler}/>
                {toggleList ? <MainContent/> : <div className="search-container">{contentList}</div>}

                <Modal show={this.state.toggleModal}
                       modalClosed={this.closeModal}
                       modalContent={contentOverview}>
                    <ContentDetails content={contentOverview}/>
                </Modal>
            </div>
        );
    }

}

export default Layout; 