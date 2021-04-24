import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FilterModalComponent from '../../component/FilterModalComponent'
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';
import ImageSubBreedComponent from '../ImageSubBreedComponent/ImageSubBreedComponent'


const ImageBreedComponent = ({ breed, subBreeds  }) => {
    return (
        <React.Fragment>
        {
            <Card>
                <Card.Header as="h5">{ breed }</Card.Header>
                <ListGroup>
                    {
                        subBreeds.map((name, idx) =>
                        
                            <ImageSubBreedComponent
                                key = { idx }
                                subBreed = { name }
                            />

                        )
                    }
                </ListGroup>
            </Card>
        }
        </React.Fragment>
    );
}

ImageBreedComponent.defaultProps = {
    breed: "",
    subBreeds: []
}

// ImageBreedComponent.propTypes = {
//     subBreeds: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         //label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//         state: PropTypes.oneOfType([PropTypes.bool]).isRequired,
//         value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   }))
// }


export default ImageBreedComponent;