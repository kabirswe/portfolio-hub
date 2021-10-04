import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./static/Media.scss"
const Media = () => {
    return ( 
        <div className="media-wrapper">
        <Container>
            <Row>
                <Col md={12}>
                    <div className="meadia-icon">
                        <img src="#" alt="icon" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Media;