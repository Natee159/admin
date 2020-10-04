import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const Admin = () => {
    const [data, setData] = useState([])
    const columns = [{
        dataField: 'Product_id',
        text: 'Product ID'
    }, {
        dataField: 'Product_name',
        text: 'Product Name'
    }, {
        dataField: 'Publi_name',
        text: 'Public Name'
    },{
        dataField: 'Detail',
        text: 'Detail'
    }];
    useEffect(() => {
        axios.get(`http://localhost/api/product/read.php`)
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)
            })
    }, []);

return (
    <Container>
        <h1>TABLE</h1>
        <BootstrapTable keyField='id' data={data} columns={columns} />
    </Container>
);
}

export default Admin;
