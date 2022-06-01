import React, { useState, useEffect } from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";

const Login = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  // const [formErrors, setFormErrors] = useState({});
  // const [disable, setDisable] = React.useState(false)

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
    const checker = setTimeout(() =>{
      setFormIsValid(
        input.email.includes('@') && input.password.trim().length > 6
      );
    })
    
    return () =>{
      console.log('hi')
      clearTimeout(checker)
    }

  }, [input])

  const handleChange = (e) => {
    console.log(e.currentTarget.value)

    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };


  const submitHandler = e => {
    e.preventDefault();
    console.log(input);
  }

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
            <div className="login-form">
              <div className="group-title" style={{ marginBottom: 30 }}>
                <h2>Login</h2>
              </div>
              <Form method="post" onSubmit={submitHandler}>
                <Row>
                  <Form.Group
                    as={Col}
                    lg="12"
                    className="content"
                    controlId="email"
                    style={{ marginBottom: 25 }}
                  >
                    <Form.Label>
                      Enter Email
                      <sup>*</sup>
                    </Form.Label>

                    <Form.Control
                      name="email"
                      required
                      type="text"
                      placeholder="Email"
                      value={input?.email}
                      onChange={(e) => handleChange(e)}
                    />
                    {/* {formErrors.email && (
                      <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                      </Form.Control.Feedback>
                    )} */}
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg="12"
                    className="content mb-20"
                    controlId="password"
                    style={{ marginBottom: 25 }}
                  >
                    <Form.Label>
                      Enter Password
                      <sup>*</sup>
                    </Form.Label>

                    <Form.Control
                      name="password"
                      required
                      type="password"
                      placeholder="Password"
                      value={input?.password}
                      onChange={(e) => handleChange(e)}
                    />
                    {/* {formErrors.password && (
                      <Form.Control.Feedback type="invalid">
                        {formErrors.password}
                      </Form.Control.Feedback>
                    )} */}
                  </Form.Group>
                </Row>
                <Button
                  type="submit"
                  id="btn-login"
                  bsStyle="success"
                  style={{ marginTop: 10 }}
                  disabled={!formIsValid}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
