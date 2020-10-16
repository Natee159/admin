import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button, Container, Table } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import getCookie from '../component/getCookie1.js';
const Promotion = () => {
    const [data, setData] = useState([])
    // const [refre, setData] = useState([])
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost/api/product/readpromotion.php`)
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
            if(getCookie("usernameadmin") === ""){
                history.push("/")
              }
    }, []);

    return (
        <Container>
            <h1>Promotion</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Promotion_id</th>
                        <th>Promotion_Name</th>
                        <th>Percent</th>
                        <th>StartDate</th>
                        <th>EndDate</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => <Tr data={d} />)}
                </tbody>
            </Table>
        </Container>
    );
}

const Tr = (props) => {
    const Delete = (id) => {
        alert('delete id = ' + id);
        axios.post(`http://localhost/api/product/deletepromotion.php`, { "Promotion_id": id })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        window.location.reload(false);
    }
    const history = useHistory();
    const handleClick = () => {
        history.push({
            pathname : '/updatepromotion',
            Promotion_id: props.data.Promotion_id,
            Promotion_Name: props.data.Promotion_Name,
            Percent : props.data.Percent,
            StartDate : props.data.StartDate,
            EndDate: props.data.EndDate
        });
    }

    return (
        <tr>
            <td>{props.data.Promotion_id}</td>
            <td>{props.data.Promotion_Name}</td>
            <td>{props.data.Percent}</td>
            <td>{props.data.StartDate}</td>
            <td>{props.data.EndDate}</td>
            <td><Button onClick={() => Delete(props.data.Promotion_id)} >Delete</Button></td>
            <td><Button onClick={handleClick} >update</Button></td>
        </tr>
    );
}

export default Promotion;
