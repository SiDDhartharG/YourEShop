import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer  style={{backgroundColor:'#3b4044'}}>
            <Container>
                <Row>
                    <Col className="text-center p-3" style={{color:'white'}}>
                        Copyright &copy; YourEShop
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
