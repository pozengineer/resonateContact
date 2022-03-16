import React, { useState } from "react";
import { Col, Card, Button } from 'react-bootstrap';
import { MyVerticallyCenteredModal } from './contactModal';
import { Link } from 'react-router-dom';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const ContactCard = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col sm={12} md={4} className='projectColumn'>
            <Card>
                <Card.Body>
                    <Link to={`/contacts/${props.contact.id}`} className='nav-link'>
                        <Card.Title>{props.contact.name}</Card.Title>
                    </Link>
                    <Card.Text>
                        {props.contact.phone}
                    </Card.Text>
                    <>
                        <Button className="infoButton" variant="primary" onClick={() => setModalShow(true)}>
                            More Info
                        </Button>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            {...props}
                        />
                    </>
                </Card.Body>
            </Card>
        </Col>
    );
}

// key={index}
// id={item.id}
// name={item.name}
// company={item.company.name}
// city={item.address.city}
// phone={item.phone}
// email={item.email}