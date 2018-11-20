import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import image01Jpg from '../img/slider-images/image01.jpg';
import image02Jpg from '../img/slider-images/image02.jpg';
import image03Jpg from '../img/slider-images/image03.jpg';
import image04Jpg from '../img/slider-images/image04.jpg';

const offset = 50;

const styles = {
  fill: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
  } as React.CSSProperties,
};

class ImageCarousel extends React.Component {
  public state = {
    height: window.innerHeight - offset,
  };

  public updateDimensions() {
    const newHeight = window.innerHeight - offset;
    this.setState({
      height: newHeight,
    });
  }

  public componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
  public render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div
            style={{
              ...styles.fill,
              backgroundImage: `url(${image01Jpg})`,
              height: `${this.state.height}px`,
            }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <div
            style={{
              ...styles.fill,
              backgroundImage: `url(${image02Jpg})`,
              height: `${this.state.height}px`,
            }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <div
            style={{
              ...styles.fill,
              backgroundImage: `url(${image03Jpg})`,
              height: `${this.state.height}px`,
            }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <div
            style={{
              ...styles.fill,
              backgroundImage: `url(${image04Jpg})`,
              height: `${this.state.height}px`,
            }}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ImageCarousel;
