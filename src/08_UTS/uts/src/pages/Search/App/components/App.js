import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';

import SearchForm from './SearchForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.fetchImage = this.fetchImage.bind(this);
  }

  fetchImage({ keyword }) {
    this.props.fetchImage(keyword);
  }

  render() {
    const { loading, images } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <h1>Image Gallery</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchForm onSubmit={this.fetchImage} />
          </Col>
        </Row>
        { loading && <div>loading...</div> }
        { !loading && images && images.length > 0 &&
          <Row>
            { images.map((url, index) => {
              return <Col key={index} xs="12" sm="6" md="4" lg="3">
                <Card>
                  <CardImg src={url} />
                </Card>
              </Col>
            })}
          </Row>
        }
      </Container>
    );
  }
}

export default App;
