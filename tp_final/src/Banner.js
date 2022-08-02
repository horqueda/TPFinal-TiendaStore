import './Banner.css';
import React from "react";
import { Carousel } from 'react-bootstrap';
let Banner = () => {
    return ( 
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="../assets/Banner2.jpg"
                        alt="RemeraDamaBanner1"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="../assets/Banner1.jpg"
                        alt="RemerasDobladas"
                    />                    
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="../assets/Banner3.jpg"
                        alt="RemeraHombre"
                    />                      
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="../assets/Unable.jpg"
                        alt="TiendaStore"
                    />                      
                </Carousel.Item>
            </Carousel>
    );
};
export default Banner