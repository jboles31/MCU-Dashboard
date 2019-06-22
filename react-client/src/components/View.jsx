import React from 'react';
import $ from 'jquery';

const View = (props) => (
  <div>
    <img className="poster" src={props.info.pic} />
    <div className="info">
      <h2>{props.info.title}</h2>
      <h3>{props.info.year}</h3>
      <p>{props.info.cast}</p>
      <h3>{props.info.order}</h3> 
      <p>{props.info.synopsis}</p>
    </div>
  </div>
)

export default View;