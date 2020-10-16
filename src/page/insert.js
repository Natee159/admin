import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import getCookie from '../component/getCookie1.js';
const Insert = () => {
      const [selectedFile, setSelectedFile] = useState(null)
      const [Product_name, setProduct_name] = useState()
      const [Author_name, setAuthor_name] = useState()
      const [Publi_name, setPubli_name] = useState()
      const [Detail, setDetail] = useState()
      const [Total, setTotal] = useState()
      const [Price, setPrice] = useState()
      const [Category_ID, setCategory_ID] = useState()
      const [Promotion_id, setPromotion_id] = useState()
      const history = useHistory();
      const handleSubmit = event => {
            event.preventDefault();
            alert('insert');
            const fd = new FormData();
            fd.append('image', selectedFile, selectedFile.name);
            axios.post(`http://localhost/api/product/uploadimg.php`, fd)
            axios.post(`http://localhost/api/product/create.php`, JSON.stringify({
                  "Product_name": Product_name,
                  "Author_name": Author_name,
                  "Publi_name": Publi_name,
                  "Detail": Detail,
                  "Image": selectedFile.name,
                  "Total": Total,
                  "Price": Price,
                  "Category_ID": Category_ID,
                  "Promotion_id": Promotion_id
            }))
                  .then(res => {
                        console.log(res);
                        console.log(res.data);
                  })
            history.push("/admin")

      }

      useEffect(() => {
            if (getCookie("usernameadmin") === "") {
                  history.push("/")
            }
      }, []);

      return (
            <Container>
                  <Row>
                        <Col>
                              <h1>INSERT</h1>
                              <form onSubmit={handleSubmit}>
                                    <Row>
                                          <Col>
                                                <p>Product_name</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setProduct_name(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Author_name</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setAuthor_name(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Publi_name</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setPubli_name(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Detail</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setDetail(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Image</p>
                                          </Col>
                                          <Col>
                                                <input type="file" onChange={e => { setSelectedFile(e.target.files[0]) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Total</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setTotal(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Price</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setPrice(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Category_ID</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setCategory_ID(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col>
                                                <p>Promotion_id</p>
                                          </Col>
                                          <Col>
                                                <input type="text" onChange={e => { setPromotion_id(e.target.value) }} />
                                          </Col>
                                    </Row>
                                    <Button color="primary" type="submit">Add</Button>
                              </form>
                        </Col>
                  </Row>
            </Container>
      )
}
export default Insert