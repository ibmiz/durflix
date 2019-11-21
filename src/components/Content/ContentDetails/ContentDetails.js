import React, {Component} from 'react';
import AddIcon from '../../../static/images/add.svg';
import PlayIcon from '../../../static/images/play-button.svg';


class ContentDetails extends Component {


    render() {
        const {content} = this.props;
        console.log(content);
        return (
            <div className="modal__container">
                <h1 className="modal__title">
                    {content.title || content.name}
                </h1>
                <p className="modal__info">
              <span className="modal__rating">
                Rating: {content.vote_average * 10}%{' '}
              </span>
                    Release date: {content.release_date || content.first_air_date}
                </p>
                <p className="modal__overview">{content.overview}</p>
                <button className="modal__btn modal__btn--purple">
                    <PlayIcon className="modal__btn--icon"/>
                    Play
                </button>
                <button className="modal__btn">
                    <AddIcon className="modal__btn--icon"/>
                    My List
                </button>
            </div>
        )
    }
}

export default ContentDetails;