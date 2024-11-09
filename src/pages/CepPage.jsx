import React from "react";
import CepFormComponent from "../components/CepFormComponent";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function CepPage(){
    return (
        <>
            <Container>
                <CepFormComponent />
            </Container>
            
        </>
    );
}

export default CepPage;