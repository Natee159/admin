import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button, Container, Table } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import getCookie from '../component/getCookie1.js';
const Admin = () => {
    const [data, setData] = useState([])
    // const [refre, setData] = useState([])
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost/api/product/read.php`)
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
            <h1>ADMIN</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Product_Id</th>
                        <th>Product_Name</th>
                        <th>Author_Name</th>
                        <th>Public_Name</th>
                        <th>Detail</th>
                        <th>Image</th>
                        <th>Total</th>
                        <th>Price</th>
                        <th>Category_ID</th>
                        <th>Promotion_id</th>
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
        axios.post(`http://localhost/api/product/delete.php`, { "Product_id": id })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        window.location.reload(false);
    }
    const history = useHistory();
    const handleClick = () => {
        history.push({
            pathname : '/update',
            Product_id: props.data.Product_id,
            Product_name: props.data.Product_name,
            Author_name : props.data.Author_name,
            Publi_name : props.data.Publi_name,
            Detail: props.data.Detail,
            Img : props.data.Image,
            Total : props.data.Total,
            Price : props.data.Price,
            Category_ID : props.data.Category_ID,
            Promotion_id : props.data.Promotion_id
        });
    }

    return (
        <tr>
            <td>{props.data.Product_id}</td>
            <td>{props.data.Product_name}</td>
            <td>{props.data.Author_name}</td>
            <td>{props.data.Publi_name}</td>
            <td>{props.data.Detail}</td>
            <td><img src={require("../component/img/" + props.data.Image)} alt={props.data.image} width="80" height="100"/></td> 
            <td>{props.data.Total}</td>
            <td>{props.data.Price}</td>
            <td>{props.data.Category_ID}</td>
            <td>{props.data.Promotion_id}</td>
            <td><Button onClick={() => Delete(props.data.Product_id)} >Delete</Button></td>
            <td><Button onClick={handleClick} >update</Button></td>
        </tr>
    );
}

export default Admin;
