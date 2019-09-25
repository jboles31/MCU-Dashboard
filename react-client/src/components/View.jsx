import React from 'react';
import $ from 'jquery';

const View = (props) => (
  <div className="view">
    <div className="poster-wrapper"> 
      <img className="poster" src={props.info.pic} />
    </div>
    <div className="info-wrapper">
      <div className="info">
        <div className="info-header">
          <h1>{props.info.title}</h1>
          <h3>{props.info.order} out of 22</h3> 
        </div>
        <div className="info-overview">
          <p><b>Directed By:</b> {props.info.director}</p>
          <p><b>Cast:</b> {props.info.cast}</p>
          <p><b>Plot:</b> {props.info.synopsis}</p>
          <p><b>Writen By:</b> {props.info.writers}</p>
        </div>
        <div className="info-specs">
          <p><b>Released:</b> {props.info.released}</p>
          <p><b>IMDB Rating:</b> {props.info.rating}</p>
          <p><b>Runtime:</b> {props.info.runtime}</p>
          <p><b>Domestic Total Gross:</b> {props.info.boxoffice}</p>
        </div>
      </div>
    </div>
  </div>
)

export default View;