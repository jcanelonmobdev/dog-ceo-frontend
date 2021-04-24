import React from 'react';
import { ListGroup , Card } from 'react-bootstrap';
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
                            images = {[
                                "https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg",
                                "https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg",
                                "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg",
                                "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10452.jpg",
                                "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10596.jpg",
                                "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10604.jpg",
                                "https://images.dog.ceo/breeds/bulldog-boston/n02096585_1069.jpg"] }
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