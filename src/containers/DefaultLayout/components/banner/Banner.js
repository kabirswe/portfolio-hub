import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./static/Banner.scss";

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <Container>
                <Row>
                    <Col md={12}>
                        <div class="header-area">
                            <div class="header-title">
                                <h1>A Conference for <span> [Software Product]</span> Manager</h1>
                                <p>We Seamlessly merge two key components-economics and information technology</p> 
                            </div>
                            <div class="header-counter">
                                <div class="counter">
                                    <h1>34</h1>
                                    <p>speaker</p>
                                </div>
                                <div class="counter">
                                    <h1>88</h1>
                                    <p>themes</p>
                                </div>
                            </div> 
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Banner;
