import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
  
export default function MarsData() {
  const [marsData, setMarsData] = useState([]);
  const [processing, setProcessing] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PjLc7bkz2D8b8pUPUhE8UsO9YQMs7mjMZ3WKOPG3');
                setMarsData(res.data);
                setProcessing(false);
                
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    if(processing) {
      return(<div></div>)
    } else {

  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Mars Rovers Image Exploration</h4>
      <Carousel >
        <Carousel.Item className="item" interval={8000}>
          <img
            className="d-block w-100 h-50" 
s               src={marsData.photos[0].img_src}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className = "item" interval={8000}>
          <img
            className="d-block w-100 h-50"
          src={marsData.photos[200].img_src}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <input></input>
    </div>
  );
    }
}
