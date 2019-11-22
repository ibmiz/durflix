import React, {Component} from 'react';
import PlayLogo from '../../static/images/play-button.svg';
import AddLogo from '../../static/images/add.svg';


class Header extends Component {

    render() {
        const {headerContent} = this.props;
        /** Background image for the header component */
        const backgroundStyle = {
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${headerContent.backdrop_path})`,
            backgroundPosition: 'center',
        };

        return (
            <header style={backgroundStyle} className="header">
                <div className="header__container">
                    <h1 className="header__container-heading">{headerContent.title || headerContent.name}</h1>

                    <button onClick={() => console.log("clicked")} className="header__container-btnPlay">
                        <PlayLogo className="header__container-btnMyList-play"/>
                        Play
                    </button>

                    <button className="header__container-btnMyList">
                        <AddLogo className="header__container-btnMyList-add"/>
                        My List
                    </button>
                    <p className="header__container-overview">{headerContent.overview}</p>
                </div>
                <div className="header--fadeBottom"/>
            </header>
        )
    }
}

export default Header;