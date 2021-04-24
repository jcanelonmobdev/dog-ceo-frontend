import React, { useState } from 'react';

import FilterModalComponent from '../../component/FilterModalComponent'
import ImagesComponent from '../../component/ImagesComponent'
import { Button, Container, Jumbotron , Card } from 'react-bootstrap';


  const HomePage = () => {

    const [show, setShow] = useState(false);
    const handleUpdateShow = (value) => setShow(value);

    React.useEffect(() => {
        //InitializateAll();
        setShow(false);

    }, []); //end useEffect

    return (
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">Welcome To Dog-Ceo Challenge</h1>

               <Card className="col-lg-12 col-12">
                    <Card.Body>
                        <Card.Title>Breed Filters</Card.Title>
                        <Card.Text>
                             You can filter by breeds and / or subbreeds
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleUpdateShow(true)}>
                            Select your Filters
                        </Button>
                        <FilterModalComponent
                            showModal = {show}
                            onHideModal = {() => handleUpdateShow(false)}
                        />
                    </Card.Body>
                </Card>

                {/* aqui va la iteracion de las razas a dibujar */}
                <ImagesComponent
                    breed = "Bulldog"
                    subBreeds = {['Boston', 'French']} 
                    // los subbreeds van con sus imagenes
                />
                <ImagesComponent
                    breed = "Raza 2"
                    subBreeds = {['SubRaza2.1', 'SubRaza2.2', "SubRaza2.3"]} 
                    // los subbreeds van con sus imagenes
                />
            </Jumbotron>
        </Container>
    ); 
  }
  

export default HomePage;