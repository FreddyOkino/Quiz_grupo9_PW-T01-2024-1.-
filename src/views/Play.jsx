import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '/home/freddy/Área de Trabalho/Engenharia_de_Software/progWeb/trabalhofront/quiz/src/views/background.jpg';

export function Escolher() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius:"5px"

    };
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    const buttonStyle = {
        width: '50%',
        margin: '5px',
    };

    if (!isAuthenticated) {
        navigate("/login");
        return null;
    }

    return (
        <Container >
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <Card className="mt-5" >
                        <Card.Body style={{ ...containerStyle, maxWidth: '100%', borderRadius: '5px' }}>
                            <Card.Title>
                                <Row className="justify-content-md-center">
                                    <Col xs={12} style={{ textAlign: "center", color: 'white' }} className="my-3">
                                        <h1>Escolha o tema</h1>
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Row>
                                <Col style={{ textAlign: 'center', margin: "5px", display: "flex" }}>
                                    <Button variant="light" as={Link} to="/historia" style={buttonStyle}>História</Button>
                                    <Button variant="light" as={Link} to="/geografia" style={buttonStyle}>Geografia</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center', margin: "5px", display: "flex" }}>
                                    <Button variant="light" as={Link} to="/quimica" style={buttonStyle}>Química</Button>
                                    <Button variant="light" as={Link} to="/fisica" style={buttonStyle}>Física</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center', margin: "5px", display: "flex" }}>
                                    <Button variant="light" as={Link} to="/matematica" style={buttonStyle}>Matemática</Button>
                                    <Button variant="light" as={Link} to="/artes" style={buttonStyle}>Artes</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center', margin: "5px", display: "flex" }}>
                                    <Button variant="light" as={Link} to="/esportes" style={buttonStyle}>Esportes</Button>
                                    <Button variant="light" as={Link} to="/games" style={buttonStyle}>Games</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center', margin: "5px" }}>
                             
                                    {user.usuario ?
                                        <Button variant="success" as={Link} to="/home" style={buttonStyle}>VOLTAR</Button> :
                                        <Button variant="success" as={Link} to="/adm" style={buttonStyle}>VOLTAR</Button>
                                    }
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}