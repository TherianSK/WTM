import Results from './results';
import Form from './form';
import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";

class Filter extends Component {
  render(){
    return (
      <div>
        <Row>
          <Col xs={4}>
            <Form/>
          </Col>
          <Col xs={8}>
            <Results/>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Filter;
