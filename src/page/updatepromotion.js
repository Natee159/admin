import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import getCookie from '../component/getCookie1.js';
const Updatepromotion = () => {
    const [Promotion_id, setPromotion_id] = useState()
    const [Promotion_Name, setPromotion_Name] = useState()
    const [Percent, setPercent] = useState()
    const [StartDate, setStartDate] = useState()
    const [EndDate, setEndDate] = useState()
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault();
        alert('update');
        axios.post(`http://localhost/api/product/updatepromotion.php`, JSON.stringify({
            "Promotion_id": Promotion_id,
            "Promotion_Name": Promotion_Name,
            "Percent": Percent,
            "StartDate": StartDate,
            "EndDate": EndDate
        }))
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            history.push("/promotion")
    }
    const location = useLocation();
    useEffect(() => {
        setPromotion_id(location.Promotion_id)
        setPromotion_Name(location.Promotion_Name)
        setPercent(location.Percent)
        setStartDate(location.StartDate)
        setEndDate(location.EndDate)
        if(getCookie("usernameadmin") === ""){
            history.push("/")
          }
}, [location]);

    return (
        <Container>
            <Row>
                <Col>
                    <form onSubmit={handleSubmit}>
                        <h1>UPDATE Promotion</h1>
                        <Row>
                            <Col>
                                <p>Promotion_id</p>
                            </Col>
                            <Col>
                                <input type="text" value={Promotion_id} onChange={e => { setPromotion_id(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Promotion_Name</p>
                            </Col>
                            <Col>
                                <input type="text" value={Promotion_Name} onChange={e => { setPromotion_Name(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Percent</p>
                            </Col>
                            <Col>
                                <input type="text" value={Percent} onChange={e => { setPercent(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>StartDate</p>
                            </Col>
                            <Col>
                                <input type="date" value={StartDate} onChange={e => { setStartDate(e.target.value) }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>EndDate</p>
                            </Col>
                            <Col>
                                <input type="date" value={EndDate} onChange={e => { setEndDate(e.target.value) }} />
                            </Col>
                        </Row>
                        <Button color="primary" type="submit">update</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Updatepromotion