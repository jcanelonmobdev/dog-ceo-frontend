
import React from 'react';
import { ListGroup, Card, Row, Col, Image } from 'react-bootstrap';

const ImageSubBreedComponent = ({ subBreed, images }) => {
    return (
        <React.Fragment>
        {
            <ListGroup.Item>
                <Card.Text> { subBreed } </Card.Text>{ console.log(images)}
                <Row  xs={12} md={12}>
                {
                    images.map((source, idx) => 
                        <Col key={ idx } xs={2} md={2}>
                            <Card.Text>
                                <Image 
                                    src={ `${source}` } thumbnail   />
                            </Card.Text>
                        </Col>
                    )
                }
                </Row>
            </ListGroup.Item>
        }
        </React.Fragment>
    );
}

export default ImageSubBreedComponent;