import React from 'react';

const contentRow = (props) => (

    <div className="movie">
        <div onClick={props.details} className="content__column-poster">
            <img src={props.image} alt="" className="content__poster" />
        </div>
    </div>
);

export default contentRow;