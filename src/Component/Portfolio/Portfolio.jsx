import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Portfolio.css"

function Portfolio() {

    return (
        <div style={{ marginTop: "20px" }}>

            <div style={{ marginTop: "30px" }}>
                <span style={{ fontSize: "2rem" }}>Portfolio / Case studies</span>
            </div>
            <Container>
                <Row style={{ marginTop: "65px" }} className="card-contain">
                    <Col md={{ span: 3, offset: 1 }} sm={8} xs={8} className="Cards"></Col>
                    <Col md={{ span: 3, offset: 1 }} sm={8} xs={8} className="Cards" ></Col>
                    <Col md={{ span: 3, offset: 1 }} sm={8} xs={8} className="Cards"></Col>
                </Row>
            </Container>
            <div style={{ marginTop: "95px" }}>
                <span>Lorem ipsum dolor sit.</span>
            </div>
        </div>
    )
}

export default Portfolio
