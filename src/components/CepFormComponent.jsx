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
    
    const [quantidade, setQuantidade] = useState(1);
    const precoFixo = 40.0;
    const incrementoPreco = 22.4;

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

    const aumentarQuantidade = () => setQuantidade(quantidade + 1);
    const diminuirQuantidade = () => setQuantidade(Math.max(1, quantidade - 1));
    const precoTotal = precoFixo + (quantidade - 1) * incrementoPreco;

    return (
        <Container fluid className="page-background">
            {/* Header com faixa amarela */}
            <div className="header-bar">
                <div className="header-logo">
                    <img src="Yellow_and_Brown_Simple_Fast_Food_Logo[1].png" alt="Logo" />
                    Viva La Pasta
                </div>
                <div className="header-search">
                    <input type="text" placeholder="Pesquisar..." />
                </div>
            </div>

            <Row className="justify-content-center w-100">
                {/* Novo Card com imagem e conteúdo lado a lado */}
                <Col sm={12} md={8} lg={12} className="mt-3">
                    <Card>
                        <Card.Body className="d-flex flex-column flex-md-row">
                            {/* Coluna com a imagem */}
                            <Col xs={12} md={6} className="p-0">
                                <Card.Img 
                                    className="img1" 
                                    variant="top" 
                                    src="https://domenicopizzaria.com.br/wp-content/uploads/2017/10/3-pratos-italianos-que-todo-mundo-precisa-provar-1.jpg" 
                                />
                            </Col>

                            {/* Coluna com o texto ao lado da imagem */}
                            <Col xs={12} md={6} className="mt-3 mt-md-0">
                                <Card.Title><h3><b>Rondelli</b></h3></Card.Title>
                                <Card.Text>
                                    Um delicioso prato italiano, feito com massas finas e recheadas que
                                    são enrroladas em formato de pequenos rolinhos. Costuma ser recheado
                                    com ingredientes como queijo, presunto, espinafre e frango, e coberto
                                    com molho branco, molho vermelho ou até mesmo ao sugo.
                                </Card.Text>
                                <div className="d-flex align-items-center">
                                    <Button variant="ligth"><b>R$ {precoTotal.toFixed(2)}</b></Button>
                                    <div className="ms-3 d-flex align-items-center">
                                        <Button variant="outline-secondary" onClick={diminuirQuantidade}>-</Button>
                                        <span className="mx-2">{quantidade}</span>
                                        <Button variant="outline-secondary" onClick={aumentarQuantidade}>+</Button>
                                    </div>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Formulário de busca de CEP abaixo do Card */}
                <Col sm={12} md={8} lg={12} className="mt-3">
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
