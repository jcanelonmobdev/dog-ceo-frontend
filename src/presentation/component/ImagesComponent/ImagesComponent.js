import Card from 'react-bootstrap/Card';
import ImageBreedComponent from '../ImageBreedComponent/ImageBreedComponent';


const ImagesComponent = ( { breed, subBreeds }) => {
    return (
        <>
            <Card className="col-lg-12 col-12">
                    <Card.Body>
                            <ImageBreedComponent
                                breed = { breed }
                                subBreeds = { subBreeds } 
                            />
 
                    </Card.Body>
                </Card>
        </>
      );
}

export default ImagesComponent;