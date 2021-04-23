import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import FilterModalComponent from '../../component/FilterModalComponent'
import Button from 'react-bootstrap/Button';


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
                <Button variant="primary" onClick={() => handleUpdateShow(true)}>
                    Select your Filters
                </Button>
                <FilterModalComponent
                    showModal = {show}
                    onHideModal = {() => handleUpdateShow(false)}
                >
                </FilterModalComponent>
            </Jumbotron>
        </Container>
    ); 
  }
  

export default HomePage;