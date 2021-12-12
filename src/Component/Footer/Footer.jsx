import React from 'react'
import { Container } from 'react-bootstrap'
import "./Footer.css"

function Footer() {
    return (
        <div>
            <Container className="footer">
                <div className="texts align" style={{ textAlign: "left" }}>
                    <span style={{ fontSize: ".8rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Fugit eligendi inventore repellat quos <br />voluptatum numquam!</span>
                </div>
                <div className="texts">
                    <span style={{ fontSize: "1.5rem" }}>Links <br /></span>
                    <span style={{ fontSize: ".8rem" }}>Our Clients <br /> Privacy Policy <br /> Our Benifits</span>
                </div>
                <div className="texts">
                    <span style={{ fontSize: "1.5rem" }}>Information <br /></span>
                    <span style={{ fontSize: ".8rem" }}>Our Clients <br /> Privacy Policy <br /> Our Benifits</span>
                </div>
                <div className="texts">
                    <span style={{ fontSize: "1.5rem" }}>Contact Us <br /></span>
                    <span style={{ fontSize: ".8rem" }}>+9187654368875 +1-767867565 <br /> info@techreqquest <br />
                        84 Block A,Sector 4Noida UP,201301
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default Footer
