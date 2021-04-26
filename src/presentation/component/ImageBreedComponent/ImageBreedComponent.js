import React from 'react';
import { ListGroup , Card } from 'react-bootstrap';
import ImageComponent from '../ImageComponent/ImageComponent'

const ImageBreedComponent = ({ breed, subbreeds, images, onImageClick  }) => {
    return (
        <React.Fragment>
        {   
            <Card className="col-lg-12 col-12" >
                <Card.Body>
                    <Card  border="secondary">
                        <Card.Header as="h5">{ breed }</Card.Header>
                        <ListGroup>
                        {
                            // si es solo raza
                            subbreeds.length === 0 ? 
                                <ImageComponent
                                    images = { images.slice(0, 12) }
                                    onClick = { (src) => onImageClick(src) }
                                />
                                :
                            // si tiene subrazas
                            subbreeds.map((sb, idx) =>
                                <ImageComponent
                                    key = { idx }
                                    name = { sb.name }
                                    images = { images.filter( img => img.includes(sb.name) ).slice(0, 12) }
                                    onClick = { (src) => onImageClick(src, sb.name) }
                                />
                            )
                        }
                        </ListGroup>
                    </Card>
                </Card.Body>
            </Card>
        }
        </React.Fragment>
    );
}

// ImageBreedComponent.defaultProps = {
//     breed: "",
//     subbreeds: []
// }

// ImageBreedComponent.propTypes = {
//     subBreeds: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         //label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//         state: PropTypes.oneOfType([PropTypes.bool]).isRequired,
//         value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   }))
// }


export default ImageBreedComponent;