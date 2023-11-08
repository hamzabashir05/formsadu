import React, { useEffect, useState } from 'react'
import { Container, Form, Table, Button } from 'react-bootstrap'
import "./style.css"


export default function DemandSupply() {


    const [items, setItems] = useState([]);


    useEffect(() => {
        fetchitems();
    }, [])

    const fetchitems = async () => {
        let result = await fetch("http://localhost:3000/demandsupply");
        result = await result.json();
        setItems(result);
    }

    return (
        <Container fluid>

            <div className='d-flex border-0 mt-4 buttons_menu_display'>
                <div className='p-2 flex-grow-1 ds_size'>
                    <h6> Demand & Supply Report </h6> </div>
                <div className='me-2'>   <Form.Select className='option_bar' aria-label="Default select example">
                    <option>Islamabad</option>
                    <option value="1">Islamabad</option>
                    <option value="2">Murree</option>
                    <option value="3">thandiyani</option>
                </Form.Select>
                </div>
                <div className='me-2'>   <Form.Control className='option_bar' type='date' placeholder='exp'></Form.Control> </div>
                <div className='me-2'>   <Form.Control className='option_bar' type='date' placeholder='exp'></Form.Control> </div>
                <div><Button >  <i class="fa-solid fa-print"></i> Print </Button></div>

            </div>

            <Table bordered responsive className='item_code_table align-middle '>
                <thead>
                    <tr>
                        <th>SR.No</th>
                        <th>Grocery&nbsp;Item</th>
                        <th>Uom</th>
                        <th>Balance</th>
                        <th>Demand</th>
                    </tr>
                </thead>
                <tbody className='data_table'>
                    {
                        items.map((itemval, ind) => {
                            return (
                                <tr >
                                    <td>{itemval.sr}</td>
                                    <td>{itemval.Grocery}</td>
                                    <td>{itemval.Uom}</td>
                                    <td>{itemval.Balance}</td>
                                    <td>{itemval.Demand}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

        </Container>

    )
}
