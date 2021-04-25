import React from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

const FilterModalComponent = ({ breeds, showModal, onHideModal, onClearSelection, onChangeBreed, onChangeSubBreed, onSelectAll }) => {

    const [breedSelected, setBreedSelected] = React.useState(-1);

    return (
        <React.Fragment>
        {
            <Modal
                show={showModal}
                onHide={() => onHideModal()}
                backdrop="static"
                keyboard={false}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Breed Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Row  xs={12} md={12}> 
                            <Col xs={6} md={6}>
                                <Form.Group controlId="formBreeds">
                                    <Form.Label>Select breed</Form.Label>
                                    <Form.Control as="select" htmlSize={10} custom>
                                    {
                                        // al dar click setea como breed seleccionado
                                        breeds.map((e, idx) => 
                                            <option 
                                                key={idx} 
                                                selected = {breedSelected === e.id ? `"selected"`: '' }
                                                onClick={ () => setBreedSelected(e.id)}
                                            >
                                                {
                                                    e.subbreeds.length === 0 ? `${e.breed}` :  `${e.breed} [sb: ${e.subbreeds.length - e.subbreeds.filter(sb => sb.selected).length}]`
                                                }

                                                {/* {e.breed} {e.subbreeds.length - e.subbreeds.filter(sb => sb.selected).length} */}
                                            </option>
                                        )
                                    }
                                    </Form.Control>
                                    <Form.Text className="text-muted">
                                        Then you can select one or all subreeds
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form.Group controlId="formSubbreeds">
                                    <Form.Label>Select subbreed</Form.Label>
                                    {
                                        breeds.filter(b => b.id === breedSelected).map((e, idx) => {
                                            
                                            return (e.subbreeds.length === 0 ? 
                                                <>
                                                    {/* si no tiene subrazas */}
                                                    <Form.Check 
                                                        key = { idx }
                                                        type = "checkbox" 
                                                        onChange = {(ev) => onChangeBreed(e.id, ev.target.checked)}
                                                        label = {e.breed} 
                                                        checked = {e.selected} />
                                                </> :
                                                <>
                                                    {/* si tiene subrazas */}
                                                    <Form.Check 
                                                        key = { idx }
                                                        type="checkbox" 
                                                        onChange= { (ev) => onSelectAll(e.id, ev.target.checked) }
                                                        variant="success"
                                                        label=" < select all subreeds > " 
                                                        checked = { e.selected }
                                                    />
                                                    {
                                                        e.subbreeds.map(sb =>
                                                            <Form.Check 
                                                                key = { sb.id}
                                                                id = {sb.id} 
                                                                type = "checkbox" 
                                                                onChange = { (ev) => onChangeSubBreed(e.id, sb.id, ev.target.checked) }
                                                                label = {sb.name} 
                                                                checked={sb.selected}  
                                                            />
                                                        )     
                                                    }

                                                </>
                                            )
                                        })
                                    }
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => onClearSelection()}>
                        Clear
                    </Button>
                    <Button variant="secondary" onClick={() => onHideModal()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        }
        </React.Fragment>
            
      );
}


export default FilterModalComponent;