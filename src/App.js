import React, {
  Component
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Parent from './Parent'
import { Container, Row, Col, Alert } from 'reactstrap';

class App extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col >

          </Col>
        </Row>
        <Row>
          <Col sm="12" className="App-header" style={{ padding: "50px 0px 20px 0px" }}>
            <h1>Multiple popovers with multiple cards</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingBottom: "20px", textAlign: "center" }}>
            <Alert color="secondary">Example implementation using <a href="https://reactstrap.github.io/">reactstrap</a>.</Alert>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Parent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;