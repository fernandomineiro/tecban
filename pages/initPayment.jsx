import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter ,Alert, FormFeedback } from 'reactstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bankData from '../utils/bankData';


export default function initPayment({ user }) {

    const [modal, setModal] = useState(false);
    //const toggle = () => setModal(!modal);
    const [icon='banks/bb.jpg', setIcon] = useState()
    const [transactionValue= 0, setTransactionValue] = useState()
    const [validarValor, setValidarValor] = useState()
    
    const [chavePix='', setChavePix] = useState()
    const [tipoPix="CPF", setTipoPix] = useState()

    const toggle = function (){
      
      if ( transactionValue == 0.00){
        setValidarValor(true) 
      } else
      {
        setModal(!modal);
      }
    }


  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Iniciar Pagamento</h1>
      </div>
      <Form>
      <FormGroup>
        <Label for="exampleAddress" >Selecione o Banco para iniciar o pagamento</Label>
        <Input type="select"
               id="bank"
               onChange={(e) => setIcon(e?.target.value)}
        >
        {bankData.map((col, i) => (
                <option key={i} value={col.icon} >{col.name}</option>
          ))}

        </Input>
      </FormGroup>
      <hr/>
      <FormGroup>
        <Label for="exampleAddress2">Informações da Conta que será creditada</Label>
        <Input type="select" disabled>
          <option>PIX</option>
        </Input>
      </FormGroup>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleCity">Tipo Chave PIX</Label>
            <Input type="select"
                onChange={(e) => setTipoPix(e?.target.value)}>
              <option>CPF</option>
              <option>CNPJ</option>
              <option>Email</option>
              <option>Telefone</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={9}>
          <FormGroup>
            <Label for="exampleState">Chave PIX</Label>
            <Input type="text" 
                    name="chavePix" 
                    id="chavePix" 
                    onChange={(e) => setChavePix(e?.target.value)}
                    valid={chavePix!=''}/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Valor</Label>
        <Input
          type="number"
          name="valor"
          id="exampleNumber"
          placeholder="R$"
          onChange={(e) => setTransactionValue(e?.target.value) }
          onClick={()=> setValidarValor(false)}
          valid={transactionValue!=0}
          invalid={validarValor}
        />
        <FormFeedback >Digite o valor da Transação</FormFeedback>
        
      </FormGroup>
      <Button color="secondary" onClick={toggle}> Iniciar Pagamento</Button>
    </Form>



    <div>
      
      <Modal isOpen={modal} modalTransition={{ timeout: 500 }} backdropTransition={{ timeout: 1000 }}
        toggle={toggle} >
        <ModalHeader toggle={toggle} color="secondary">
        <FontAwesomeIcon icon="comment-dollar" className="mr-3" /> Confirmação de Pagamento</ModalHeader>
        <ModalBody>
        <h6>Valor a pagar.</h6>
          <h4>R$ {transactionValue}</h4>
          <h6>De</h6>
          <h5>{user.name}</h5>
          <h6>Para</h6>
          <h5>{tipoPix} {" : "} {chavePix} 
          </h5>
          <hr/>
          <h6>Redirecionamento</h6>
          Você será redirecionado para a instituição de débito
          <Alert color="dark" align="center">
            <img
              src='logo-colorido.png'
              height = '40'
              width = '40'
              alt="Tecban Open Finance"
              />
            {' '}
            <FontAwesomeIcon icon="exchange-alt" className="mr-2" />
            {' '}
            <img
            src={icon}
            height = '40'
            width = '40'
            alt="XP Investimentos"
            />
          </Alert>

        </ModalBody>
        <ModalFooter>
          <Button color="primary"  target="_blank" disabled > Continuar </Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>

    </>
  );
}

export const getServerSideProps = withPageAuthRequired();

