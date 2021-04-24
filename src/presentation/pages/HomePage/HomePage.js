import React, { useState } from 'react';
import BreedUseCase from '../../../domain/usecase/BreedUseCase'
import FilterModalComponent from '../../component/FilterModalComponent'
import ImageBreedComponent from '../../component/ImageBreedComponent'
import { Button, Container, Jumbotron , Card } from 'react-bootstrap';


    const HomePage = () => {

        // manejo del estado del Modal de filtros 
        const [show, setShow] = useState(false);
        const handleUpdateShow = (value) => setShow(value);

        // caso de uso
        const breedUseCase = new BreedUseCase();
        
        // manejo de datos de razas y subrazas
        const [listBreeds, setListBreeds] = React.useState([]);
        
        const hadleUpdateBreeds = (arr, id, value) => {
            const newList = arr.map(element => {
                if (element.id === id)
                    return { ...element, selected: value }
                else
                    return element;
            });
            setListBreeds(newList);
        }




        // inicializador de datos
        const InitializateAll = async () => {
            
            setShow(false);
            const data = await breedUseCase.getListAll();

            setListBreeds(
                data.map(
                    element => {
                        return { ...element }
                    }
                ) 
            );
            console.log(listBreeds);
        }

        // .. 
        React.useEffect(() => {
            InitializateAll();
          }, []);


        // ..
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
                                breeds = {listBreeds}
                                showModal = {show}
                                onHideModal = {() => handleUpdateShow(false)}
                                onChangeBreed = { (id, status) => hadleUpdateBreeds(listBreeds, id, status)}
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