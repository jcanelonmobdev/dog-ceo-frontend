import React, { useState } from 'react';
import BreedUseCase from '../../../domain/usecase/BreedUseCase'
import ImageBreedUseCase from '../../../domain/usecase/ImageBreedUseCase'
import FilterModalComponent from '../../component/FilterModalComponent'
import ImageBreedComponent from '../../component/ImageBreedComponent'
import { Button, Container, Jumbotron , Card } from 'react-bootstrap';


    const HomePage = () => {

        // manejo del estado del Modal de filtros 
        const [show, setShow] = useState(false);
        const handleUpdateShow = (value) => setShow(value);

        // caso de uso
        const breedUseCase = new BreedUseCase();
        const imageBreedUseCase = new ImageBreedUseCase();
        
        // manejo de datos de razas y subrazas
        const [listBreeds, setListBreeds] = React.useState([]);
        
        const hadleUpdateBreeds = (arr, id, value) => {
            const newList = arr.map(element => {
                if (element.id === id)
                {
                    return { ...element, selected: value }
                }
                else
                    return element;
            });
            setListBreeds(newList);
        }

        const hadleUpdateSubBreeds = (arr, idBreed, id, value) => {
            let verifyAllSubreedsAsSelected = true;

            const newList = arr.map(element => {

                if (element.id === idBreed)
                {
                    const newSubBreed = element.subbreeds.map(sb => {

                        if (sb.id === id)
                        {
                            verifyAllSubreedsAsSelected = verifyAllSubreedsAsSelected && value;
                            return { ...sb, selected: value}
                        }
                        else
                        {
                            verifyAllSubreedsAsSelected = verifyAllSubreedsAsSelected && sb.selected;
                            return sb;
                        }
                    });
                    return { ...element, selected: verifyAllSubreedsAsSelected, subbreeds: newSubBreed}
                }
                return element;
            });
            setListBreeds(newList)
        }

        // seleccionar o deseleccionar todas las subrazas de una raza
        const handleUpdateSelectAllSubBreeds = (arr, idBreed, value) => {
            const newList = arr.map(element => {

                if (element.id === idBreed)
                {
                    const newSubBreed = element.subbreeds.map(sb => {
                        return { ...sb, selected: value}
                    });
                    return { ...element, selected: value, subbreeds: newSubBreed}
                }
                return element;
            });
            setListBreeds(newList)
        }

        // limpiar la seleccion de razas y subrazas
        const handleUpdateClearSelection = (arr) => {
            const newList = arr.map(element => {

                const newSubBreed = element.subbreeds.map(sb => {
                    return { ...sb, selected: false}
                });
                return { ...element, selected: false, subbreeds: newSubBreed}
            });
            setListBreeds(newList)
        }

        // inicializador de datos
        const InitializateAll = async () => {
            
            setShow(false);
            const data = await breedUseCase.getListAll();
            
            // asingar imagenes a las razas / async
            const asyncImages = await Promise.all(data.map(async (element) => {
                const images = await imageBreedUseCase.getImages(element.breed);
                return {...element, images: images}
            }))

            setListBreeds(
                asyncImages.map(element => {
                        return { ...element }
                    }
                ) 
            );
        }

        // .. 
        React.useEffect(() => {
            InitializateAll();
          }, []);

        // ..
        return (
            <React.Fragment>
            {
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
                                breeds = { listBreeds }
                                showModal = { show }
                                onHideModal = { () => handleUpdateShow(false) }
                                onClearSelection = { () => handleUpdateClearSelection(listBreeds) } 
                                onChangeBreed = { (id, status) => hadleUpdateBreeds(listBreeds, id, status) }
                                onChangeSubBreed = { (idBreed, id, status) => hadleUpdateSubBreeds(listBreeds, idBreed, id, status) }
                                onSelectAll = { (idBreed, status) => handleUpdateSelectAllSubBreeds(listBreeds, idBreed, status) }
                            />
                        </Card.Body>
                    </Card>

                    {
                        listBreeds.map( (element, idx) => 
                            // si es raza sola y esta seleccionada
                            element.subbreeds.length === 0 && element.selected ?
                                <ImageBreedComponent
                                    key = { idx }
                                    breed = { element.breed }
                                    subbreeds = { element.subbreeds } 
                                    images = { element.images }
                                />
                                : 
                            // si tiene subrazas seleccionadas
                            element.subbreeds.filter(sb => sb.selected).length > 0 &&
                                <ImageBreedComponent
                                        key = { idx }
                                        breed = { element.breed }
                                        subbreeds = { element.subbreeds.filter(sb => sb.selected) } 
                                        images = { element.images }
                                />
                        )
                    }
                </Jumbotron>
            </Container>
            }
            </React.Fragment>
            
        ); 
    }
  

export default HomePage;