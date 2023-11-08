import React, { Component } from 'react'
import "./style.css"
import { Container, Button, Card, Form, Table } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

export default class PurchaseReport extends Component {
    render() {
        return (
            <Container fluid >
                <div className='d-flex mb-3 mt-3 buttons_menu_display'>
                    <div className='p-2 flex-grow-1 ds_size'> <h4>Purchase Report </h4></div>
                    <div> <Button > <i class="fa-solid fa-arrows-rotate" /> Refresh </Button>
                     <Button > <i class="fa-solid fa-at"></i> Email </Button>
                    <Button> <i class="fa-solid fa-print"></i> Print </Button></div>
                </div>
                <Card >
                      <CardHeader className='d-flex border-0 card_color'>
                        <div className='p-2 flex-grow-1'>
                            <h6 className='mb-0' > Stock Issuance Report </h6> </div>
                        <div className='me-2'>   <Form.Select className='option_bar me-2' aria-label="Default select example">
                            <option>Location</option>
                            <option value="1">Islamabad</option>
                            <option value="2">Murree</option>
                            <option value="3">thandiyani</option>
                        </Form.Select> </div>
                        <div className='me-2 option_bar'>   <Form.Select className='option_bar' aria-label="Default select example">
                            <option>Month</option>
                            <option value="1">June</option>
                            <option value="2">July</option>
                            <option value="3">August</option>
                        </Form.Select></div>
                        <div className='me-2 option_bar'>  <Form.Select className='option_bar' aria-label="Default select example">
                            <option>year</option>
                            <option value="1">2023</option>
                            <option value="2">2022</option>
                            <option value="3">2021</option>
                        </Form.Select></div>

                    </CardHeader>
                    
               <Card.Body>
                
                    <Table bordered responsive className='mt-3 align-middle item_code_table' >
                        <thead >
                            <tr  >
                                <th>Item&nbsp;Code</th>
                                <th>Grocery&nbsp;Items</th>
                                <th>Unit</th>
                                <th>Mou</th>
                                <th colSpan={3} >1</th>
                                <th colSpan={3}>2</th>
                                <th colSpan={3}>3</th>
                                <th>Monthly&nbsp;Pur</th>
                                <th>Total&nbsp;Pur</th>
                                <th>Total&nbsp;Qty</th>
                                <th>Avg&nbsp;Price</th>
                                <th colSpan={9}>Total&nbsp;issue&nbsp;Quantity</th>
                            </tr>
                        </thead>
                        <thead  >
                            <tr >
                                <td colSpan={4} className='data_display_table1 text-start'> Printing & Stationary </td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td colSpan={4}></td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                            </tr>
                        </thead>
                        <tbody className='data_table'>
                            <tr >
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>

                        </tbody>
                        <thead>
                        <tr >
                                <td colSpan={4} className='data_display_table1 text-start'> Printing & Stationary </td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td colSpan={4}></td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                            </tr>
                        </thead>
                        <tbody className='data_table'>

                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>

                        </tbody>
                        <thead>
                        <tr >
                                <td colSpan={4} className='data_display_table1 text-start'> Printing & Stationary </td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td className='data_display_table'>Quanity</td>
                                <td className='data_display_table'>Price</td>
                                <td className='data_display_table'>Amount</td>
                                <td colSpan={4}></td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                                <td className='data_display_table'>F6</td>
                                <td className='data_display_table'>F7</td>
                                <td className='data_display_table'>F8</td>
                            </tr>
                        </thead>
                        <tbody className='data_table'>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>PAS0001</td>
                                <td>Printer Roll</td>
                                <td>EA</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>100</td>
                                <td>100000</td>
                                <td>100000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                                <td>100</td>
                            </tr>

                        </tbody>

                    </Table>

                    </Card.Body>
                
                    </Card>
            </Container>
        )
    }
}