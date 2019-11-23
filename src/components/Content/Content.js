import React from 'react';
 
const Content = (props) => (

   <div className="content">
         <div onClick={props.details} className="content__column-poster">
            <img src={props.image} alt="" className="content__poster" />
         </div>
   </div> 
);

export default Content;