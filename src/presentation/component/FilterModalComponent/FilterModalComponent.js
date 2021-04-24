import React from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

const FilterModalComponent = ({ showModal, onHideModal, breeds }) => {
    return (
        <React.Fragment>
        {
            <Modal
                show={showModal}
                onHide={() => onHideModal()}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-70w"
                aria-labelledby="example-custom-modal-styling-title"
            >
               
                <Modal.Header closeButton>
                    <Modal.Title>Breed Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Row  xs={12} md={12}> 
                            <Col xs={4} md={4}>
                                <Form.Group controlId="formBreeds">
                                    <Form.Label>Select breed</Form.Label>
                                    <Form.Control as="select" htmlSize={10} custom>
                                    {
                                        breeds.map((e, idx) => 
                                            <option key={idx}>{e.breed}</option>
                                        )
                                    }
                                    </Form.Control>
                                    <Form.Text className="text-muted">
                                        Then you can select one or all subreeds
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={8} md={8}>
                                <Form.Group controlId="formSubbreeds">
                                    <Form.Label>Select subbreed</Form.Label>
                                    <Form.Check type="checkbox" label="Check me out" />                       
                                    <Form.Check type="checkbox" label="Check me out" />
                                    <Form.Check type="checkbox" label="Check me out" />
                                    <Form.Check type="checkbox" label="Check me out" />
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onHideModal()}>
                    Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        }
        </React.Fragment>
            
      );
}


export default FilterModalComponent;