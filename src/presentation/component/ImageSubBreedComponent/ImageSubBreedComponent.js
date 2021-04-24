
import React from 'react';
import { ListGroup, Card, Row, Col, Image } from 'react-bootstrap';

const ImageSubBreedComponent = ({ subBreed }) => {
    return (
        <React.Fragment>
        {
            <ListGroup.Item>
                <Card.Text> { subBreed } </Card.Text>
                <Row  xs={12} md={12}>
                    <Col xs={2} md={2}>
                        <Card.Text>
                            <Image 
                                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_1307.jpg" thumbnail   />
                        </Card.Text>
                    </Col>
                </Row>
            </ListGroup.Item>
        }
        </React.Fragment>
    );
}

export default ImageSubBreedComponent;