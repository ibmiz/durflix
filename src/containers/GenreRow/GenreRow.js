import React, {Component} from 'react';
import axios from '../../axios-instance';
import Genre from './Genre';
import Modal from '../../components/UI/Modal/Modal';
import ContentDetails from '../../components/Content/ContentDetails/ContentDetails';
import {apiKey} from '../../config'


class GenreRow extends Component {

    state = {
        trendingRow: [],
        durlixOriginalsRow: [],
        topRatedRow: [],
        contentOverview: {},
        toggleModal: false,
        genres: {
            comedy: {
                row: [],
                genreId: '35'
            },
            horror: {
                row: [],
                genreId: '27'
            },
            romance: {
                row: [],
                genreId: '10749'
            },
            animated: {
                row: [],
                genreId: '16'
            },
            documentaries: {
                row: [],
                genreId: '99'
            },

        }
    };

    /** Make all API calls as soon as our GenreRow component mounts. */
    componentDidMount() {
        this.getTrending();
        this.getTopRated();
        this.getDurflixContent();
        this.getGenreRows();
    }

    setDetails = (contentObject) => {
        this.setState({toggleModal: true});
        this.setState({contentOverview: contentObject});
    };

    closeModal = () => {
        this.setState({toggleModal: false})
    };

    createRows = (res, url) => {
        const results = res.data.results;
        let rows = [];
        results.forEach((result) => {
            let imageUrl = 'https://image.tmdb.org/t/p/original/' + result.backdrop_path;
            if (url === `/discover/tv?api_key=${apiKey}&with_networks=213`) {
                imageUrl = 'https://image.tmdb.org/t/p/original/' + result.poster_path;
            }
            if (result.poster_path && result.backdrop_path !== null) {
                const contentComponent = <Genre
                    detailsModal={() => this.setDetails(result)}
                    key={result.id}
                    url={url}
                    posterUrl={imageUrl}
                    content={result}/>;
                rows.push(contentComponent);
            }
        });
        return rows;
    };

    getTrending = () => {
        const url = `/trending/all/week?api_key=${apiKey}&language=en-US`;

        axios.get(url)
            .then(res => {
                const rows = this.createRows(res, url);
                this.setState({trendingRow: rows});
            })
            .catch(error => {
                console.log(error);
            });
    };

    getTopRated = () => {
        const url = `/movie/top_rated?api_key=${apiKey}&language=en-US`;
        axios.get(url).then(res => {
            const rows = this.createRows(res, url);
            this.setState({topRatedRow: rows});
        }).catch(error => {
            console.log(error);
        })
    };

    getDurflixContent = () => {
        const url = `/discover/tv?api_key=${apiKey}&with_networks=213`;

        axios.get(url)
            .then(res => {
                const rows = this.createRows(res, url);
                this.setState({durlixOriginalsRow: rows});
            })
            .catch(error => {
                console.log(error);
            })
    };

    getGenreRows = () => {
        const {genres} = this.state;
        for (let key in genres) {
            const url = `/discover/movie?api_key=${apiKey}&with_genres=${genres[key]['genreId']}`;
            axios.get(url)
                .then(res => {
                    const rows = this.createRows(res, url);
                    const genres = this.state.genres;
                    genres[key]['row'] = rows;
                    this.setState({...genres, genres: genres});
                }).catch(error => {
                console.log(error);
            })
        }
    };


    render() {
        const {
            trendingRow, durlixOriginalsRow, topRatedRow, contentOverview, toggleModal, genres
        } = this.state;
        return (
            <div className="contentShowcase">
                <h1 className="contentShowcase__heading">DURFLIX ORIGINALS</h1>
                <div className="contentShowcase__container">
                    {durlixOriginalsRow}
                </div>

                <h1 className="contentShowcase__heading">Trending Now</h1>
                <div className="contentShowcase__container">
                    {trendingRow}
                </div>

                <h1 className="contentShowcase__heading">Top Rated</h1>
                <div className="contentShowcase__container">
                    {topRatedRow}
                </div>


                <h1 className="contentShowcase__heading">Comedy</h1>
                <div className="contentShowcase__container">
                    {genres.comedy.row}
                </div>

                <h1 className="contentShowcase__heading">Horror</h1>
                <div className="contentShowcase__container">
                    {genres.horror.row}
                </div>

                <h1 className="contentShowcase__heading">Romance</h1>
                <div className="contentShowcase__container">
                    {genres.romance.row}
                </div>

                <h1 className="contentShowcase__heading">Animated</h1>
                <div className="contentShowcase__container">
                    {genres.animated.row}
                </div>

                <h1 className="contentShowcase__heading">Documentaries</h1>
                <div className="contentShowcase__container">
                    {genres.documentaries.row}
                </div>

                <Modal show={toggleModal} modalClosed={this.closeModal} modalContent={contentOverview}>
                    <ContentDetails content={contentOverview}/>
                </Modal>
            </div>
        );
    }
}

export default GenreRow;
