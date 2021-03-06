import React from 'react';
import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap';

const ImageComponent = ({ name, images, size, onClick }) => {

    const sizeNumber = size === 'small' ? 2: size === 'medium' ? 3 : 4;
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
                        <Col key={ idx } xs={sizeNumber} md={sizeNumber}>
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