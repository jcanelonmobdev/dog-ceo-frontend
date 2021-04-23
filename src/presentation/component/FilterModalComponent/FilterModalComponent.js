import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



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
                Seleccione las Razas y Subrazas a filtrar.
            </Modal.Body>
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