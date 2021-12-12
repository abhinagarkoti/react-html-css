import React from 'react'
import Slider from "react-slick"
import "./Services.css"
import { Container } from 'react-bootstrap'

function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="prod-main">

            <div style={{ marginTop: "30px" }}>
                <span style={{ fontSize: "2rem" }}>Services</span>
            </div>
            <div>
                <Container>
                    <Slider {...settings}>
                        <div className="cardss">
                            <div className="cards-products" style={{ width: "90%", height: "90%" }}></div>
                        </div>
                        <div className="cardss">
                            <div className="cards-products" style={{ width: "90%", height: "90%" }}></div>
                        </div>
                        <div className="cardss">
                            <div className="cards-products" style={{ width: "90%", height: "90%" }}></div>
                        </div>
                        <div className="cardss">
                            <div className="cards-products" style={{ width: "90%", height: "90%" }}></div>
                        </div>
                        <div className="cardss">
                            <div className="cards-products" style={{ width: "90%", height: "90%" }}></div>
                        </div>
                        <div>
                            <div className="cards-products" style={{ width: "90%", height: "90%" }}></div>
                        </div>
                    </Slider>
                </Container>
            </div>
            <div style={{ marginTop: "50px" }}>
                <span >Lorem ipsum dolor sit amet.</span>
            </div>
        </div >
    )
}

export default Services
