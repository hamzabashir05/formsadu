import React, { useState, useEffect } from 'react'
import "./style.css"
import { Row, Col, Form, Card, Table, Button, Container } from 'react-bootstrap';


export default function Main() {

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [stock, setStock] = useState("");
    const [product, setProduct] = useState("");
    const [unit, setUnit] = useState("");
    const [date, setDate] = useState("");
    

    const [items, setItems] = useState([]);

    const prod_code = (e) => {
        setCode(e.target.value)

    }
    const prod_name = (e) => {
        setName(e.target.value)
    }
    const stock_qty = (e) => {
        setStock(e.target.value)
    }
    const prod_qty = (e) => {
        setProduct(e.target.value)
    }
    const prod_unit = (e) => {
        setUnit(e.target.value)
    }
    const prod_date = (e) => {
        setDate(e.target.value)
    }
    const create = async () => {
        if(!code && !name && !stock && !product && !unit && !date){
            alert("Please enter data");
               }
              else {
        let result = await fetch("http://localhost:3000/posts", {
            method: "post",
            body: JSON.stringify({ code, name, stock, product, unit, date }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        result = await result.json();
         setItems(); 
         fetchitems();
       // setItems([]);
          setCode("");
          setName("");
          setProduct("");
          setStock("");
          setUnit("");
          setDate("");
     
    }
}

    // const itemsSaved = (e) => {
    //    if(!code && !name && !stock && !product && !unit && !date){

    //    }
    //    else {
    //     setItems((oldItems) => {
    //         return [...oldItems, {code,name,stock,product,unit,date}]
    //     })
    //     setCode("");
    //     setName("");
    //     setProduct("");
    //     setStock("");
    //     setUnit("");
    //     setDate("");
    // }
    // }

    const deleteItems = async (id) => {
        let result = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            alert("record is deleted");
            fetchitems();
        }
    }

    useEffect(() => {
        fetchitems();
    }, [])

    const fetchitems = async () => {
        let result = await fetch("http://localhost:3000/posts");
        result = await result.json();
        setItems(result);
    }
    
    const closeAll = () => {

        setItems([]);
    }

    return (
        <Container fluid>
            <div className='d-flex justify-content-between mb-3 mt-3'>
                <h4>Production Form </h4>
                <Button variant="success"> Open </Button>

            </div>
            <Card className='mb-3'>
                <Card.Header className='p-2'>
                    <div className='d-flex justify-content-between'>
                        <h5 > Production Form</h5>
                        <h5>PN-00001</h5>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={3}>
                            <Form.Select aria-label="Default select example">
                                <option>Location</option>
                                <option value="1">Islamabad</option>
                                <option value="2">Lahore</option>
                                <option value="3">Karachi</option>
                            </Form.Select>
                        </Col>
                        <Col md={6}>
                            <Form.Control type="text" placeholder="Description" />
                        </Col>
                        <Col md={3}>
                            <Form.Control type="number" placeholder="Batch" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header className='p-2'>
                    <Row className='justify-content-between'>
                        <Col md={3}>
                            <h5 className='ms-2'>Items List</h5>
                        </Col>
                        <Col md={3}>  <Form.Control type="search" placeholder="search"  />
                        </Col>
                    </Row>

                </Card.Header>
                <Card.Body>

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Item&nbsp;Code</th>
                                <th style={{ width: '40%' }}> Item Name</th>
                                <th>Stock.&nbsp;Qty</th>
                                <th>Prod.&nbsp;Qty</th>
                                <th style={{ width: "10%" }}>Unit</th>
                                <th>Exp.&nbsp;Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Form.Control type='number' placeholder='Code' value={code} onChange={prod_code}></Form.Control></td>
                                <td><Form.Control type='text' placeholder='Name' value={name} onChange={prod_name}></Form.Control></td>
                                <td><Form.Control type='number' placeholder='Qty' value={stock} onChange={stock_qty}></Form.Control> </td>
                                <td><Form.Control type="number" placeholder="Qty" value={product} onChange={prod_qty}></Form.Control></td>
                                <td><Form.Select aria-label="Default select example" value={unit} onChange={prod_unit}>
                                    <option >Unit</option>
                                    <option value="1">Kg</option>
                                    <option value="2">Ltr</option>
                                    <option value="3">Dozen</option></Form.Select> </td>
                                <td><Form.Control type='date' placeholder='exp' value={date} onChange={prod_date}></Form.Control></td>
                            </tr>
                            {items?.map((itemval, ind) => {
                                return <tr>
                                    <td><Form.Control type='number' placeholder='Code' value={itemval.code} key={ind}></Form.Control></td>
                                    <td><Form.Control type='text' placeholder='Name' value={itemval.name} key={ind}></Form.Control></td>
                                    <td><Form.Control type='number' placeholder='Qty' value={itemval.stock} key={ind}></Form.Control></td>
                                    <td><Form.Control type="number" placeholder="Qty" value={itemval.product} key={ind}></Form.Control></td>
                                    <td><Form.Select aria-label="Default select example" value={itemval.unit} key={ind}>
                                        <option>Unit</option>
                                        <option value="1">Kg</option>
                                        <option value="2">Ltr</option>
                                        <option value="3">Dozen</option></Form.Select> </td>
                                    <td><Form.Control type='date' placeholder='exp' value={itemval.date} key={ind}></Form.Control></td>
                                    <td><i class="fa-solid fa-trash" title='Delete' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItems(itemval.id)}} ></i></td>
                                    
                                </tr>
                            })}

                        </tbody>
                    </Table>

                </Card.Body>
            </Card>
            <div className='d-flex justify-content-between mt-3'>
                <Button variant="dark" onClick={closeAll}> Close </Button>
                <Button variant="dark" onClick={create} > Save </Button>
            </div>
        </Container>
    )
}