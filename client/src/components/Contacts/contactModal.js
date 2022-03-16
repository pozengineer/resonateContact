import React from "react";
import { Row, Col, Modal, Button } from 'react-bootstrap';
import "./style.css";

export const MyVerticallyCenteredModal = (props) => {

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='contactModal'>
                <Modal.Title id="contained-modal-title-vcenter">
                   {props.contact.id} {props.contact.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='contactModal'>
                <Row>
                    <Col sm={4}>
                        <h4> Phone: </h4>
                    </Col>
                    <Col sm={8}>
                        <h5> {props.contact.phone} </h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <h4> Company: </h4>
                    </Col>
                    <Col sm={8}>
                        <h5> {props.contact.company.name} </h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <h4> City: </h4>
                    </Col>
                    <Col sm={8}>
                        <h5> {props.contact.address.city} </h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <h4> Email: </h4>
                    </Col>
                    <Col sm={8}>
                        <h5> {props.contact.email} </h5>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className='contactModal'>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
