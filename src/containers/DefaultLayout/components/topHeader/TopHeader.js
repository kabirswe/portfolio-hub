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
                            <p>Email Us: email.9009@gmail.com</p>
                            <p>Call For Order Now: (215) 203-6212</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopHeader;