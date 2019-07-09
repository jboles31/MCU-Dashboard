import React from 'react';
import $ from 'jquery';

const View = (props) => (
  <div className="view">
    <img className="poster" src={props.info.pic} />
    <div className="info">
      <div className="title">{props.info.title}</div>
      <div className="year">{props.info.year}</div>
      <p>{props.info.cast}</p>
      <h3>{props.info.order}</h3> 
      <p>{props.info.synopsis}</p>
    </div>
  </div>
)

export default View;