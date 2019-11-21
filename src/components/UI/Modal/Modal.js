import React, {Component} from 'react';
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component {

    render() {
       const {modalContent, modalClosed, show, children} = this.props;
        const backgroundStyle = {
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${modalContent.backdrop_path || modalContent.poster_path})`,
        };
        return (
            <div>
                <Backdrop show={show} toggleBackdrop={modalClosed}/>
                <div
                    style={backgroundStyle}
                    className={(show ? 'modal show' : 'modal hide')}>
                    {children}
                </div>
            </div>
        );
    }

}

export default Modal; 