import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, Row } from "react-bootstrap";
import CepFormDadosComponent from "./CepFormDadosComponent";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function CepFormComponent() {
    const [cep, setCep] = useState(null);
    const [dadosCep, setDadosCep] = useState(null);
    const [erro, setErro] = useState(null);
    const [sucesso, setSucesso] = useState(null);
    const [carregando, setCarregando] = useState(false);

    const buscarCep = async (formulario) => {
        formulario.preventDefault();

        setSucesso(null);
        setErro(null);

        try {
            setCarregando(true);

            let resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            setDadosCep(resposta.data);
            setSucesso(`${cep} - Localizado com Sucesso`);
        } catch (erro) {
            console.log(erro);
            setErro(`${cep} - Erro ao pesquisar cep, insira um cep válido`);
        } finally {
            setCarregando(false);
        }
    
    };

    

    return (
        <Container fluid className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="justify-content-center w-100">
                {/* Novo Card com imagem e conteúdo lado a lado */}
                <Col sm={12} md={8} lg={12} >
                    <Card style={{ }}>
                        <Card.Body className="d-flex">
                            {/* Coluna com a imagem */}
                            <Col sm={4} className="p-0">
                                <Card.Img className="img1" variant="top" src="https://domenicopizzaria.com.br/wp-content/uploads/2017/10/3-pratos-italianos-que-todo-mundo-precisa-provar-1.jpg" />
                            </Col>

                            {/* Coluna com o texto ao lado da imagem */}
                            <Col  >
                                <Card.Title>RONDELLI</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.5555555555555555555555555555555555555555
                                    55555555555555555555555555555555555555555555555555555555
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Formulário de busca de CEP abaixo do Card */}
                <Col xs={12}   className="mt-3">
                    <Card>
                        <CardHeader className="p-2 pb-0"><h4>Buscar Cep</h4></CardHeader>
                        <CardBody>
                            <Form onSubmit={buscarCep}>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o cep a ser consultado"
                                    onChange={(e) => setCep(e.target.value)}
                                />
                            </Form>
                        </CardBody>
                        <CardFooter className="text-end">
                            <Button
                                type="button"
                                onClick={() => {
                                    setDadosCep(null);
                                    setSucesso(null);
                                    setErro(null);
                                }}
                                variant="warning"
                                className="me-1"
                            >
                                Limpar
                            </Button>
                            <Button type="submit">Consultar</Button>
                        </CardFooter>
                    </Card>

                    {carregando && (
                        <Alert className="mt-2" variant="info" key="info">
                            <b>Aguarde, carregando...</b>
                        </Alert>
                    )}

                    {erro && (
                        <Alert className="mt-2" variant="danger" key="danger">
                            <b>{erro}</b>
                        </Alert>
                    )}

                    {sucesso && (
                        <Alert className="mt-2" variant="success" key="success">
                            <b>{sucesso}</b>
                        </Alert>
                    )}

                    {dadosCep && <CepFormDadosComponent dadosCep={dadosCep} />}
                </Col>
            </Row>
        </Container>
    );
}

export default CepFormComponent;
