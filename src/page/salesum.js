import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const Salesum = () => {
    const [data, setData] = useState();
    const [date, setDate] = useState()
    const [day, setDay] = useState()
    const [day1, setDay1] = useState()
    const [day2, setDay2] = useState()
    const [day3, setDay3] = useState()
    const [day4, setDay4] = useState()
    const [day5, setDay5] = useState()
    const [day6, setDay6] = useState()
    const [total, setTotal] = useState()
    const [total1, setTotal1] = useState()
    const [total2, setTotal2] = useState()
    const [total3, setTotal3] = useState()
    const [total4, setTotal4] = useState()
    const [total5, setTotal5] = useState()
    const [total6, setTotal6] = useState()
    useEffect(() => {
        axios.get(`http://localhost/api/product/graph.php`)
            .then(res => {
                console.log(res.data.records)
                setData(res.data.records)

                const today = new Date();
                setDate(parseInt(today.getMonth() + 1) + "  ปี  " + today.getFullYear())
                setDay(today.getFullYear() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate())
                const prev_date = new Date(today);
                const prev_date1 = prev_date.setDate(today.getDate() - 1);
                const date1 = new Date(prev_date1);
                setDay1(date1.getFullYear() + "-" + parseInt(date1.getMonth() + 1) + "-" + date1.getDate())
                const prev_date2 = prev_date.setDate(today.getDate() - 2);
                const date2 = new Date(prev_date2);
                setDay2(date2.getFullYear() + "-" + parseInt(date2.getMonth() + 1) + "-" + date2.getDate())
                const prev_date3 = prev_date.setDate(today.getDate() - 3);
                const date3 = new Date(prev_date3);
                setDay3(date3.getFullYear() + "-" + parseInt(date3.getMonth() + 1) + "-" + date3.getDate())
                const prev_date4 = prev_date.setDate(today.getDate() - 4);
                const date4 = new Date(prev_date4);
                setDay4(date4.getFullYear() + "-" + parseInt(date4.getMonth() + 1) + "-" + date4.getDate())
                const prev_date5 = prev_date.setDate(today.getDate() - 5);
                const date5 = new Date(prev_date5);
                setDay5(date5.getFullYear() + "-" + parseInt(date5.getMonth() + 1) + "-" + date5.getDate())
                const prev_date6 = prev_date.setDate(today.getDate() - 6);
                const date6 = new Date(prev_date6);
                setDay6(date6.getFullYear() + "-" + parseInt(date6.getMonth() + 1) + "-" + date6.getDate())
                
                const obj_result = res.data.records.filter( obj=>  obj.Date === today.getFullYear() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate())
                setTotal(obj_result.reduce( (sum, item) => sum = sum + parseFloat(item.Total) , 0))

                const obj_result1 = res.data.records.filter( obj=>  obj.Date === date1.getFullYear() + "-" + parseInt(date1.getMonth() + 1) + "-" + date1.getDate())
                setTotal1(obj_result1.reduce((sum, item) => sum = sum + parseFloat(item.Total) , 0))

                const obj_result2 = res.data.records.filter( obj=>  obj.Date === date2.getFullYear() + "-" + parseInt(date2.getMonth() + 1) + "-" + date2.getDate())
                setTotal2(obj_result2.reduce((sum, item) => sum = sum + parseFloat(item.Total) , 0))

                const obj_result3 = res.data.records.filter( obj=>  obj.Date === date3.getFullYear() + "-" + parseInt(date3.getMonth() + 1) + "-" + date3.getDate())
                setTotal3(obj_result3.reduce((sum, item) => sum = sum + parseFloat(item.Total) , 0))

                const obj_result4 = res.data.records.filter( obj=>  obj.Date === date4.getFullYear() + "-" + parseInt(date4.getMonth() + 1) + "-" + date4.getDate())
                setTotal4(obj_result4.reduce((sum, item) => sum = sum + parseFloat(item.Total) , 0))

                const obj_result5 = res.data.records.filter( obj=>  obj.Date === date5.getFullYear() + "-" + parseInt(date5.getMonth() + 1) + "-" + date5.getDate())
                setTotal5(obj_result5.reduce((sum, item) => sum = sum + parseFloat(item.Total) , 0))

                const obj_result6 = res.data.records.filter( obj=>  obj.Date === date6.getFullYear() + "-" + parseInt(date6.getMonth() + 1) + "-" + date6.getDate())
                setTotal6(obj_result6.reduce((sum, item) => sum = sum + parseFloat(item.Total) , 0))
                

            })

    }, []);
    const dataall = [
        {
            name: day6, ยอดขาย: total6,
        },
        {
            name: day5, ยอดขาย: total5,
        },
        {
            name: day4, ยอดขาย: total4,
        },
        {
            name: day3, ยอดขาย: total3,
        },
        {
            name: day2, ยอดขาย: total2,
        },
        {
            name: day1, ยอดขาย: total1,
        },
        {
            name: day, ยอดขาย: total,
        },
    ];
    return (
        <Container>
            <h1>สรุปยอดขายเดือน      {date}</h1>

            <BarChart
                width={1000}
                height={800}
                data={dataall}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                barSize={35}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="ยอดขาย" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </Container>
    );
}

export default Salesum;