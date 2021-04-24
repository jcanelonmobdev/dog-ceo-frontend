import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const FilterModalComponent = ({ showModal, onHideModal, breeds }) => {
    return (
        <React.Fragment>
        {
            <Modal
                show={showModal}
                onHide={() => onHideModal()}
                backdrop="static"
                keyboard={false}
            >
               
                <Modal.Header closeButton>
                    <Modal.Title>Breed Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control as="select" htmlSize={6} custom>
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

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Select a subbreed</Form.Label>
                            <Form.Check type="checkbox" label="Check me out" />                       
                            <Form.Check type="checkbox" label="Check me out" />
                            <Form.Check type="checkbox" label="Check me out" />
                            <Form.Check type="checkbox" label="Check me out" />
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </Form>
                
                </Modal.Body>
                <hr/>
                <Modal.Body>
                    Seleccione las Razas y Subrazas a filtrar.
                </Modal.Body>
                <br/>
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