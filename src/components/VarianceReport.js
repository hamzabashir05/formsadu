import React,{useState} from 'react'
import "./style.css"
import { Container, Button, Form, Card, Table } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'



 const data = [

    {
        "id": 1,
        item_code: "10001",
        item_name: "arinara Sauce",
        item_category: "Sauces",
        uom: "ea",
        Opening_Inventory:"1000",
        Closing_Inventory:"1000",
        Stock_Issue:"1000",
        Stock_Consumed:"1000",
        Variance_Value:"1000",
        Variance:"1000"
    },
    {
        "id": 2,
        item_code: "10002",
        item_name: "larinara Sauce",
        item_category: "Sauces",
        uom: "ea",
        Opening_Inventory:"1000",
        Closing_Inventory:"1000",
        Stock_Issue:"1000",
        Stock_Consumed:"1000",
        Variance_Value:"1000",
        Variance:"1000"
    },
    {   "id": 3,
        item_code: "10003",
        item_name: "marinara Sauce",
        item_category: "Sauces",
        uom: "ea",
        Opening_Inventory:"1000",
        Closing_Inventory:"1000",
        Stock_Issue:"1000",
        Stock_Consumed:"1000",
        Variance_Value:"1000",
        Variance:"1000",
    },
    {   "id": 4,
    item_code: "10003",
    item_name: "tarinara Sauce",
    item_category: "Sauces",
    uom: "ea",
    Opening_Inventory:"1000",
    Closing_Inventory:"1000",
    Stock_Issue:"1000",
    Stock_Consumed:"1000",
    Variance_Value:"1000",
    Variance:"1000",
}
  
]

export default function VarianceReport() {
  
  
    const [search, setSearch]= useState('') ;
    console.log(search)

    return (
        < Container fluid>
            <div className='d-flex mb-3 mt-3 buttons_menu_display '>
                <div className='p-2 flex-grow-1 ds_size'> <h4>Variance Report  </h4></div>
                <div> <Button ><i class="fa-solid fa-arrows-rotate" /> Refresh </Button>
                    <Button ><i class="fa-so3id fa-at"></i> Email </Button>
                    <Button> <i class="fa-solid fa-print"></i> Print </Button></div>
            </div>
            <Card>
                <CardHeader className='d-flex border-0 card_color'>
                    <div className='p-2 flex-grow-1'>
                        <h6 > Variance Report </h6> </div>
                        <div className='me-2'> <Form.Control className='option_bar' type="search" placeholder="search" onChange={(e)=> setSearch(e.target.value)}  /></div>
                    <div className='me-2'>   <Form.Select className='option_bar' aria-label="Default select example">
                        <option>Location</option>
                        <option value="1">Islamabad</option>
                        <option value="2">Murree</option>
                        <option value="3">thandiyani</option>
                    </Form.Select>
                    </div>
                    <div className='me-2'>   <Form.Select className='option_bar' aria-label="Default select example">
                        <option>Month</option>
                        <option value="1">July</option>
                        <option value="2">August</option>
                        <option value="3">September</option>
                    </Form.Select>
                    </div>
                    <div className='me-2'>   <Form.Select className='option_bar' aria-label="Default select example">
                        <option>Year</option>
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
                                <th>Item&nbsp;Name</th>
                                <th>Item&nbsp;Category</th>
                                <th>Uom</th>
                                <th>Opening&nbsp;Inventory</th>
                                <th>Closing&nbsp;Inventory</th>
                                <th>Stock&nbsp;Issue</th>
                                <th>Stock&nbsp;Consumed</th>
                                <th>Variance&nbsp;Value</th>
                                <th>Variance</th>
                            </tr>
                        </thead>
                        <tbody className='data_table'>
                            {
                                data.filter((item) => {
                                    return search.toLowerCase() ===''
                                     ? item : item.item_name.toLowerCase().includes(search);
                                })
                                .map((item, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>{item.item_code}</td>
                                            <td>{item.item_name}</td>
                                            <td>{item.item_category}</td>
                                            <td>{item.uom}</td>
                                            <td>{item.Opening_Inventory}</td>
                                            <td>{item.Closing_Inventory}</td>
                                            <td>{item.Stock_Issue}</td>
                                            <td>{item.Stock_Consumed}</td>
                                            <td>{item.Variance_Value}</td>
                                            <td>{item.Variance}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card.Body>


            </Card>

        </Container>
    )

}
