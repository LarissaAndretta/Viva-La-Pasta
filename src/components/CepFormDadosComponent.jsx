import React from "react";
import { Card, CardBody, CardHeader, Table } from "react-bootstrap";

function CepFormDadosComponent (props) {

    return (
        <Card>
            <CardHeader className="p-2 pb-0">
                <h6>Resultado</h6>
            </CardHeader>
            <CardBody className="p-2">
                <Table bordered hover>
                   <tbody>
                        <tr>
                            <td>CEP</td>
                            <td>{props.dadosCep.cep ? props.dadosCep.cep : "Não Informado" }</td>
                        </tr>
                        <tr>
                            <td>Logradouro</td>
                            <td>{props.dadosCep.logradouro ? props.dadosCep.logradouro : "Não Informado" }</td>
                        </tr>
                        <tr>
                            <td>Complemento</td>
                            <td>{props.dadosCep.complemento ? props.dadosCep.complemento : "Não Informado" }</td>
                        </tr>
                        <tr>
                            <td>Unidade</td>
                            <td>{props.dadosCep.unidade ? props.dadosCep.unidade : "Não Informado" }</td>
                        </tr>
                        <tr>
                            <td>Bairro</td>
                            <td>{props.dadosCep.bairro ? props.dadosCep.bairro : "Não Informado" }</td>
                        </tr>
                        <tr>
                            <td>Localidade</td>
                            <td>{props.dadosCep.localidade ? props.dadosCep.localidade : "Não Informado" }</td>
                        </tr>
                        <tr>
                            <td>Estado</td>
                            <td>{props.dadosCep.estado ? props.dadosCep.estado : "Não Informado" }</td>
                        </tr>
                        <tr>
                            <td>Região</td>
                            <td>{props.dadosCep.regiao ? props.dadosCep.regiao : "Não Informado" }</td>
                        </tr>
                   </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default CepFormDadosComponent;