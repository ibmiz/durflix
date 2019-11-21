import React, {Component} from 'react';
import NavigationItem from '../../components/NavigationItem/NavigationItem'
import SearchLogo from '../../static/images/search-icon.svg';
import DurflixLogo from '../../static/images/Durflix.png';
import BellLogo from '../../static/images/bell-logo.svg';
import DropdownArrow from '../../static/images/drop-down-arrow.svg';
import DropdownContent from './DropdownContent';


class NavBar extends Component {
    state = {
        scrolling: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    /** changes the scrolling state depending on the Y-position */
    handleScroll = (event) => {
        if (window.scrollY === 0) {
            this.setState({scrolling: false});
        } else if (window.scrollY > 50) {
            this.setState({scrolling: true});
        }
    };


    render() {
        const {showMovies} = this.props;
        const {scrolling} = this.state;
        return (
            <nav className={'navigation ' + (scrolling ? 'black' : '')}>
                <ul className="navigation__container">
                    <NavigationItem link="/" exact><img className="navigation__container--logo" src={DurflixLogo}
                                                        alt=""/></NavigationItem>
                    <DropdownArrow className="navigation__container--downArrow-2"/>
                    <div className="navigation__container-link pseudo-link">Home</div>
                    <div className="navigation__container-link pseudo-link">Series</div>
                    <div className="navigation__container-link pseudo-link">Films</div>
                    <div className="navigation__container-link pseudo-link">Recently Added</div>
                    <div className="navigation__container-link pseudo-link">My List</div>

                    <div className="navigation__container--left">

                    </div>
                    <BellLogo className="navigation__container--bellLogo"/>

                    <DropdownContent/>
                    <DropdownArrow className="navigation__container--downArrow"/>

                </ul>
            </nav>
        )
    }
}

export default NavBar;