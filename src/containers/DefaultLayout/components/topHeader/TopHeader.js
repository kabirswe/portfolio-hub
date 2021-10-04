import React from 'react';
// import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Twitter from './static/image/twitter.svg';
import Facebook from './static/image/facebook.svg';
import Linkedin from './static/image/linkedin.svg';
import './static/TopHeader.scss';

export const TopHeader = () => {
    return (
        <div className="top-header-wrapper">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="top-header-block">
                            <div className="top-header-social">
                            {/* <Link to=""><img src={Facebook} alt="social icon" /></Link> */}
                                <img src={Twitter} alt="serch-img"/>  
                                <img src={Facebook} alt="serch-img"/>  
                                <img src={Linkedin} alt="serch-img"/>  
                                <img src={Facebook} alt="serch-img"/>  
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