import React from 'react';
import { Button, Col, Card, Form, Image, Modal, Row  } from 'react-bootstrap';

const ImageModalComponent = ({ showModal, onHideModal, source }) => {
    
    const data = source.split(';');

    return (
        <React.Fragment>
        {
            <Modal
                show={showModal}
                onHide={() => onHideModal()}
                keyboard={true}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title><h2>{data[0]}</h2><h3>{data[1]}</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row  xs={12} md={12}> 
                            <Col xs={12} md={12} align='center'>
                                <Card.Text >
                                    <Image  
                                        src={ `${data[2]}` } fluid />
                                </Card.Text>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                 
                    <Button variant="primary" onClick={() => onHideModal()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        }
        </React.Fragment>
            
      );
}


export default ImageModalComponent;