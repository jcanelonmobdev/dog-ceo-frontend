import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const FilterModalComponent = ({ showModal, onHideModal}) => {
    return (
        <>
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
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select a breed
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                        
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
        </>
      );
}


export default FilterModalComponent;