import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FilterModalComponent from '../../component/FilterModalComponent'
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import ImageBreedComponent from '../ImageBreedComponent/ImageBreedComponent';


const ImagesComponent = () => {
    return (
        <>
            <Card className="col-lg-12 col-12">
                    <Card.Body>
                        <Card.Title>Images of selected breeds</Card.Title>
                            <ImageBreedComponent
                                breed = "Bulldog"
                                subBreeds = {['Boston', 'French']} 
                            />
 
                              

                        {/* <Card>
                            <Card.Header as="h5">Bulldog</Card.Header>
                            
                            <ListGroup>

                                <ListGroup.Item>
                                    <Card.Text>Boston</Card.Text>
                                    <Row  xs={12} md={12}>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg" thumbnail rounded/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_10768.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_10846.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_11180.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_1295.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_1307.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_1311.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-boston/n02096585_1313.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Card.Text>French</Card.Text>
                                    <Row  xs={12} md={12}>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/IMG_0846.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/IMG_1657.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_10204.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_10564.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_110.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_1114.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_1119.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_11207.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>  */}
                        {/* Raza */}

                        {/* <Card>
                            <Card.Header as="h5">Hound</Card.Header>
                            
                            <ListGroup>

                                <ListGroup.Item>
                                    <Card.Text>Afghan</Card.Text>
                                    <Row  xs={12} md={12}>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" thumbnail/>
                                            </Card.Text>
                                        </Col>
                                        
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Card.Text>French</Card.Text>
                                    <Row  xs={12} md={12}>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                          
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/IMG_0846.jpg" thumbnail rounded/>
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/IMG_1657.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_10204.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_10564.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                        
                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_110.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_1114.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_1119.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>

                                        <Col xs={2} md={2}>
                                            <Card.Text>
                                                <Image 
                                                src="https://images.dog.ceo/breeds/bulldog-french/n02108915_11207.jpg" thumbnail   />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>  */}
                        {/* Raza */}

                    </Card.Body>
                </Card>
        </>
      );
}


export default ImagesComponent;