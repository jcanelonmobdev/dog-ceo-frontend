import React, { useState } from 'react';
import BreedUseCase from '../../../domain/usecase/BreedUseCase'
import ImageBreedUseCase from '../../../domain/usecase/ImageBreedUseCase'
import FilterModalComponent from '../../component/FilterModalComponent'
import ImageBreedComponent from '../../component/ImageBreedComponent'
import { Button, Card, Col, Container, Dropdown, Jumbotron, Row } from 'react-bootstrap';
import ImageModalComponent from '../../component/ImageModalComponent';

    const HomePage = () => {

        // manejo del estado del Modal de filtros 
        const [showFilterModal, setShowFilterModal] = useState(false);
        const handleUpdateShowFilterModal = (value) => setShowFilterModal(value);

        // manejo del estado del Modal para mostrar la imagen clickeada
        const [showImageModal, setShowImageModal] = useState(false);
        const handleUpdateShowImageModal = (value) => setShowImageModal(value);

        const [imageSrcModal, setImageSrcModal] = useState('');
        const handleUpdateSrcModal = (src) => setImageSrcModal(src);

        const showImageSelected = (src, breed, subbreed) => {
            src =  `${breed};${subbreed};${src}`;
            handleUpdateSrcModal(src);
            handleUpdateShowImageModal(true);
        }

        // manejo de propiedades de la lista de imagenes
        const [maxImageList, setMaxImageList] = useState(5);
        const handleUpdateMaxImageList = (max) => setMaxImageList(max);

        const [sizeImageList, setSizeImageList] = useState('small');
        const handleUpdateSizeImageList = (size) => setSizeImageList(size);

        // caso de uso
        const breedUseCase = new BreedUseCase();
        const imageBreedUseCase = new ImageBreedUseCase();
        
        // manejo de datos de razas y subrazas
        const [listBreeds, setListBreeds] = React.useState([]);
        
        const hadleUpdateBreeds = (arr, type, id, value) => {
            const newList = arr.map(element => {
                if (element.id === id)
                {
                    if (type === 'selected')
                    {
                        return { ...element, selected: value }
                    }
                    else if (type === 'collapse')
                    {
                        return { ...element, collapse: value }
                    }
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

        // expandir o colapsar todas las razas
        const handleUpdateExpandCollapseAll = (arr, value) => {
            const newList = arr.map(element => {
                return { ...element, collapse: value }
            });
            setListBreeds(newList)
        } 

        // inicializador de datos
        const InitializateAll = async () => {
            
            setShowFilterModal(false);
            setMaxImageList(5);
            setSizeImageList('small');
            const data = await breedUseCase.getListAll();
            
            // asingar imagenes a las razas / async
            const asyncImages = await Promise.all(data.map(async (element) => {
                const images = await imageBreedUseCase.getImages(element.breed);
                return {...element, images: images}
            }))

            setListBreeds(
                asyncImages.map(element => {
                        return { ...element, collapse: false }
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
                    <FilterModalComponent
                        breeds = { listBreeds }
                        showModal = { showFilterModal }
                        onHideModal = { () => handleUpdateShowFilterModal(false) }
                        onClearSelection = { () => handleUpdateClearSelection(listBreeds) } 
                        onChangeBreed = { (id, status) => hadleUpdateBreeds(listBreeds, 'selected', id, status) }
                        onChangeSubBreed = { (idBreed, id, status) => hadleUpdateSubBreeds(listBreeds, idBreed, id, status) }
                        onSelectAll = { (idBreed, status) => handleUpdateSelectAllSubBreeds(listBreeds, idBreed, status) }
                    />

                    <ImageModalComponent
                        showModal = { showImageModal }
                        source = { imageSrcModal }
                        onHideModal = { () => handleUpdateShowImageModal(false) }
                    />

                    <h1 className="header">Welcome To Dog-Ceo Challenge</h1>
                    <Row>
                        {/* tarjeta del boton de filtros */}
                        <Card className="col-lg-6 col-6">
                            <Card.Body>
                            
                                <Card.Title>Breed Filters</Card.Title>
                                <Card.Text> 
                                    You can filter by breeds and / or subbreeds
                                </Card.Text>
                                <Card.Text> 
                                <Row>
                                    <Col xs={6} md={6} align='left'>
                                        <Button variant="primary" onClick={() => handleUpdateShowFilterModal(true)}>
                                            Select your Filters
                                        </Button>
                                    </Col>
                                </Row>
                                </Card.Text>
                                <Card.Text> 
                                    <Row>
                                        <Col xs={2} md={2} align='left'>
                                            <Button variant="success" onClick={() => handleUpdateExpandCollapseAll(listBreeds, false)}>
                                                Expand
                                            </Button>
                                        </Col>
                                        <Col xs={2} md={2} align='left'>
                                            <Button variant="warning" onClick={() => handleUpdateExpandCollapseAll(listBreeds, true)}>
                                                Collapse
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* tarjeta de las propiedades de la lista de imagenes */}
                        <Card className="col-lg-6 col-6">
                            <Card.Body>
                                <Card.Title>Customize</Card.Title>
                                <Card.Text> 
                                    You can customize image list properties
                                </Card.Text>
                                <Card.Text>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                                            Size thumbnail - { sizeImageList }
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleUpdateSizeImageList('small')}>small</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleUpdateSizeImageList('medium')}>medium</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleUpdateSizeImageList('large')}>large</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Text>
                                <Card.Text>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                                            Max images - {maxImageList}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleUpdateMaxImageList(5)}>5</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleUpdateMaxImageList(10)}>10</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleUpdateMaxImageList(20)}>20</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleUpdateMaxImageList(30)}>30</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                    {
                        // Aqui basicamente repito el componente porque son logicas distintas para 
                        // la raza que no tiene subraza vs la que si tiene, reconozco que se puede mejorar
                        listBreeds.map( (element, idx) => 
                            // si es raza sola y esta seleccionada
                            element.subbreeds.length === 0 && element.selected ?
                                <ImageBreedComponent
                                    key = { idx }
                                    breed = { element.breed }
                                    subbreeds = { element.subbreeds } 
                                    images = { element.images }
                                    maxImages = { maxImageList }
                                    sizeImages = { sizeImageList }
                                    collapse = { element.collapse }
                                    onSetCollapse = { (status) => hadleUpdateBreeds(listBreeds, 'collapse', element.id, status) }
                                    onImageClick = { (src) => showImageSelected(src, element.breed, '')}
                                />
                                : 
                            // si tiene subrazas seleccionadas
                            element.subbreeds.filter(sb => sb.selected).length > 0 &&
                                <ImageBreedComponent
                                    key = { idx }
                                    breed = { element.breed }
                                    subbreeds = { element.subbreeds.filter(sb => sb.selected) } 
                                    images = { element.images }
                                    maxImages = { maxImageList }
                                    sizeImages = { sizeImageList }
                                    collapse = { element.collapse }
                                    onSetCollapse = { (status) => hadleUpdateBreeds(listBreeds, 'collapse', element.id, status) }
                                    onImageClick = { (src, subbreed) => showImageSelected(src, element.breed, subbreed)}
                                />
                        )
                    }
                    </Row>
                </Jumbotron>
            </Container>
            }
            </React.Fragment>
            
        ); 
    }

export default HomePage;