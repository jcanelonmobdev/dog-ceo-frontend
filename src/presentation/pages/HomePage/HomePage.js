import React, { useState } from 'react';
import BreedUseCase from '../../../domain/usecase/BreedUseCase'
import FilterModalComponent from '../../component/FilterModalComponent'
import ImageBreedComponent from '../../component/ImageBreedComponent'
import { Button, Container, Jumbotron , Card } from 'react-bootstrap';


    const HomePage = () => {

        const [show, setShow] = useState(false);
        const handleUpdateShow = (value) => setShow(value);

        const breedUseCase = new BreedUseCase();
        const [listBreeds, setListBreeds] = React.useState(
            []
        );

        const InitializateAll = async () => {
            
            setShow(false);
            
            //const data = await breedUseCase.list();
            const data = await breedUseCase.getListAll();
            console.log(data);
            // setListBreeds(
            //     data.map(
            //         element => {
            //             return { ...element, selected: false }
            //         }
            //     )
            // );
            // console.log(listBreeds);
        }


        React.useEffect(() => {
            InitializateAll();

            }, []
        ); //end useEffect

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
                    {/* utilizar el reduce por ejemplo, para determinar si la raza tiene subrazas seleccionadas */}
                    <ImageBreedComponent
                        breed = "Bulldog"
                        subBreeds = {['Boston', 'French']} 
                        // los subbreeds van con sus imagenes
                    />
                    <ImageBreedComponent
                        breed = "Raza 2"
                        subBreeds = {['SubRaza2.1', 'SubRaza2.2', "SubRaza2.3"]} 
                        // los subbreeds van con sus imagenes
                    />
                </Jumbotron>
            </Container>
        ); 
    }
  

export default HomePage;