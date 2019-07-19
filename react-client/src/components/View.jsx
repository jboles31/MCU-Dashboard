import React from 'react';
import { Container, Col } from 'react-bootstrap'
import $ from 'jquery';

const View = (props) => (
  <Container className="row">
    <div className="div-sm-4">
      <img className="poster" src={props.info.pic} />
    </div>
    <div className="col-sm-8">
      <div className="info">
        <div className="title">{props.info.title}</div>
        <div className="year">{props.info.year}</div>
        <p>{props.info.cast}</p>
        <h3>{props.info.order}</h3> 
        <p>{props.info.synopsis}</p>
      </div>
    </div>
  </Container>
)

export default View;