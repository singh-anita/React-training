import React from "react";
import {
  Button,
  Form,
  Col,
  FormGroup,
  FormControl,
  InputGroup,
  Container,
  Row,
} from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            sm={{ span: 8, offset: 2 }}
            id="loginbox"
            style={{ marginTop: 50 }}
          >
            <div className="panel panel-info">
              <div className="panel-heading">
                <div className="panel-title">Sign In</div>
              </div>
              <div style={{ paddingTop: 30 }} className="panel-body">
                <Form horizontal>
                  <FormGroup
                    controlId="loginEmail"
                    style={{ marginBottom: 25 }}
                  >
                    <Col md={12}>
                      <InputGroup>
                        <FormControl type="text" placeholder="Enter Email" />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup
                    controlId="loginPassword"
                    style={{ marginBottom: 25 }}
                  >
                    <Col md={12}>
                      <InputGroup>
                        <FormControl
                          type="password"
                          placeholder="Enter Password"
                        />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup style={{ marginTop: 10 }}>
                    <Col sm={12} md={12}>
                      <Button id="btn-login" bsStyle="success">
                        Login
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
