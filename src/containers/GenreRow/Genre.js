import React, {Component} from 'react';
import {apiKey} from '../../config'

class Genre extends Component {

    render() {
        let poster = false;

        if (this.props.url === `/discover/tv?api_key=${apiKey}&with_networks=213`) {
            poster = true;
        }
        const {content, detailsModal, posterUrl} = this.props;
        return (
            <div onClick={detailsModal}
                 className={'contentShowcase__container--genre' + (poster ? '__durflix' : '')}>
                {!poster &&
                <h2 className="contentShowcase__container--genre-title">{content.title || content.name}</h2>
                }
                <img src={posterUrl} className="contentShowcase__container--genre-image" alt="image"/>
            </div>
        );
    }
}

export default Genre;