import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class ResultSlider extends Component {
    render() {
        return(
            <Carousel>

            
            <Carousel.Item>
              <img
                className="d-block w-25"
                src={require('../../images/logo.jpg')}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Appelet Defenders Inc.</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>

            
            <Carousel.Item>
              <img
                className="d-block w-25"
                src={require('../../images/cacj-logo.jpg')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>California State Bar</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
              <img
                className="d-block w-25"
                src={require('../../images/5.png')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Thir</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-25"
                src={require('../../images/ca-state-bar.png')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Thir</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-25"
                src={require('../../images/5.png')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Thir</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-25"
                src={require('../../images/6.png')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Thir</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-25"
                src={require('../../images/7.png')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>H</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-25"
                src={require('../../images/8.png')}
                alt="Super Lawyers"
              />
              <Carousel.Caption>
                <h3>Super Laywers </h3>
                <p>Awarded </p>
              </Carousel.Caption>
            </Carousel.Item>


          </Carousel>
        )
    }
}

export default ResultSlider;
