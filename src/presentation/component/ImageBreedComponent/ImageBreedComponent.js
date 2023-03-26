import React from 'react';
import { Card, Collapse, ListGroup } from 'react-bootstrap';
import ImageComponent from '../ImageComponent/ImageComponent'

const ImageBreedComponent = ({ breed, subbreeds, images, maxImages, sizeImages, collapse, onSetCollapse, onImageClick  }) => {
    return (
        <React.Fragment>
        {   
            <Card className="col-lg-12 col-12" >
                <Card.Body>
                    <Card border="secondary">
                        <Card.Header as="h5" onClick={() => onSetCollapse(!collapse)}>{ breed + " hola" }</Card.Header>
                        <Collapse in={!collapse}>
                        <ListGroup>
                        {
                            // si es solo raza
                            subbreeds.length === 0 ? 
                                <ImageComponent
                                    images = { images.slice(0, maxImages) }
                                    size = { sizeImages }
                                    onClick = { (src) => onImageClick(src) }
                                />
                                :
                            // si tiene subrazas
                            subbreeds.map((sb, idx) =>
                                <ImageComponent
                                    key = { idx }
                                    name = { sb.name }
                                    images = { images.filter( img => img.includes(sb.name) ).slice(0, maxImages) }
                                    size = { sizeImages }
                                    onClick = { (src) => onImageClick(src, sb.name) }
                                />
                            )
                        }
                        </ListGroup>
                        </Collapse>
                    </Card>
                </Card.Body>
            </Card>
        }
        </React.Fragment>
    );
}

// Se que este tipo de cosas se implementan para mejorar la programacion
// dejo esto comentado como un ejemplo, pero no se refiere a lo que esta actualmente

// ImageBreedComponent.defaultProps = {
//     breed: "",
//     subbreeds: []
// }

// ImageBreedComponent.propTypes = {
//     subBreeds: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         state: PropTypes.oneOfType([PropTypes.bool]).isRequired,
//         value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   }))
// }


export default ImageBreedComponent;