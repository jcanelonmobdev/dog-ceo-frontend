
import React from 'react';
import { ListGroup, Card, Row, Col, Image } from 'react-bootstrap';

const ImageComponent = ({ name, images, onClick }) => {
    return (
        <React.Fragment>
        {
            <ListGroup.Item>
                {
                    name !== "" && <Card.Text> { name } </Card.Text>
                }
                <Row  xs={12} md={12}> 
                {
                    images.map((source, idx) => 
                        <Col key={ idx } xs={2} md={2}>
                            <Card.Text >
                                <Image onClick= { () => onClick(source)}
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

export default ImageComponent;