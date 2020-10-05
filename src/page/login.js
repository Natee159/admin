import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

const Login = () => {
      const history = useHistory();
      const [Email, setEmail] = useState()
      const [Password, setPassword] = useState()

      const handleSubmit = event => {
            event.preventDefault();
            axios.get(`http://localhost/api/product/login.php?Email=` + Email + '&Password=' + Password)
                  .then(res => {
                        console.log(res.data.Email)
                        console.log(res.data.Status)
                        if (res.data.Email === "Admin@hotmail.com" && Password === "1234") {
                              alert("เข้าสู่หน้าระบบ")
                              document.cookie = "username=" + res.data.Email + "; path=/"
                              document.cookie = "Customer_ID=" + res.data.Customer_id + "; path=/"
                              history.push("/admin")
                              history.go(0)
                        }
                        else {
                              alert("รหัสผ่านไม่ถูกต้อง")
                        }

                  })
      }

      return (
            <Container>
                  <Row>
                        <Col>
                              <h1>เข้าสู่ระบบ</h1>
                              <form onSubmit={handleSubmit}>
                                    <Row>
                                          <Col>
                                                <p>Email</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setEmail(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Password</p>
                                          </Col>
                                          <Col>
                                                <input type="password" onChange={e => { setPassword(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Button color="primary" type="submit">Login</Button>
                              </form>
                        </Col>
                  </Row>
            </Container>
      )
}
export default Login