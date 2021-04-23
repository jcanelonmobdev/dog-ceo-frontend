import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FilterModalComponent from '../../component/FilterModalComponent'
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import ImagesComponent from '../../component/ImagesComponent'


  const HomePage = () => {

    const [show, setShow] = useState(false);
    const handleUpdateShow = (value) => setShow(value);

    React.useEffect(() => {
        //InitializateAll();
        setShow(false);

        // logica para cargar una cotizacion
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
                <ImagesComponent>
                </ImagesComponent>
            </Jumbotron>
        </Container>
    ); 
  }
  

export default HomePage;