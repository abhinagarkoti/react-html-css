import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./LetsDiscuss.css"

function LetsDiscuss() {
    return (
        <div style={{ backgroundColor: "skyblue", marginTop: "21vh" }}>
            <Container className="main-div">
                <Row style={{ height: "30vh", display: "flex", justifyContent: "space-between" }}>
                    <Col md={6} sm={10} className="colfortext">
                        <div style={{ textAlign: "left" }}>
                            <span style={{ fontSize: "2rem" }}>Lets Discuss</span>
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <span style={{ fontSize: "1rem" }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt? <br /> Lorem, ipsum dolor. </span>
                        </div>
                    </Col>
                    <Col md={6} sm={10} className="inputdiv">
                        <div className="enter" style={{ borderRadius: "5px", backgroundColor: "white", padding: "4px", borderRadius: "30px" }}>
                            <input type="text" className="input"></input>
                            <button className="btnbtn" >Sign Up</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LetsDiscuss
