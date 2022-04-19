import React from 'react';
import "./Body.css"
import Carousel from "react-bootstrap/Carousel"
// import Afterbody from "./Afterbody"

export default function Body()
{
    return(
      <>
        <div className = "sliding">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.rebliss.in/webpic/banner5.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.rebliss.in/webpic/banner6.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.rebliss.in/webpic/mainbanner2.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
        <h1 className = "meet">Meet our ReBLISSians</h1>
        <div className = 'video'>

        </div>
        <div className ="benefits">
         <img src = "https://www.rebliss.in/webpic/benefits1.jpeg" width = "100%"/>
        </div>
        <div classname = "Categories"> 
        <img src="https://www.rebliss.in/webpic/categories1.jpeg" width ="100%"/>

        </div>
        {/* <Afterbody/> */}
    </>
    );
}
    