import React,{useState} from 'react';
import { Container, Row, Col,Input,Label ,FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert} from 'reactstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bankData from '../utils/bankData';

export default withPageAuthRequired(function SSRPage() {

  const [modal, setModal] = useState(false);
  const [icon, setIcon] = useState();
  const toggle = () => setModal(!modal);




  return (
    <>
      <div className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title">Adicionar Bancos</h1>
      </div>

      <Container>
        <Row >
          {bankData.map((bank, i) => (
                  <Col  align="middle"  xs="3" className="mb-4"  >
                  <img
                      src={bank.icon}
                      alt={bank.name}
                      key={i}
                      className="rounded-square"
                      width="50"
                      height="50"
                    />{' '}
                  <Button color="secondary" size="sm" disabled={bank.name!="XP Investimento"} onMouseOver={()=>setIcon(bank.icon)} onClick={toggle}>Adicionar</Button>
                </Col>
            ))}
        </Row>  
      </Container>
    <br />
      <Alert color="secondary" align="center">
            Aguarde, Estamos nos conectando aos Bancos.
      </Alert>

      <div>
      
      <Modal isOpen={modal} modalTransition={{ timeout: 500 }} backdropTransition={{ timeout: 1000 }}
        toggle={toggle} >
        <ModalHeader toggle={toggle} >
        <FontAwesomeIcon icon="university" className="mr-3" /> Conectar sua Conta</ModalHeader>
        <ModalBody>
          <h6>Consentimento de acesso às Informações</h6>
           <FormGroup check>
           <Container>
            <Row >
              <Col><Input type="checkbox" key='1' checked /> <Label >Dados Cadastrais</Label></Col>
              <Col><Input type="checkbox" key='2' checked /> <Label >Saldo Das Contas</Label></Col>
            </Row>
            <Row >
              <Col><Input type="checkbox" key='3' checked /> <Label >Extrato Das Contas</Label></Col>
              <Col><Input type="checkbox" key='4' checked /> <Label >Cartões de Crédito</Label></Col>
            </Row>
            <Row>
              <Col><Input type="checkbox" key='5' checked /> <Label >Emprestimos</Label></Col>
              <Col><Input type="checkbox" key='6' checked /> <Label >Financiamentos</Label></Col>
            </Row>
            </Container>
           </FormGroup>
            
           <hr/>

          <h6>Vigência do Consentimento</h6>
            <Input type="select" >
              <option selected>12 Meses</option>
              <option>6 Meses</option>
              <option>3 Meses</option>
            </Input>
         
          <hr/>
          <h6>Redirecionamento</h6>
          Você será redirecionado para o site do Banco
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
            alt="Banco"
            />
          </Alert>

        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={toggle} target="_blank" href="https://hub.xpi.com.br/rede/" > Continuar </Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>


    </>
  );
});
