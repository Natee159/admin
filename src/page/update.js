import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import getCookie from '../component/getCookie.js';
const Update = () => {
    const [Product_id, setProduct_id] = useState()
    const [Product_name, setProduct_name] = useState()
    const [Author_name, setAuthor_name] = useState()
    const [Publi_name, setPubli_name] = useState()
    const [Detail, setDetail] = useState()
    const [Total, setTotal] = useState()
    const [Price, setPrice] = useState()
    const [Category_ID, setCategory_ID] = useState()
    const [Promotion_id, setPromotion_id] = useState()
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState(null)
    const handleSubmit = event => {
        event.preventDefault();
        alert('update');
        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name);
        axios.post(`http://localhost/api/product/uploadimg.php`, fd)
        axios.post(`http://localhost/api/product/update.php`, JSON.stringify({
            "Product_id": Product_id,
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
    const location = useLocation();
    useEffect(() => {
        setProduct_id(location.Product_id)
        setProduct_name(location.Product_name)
        setAuthor_name(location.Author_name)
        setPubli_name(location.Publi_name)
        setDetail(location.Detail)
        setTotal(location.Total)
        setPrice(location.Price)
        setCategory_ID(location.Category_ID)
        setPromotion_id(location.Promotion_id)
        if(getCookie("username") === ""){
            history.push("/")
          }
}, [location]);

    return (
        <Container>
            <Row>
                <Col>
                    <form onSubmit={handleSubmit}>
                        <h1>UPDATE</h1>
                        <Row>
                            <Col>
                                <p>Product_id</p>
                            </Col>
                            <Col>
                                <input type="text" value={Product_id} onChange={e => { setProduct_id(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Product_name</p>
                            </Col>
                            <Col>
                                <input type="text" value={Product_name} onChange={e => { setProduct_name(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Author_name</p>
                            </Col>
                            <Col>
                                <input type="text" value={Author_name} onChange={e => { setAuthor_name(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Publi_name</p>
                            </Col>
                            <Col>
                                <input type="text" value={Publi_name} onChange={e => { setPubli_name(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Detail</p>
                            </Col>
                            <Col>
                                <input type="text" value={Detail} onChange={e => { setDetail(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Image</p>
                            </Col>
                            <Col>
                                <input type="file"  onChange={e => { setSelectedFile(e.target.files[0]) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Total</p>
                            </Col>
                            <Col>
                                <input type="text" value={Total} onChange={e => { setTotal(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Price</p>
                            </Col>
                            <Col>
                                <input type="text" value={Price} onChange={e => { setPrice(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Category_ID</p>
                            </Col>
                            <Col>
                                <input type="text" value={Category_ID} onChange={e => { setCategory_ID(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Promotion_id</p>
                            </Col>
                            <Col>
                                <input type="text" value={Promotion_id} onChange={e => { setPromotion_id(e.target.value) }} />
                            </Col>
                        </Row>
                        <Button color="primary" type="submit">Add</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Update