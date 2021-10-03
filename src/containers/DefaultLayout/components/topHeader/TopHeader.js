import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './static/TopHeader.scss';

const TopHeader = () => {
    return (
        <div className="top-header-wrapper">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="top-header-block">
                            <div className="top-header-social">
                                <a href="#"><i class="fab fa-twitter"></i></a> 
                                <a href="#"> <i class="fab fa-facebook-f"></i></a> 
                                <a href="#"> <i class="fab fa-linkedin-in"></i></a> 
                                <a href="#"> <i class="fab fa-linkedin-in"></i></a>                
                                <a href="#"> <i class="fab fa-instagram"></i></a>
                            </div>
                            <div className="info-blog">
                                <p> <img src="#" alt="info-img"/>92 Bowery St. New Your NY 10013</p>
                                <p> <img src="#" alt="info-img"/>thepascal@mail.com</p>
                                <p> <img src="#" alt="info-img"/>Englaish</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopHeader;