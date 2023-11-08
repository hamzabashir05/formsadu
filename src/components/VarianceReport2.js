import React, { useEffect, useState } from 'react'
import "./style.css"
import { Container, Button, Form, Card, Table, Row, Col, Badge } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import axios from "axios";

export default function VarianceReport2() {


    const [sortvalue, setsortvalue] = useState("");
    const [value, setValue] = useState([])
    const [data, setdata] = useState([]);
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [filteredData, setFilteredData] = useState([]);


    const sortOptions = ["item_code", "item_name", "item_category", "uom", "Opening_Inventory", "Closing_Inventory", "Stock_Issue", "Stock_Consumed", "Variance_Value", "Variance"];

    // const fetchitemval = async () => {
    //     let result = await fetch("http://localhost:3000/variancereport2")
    //     result = await result.json();
    //     setitemval(result);

    // }
     const Locationoptions = ["islamabad", "murree", "thandiyani"];


    useEffect(() => {
        LoadUseritemval();
    }, [])

    const LoadUseritemval = async (e) => {

        return await axios
            .get('http://localhost:3000/variancereport2')
            .then((response) => setdata(response.data))
            .catch((err) => console.log(err));

    };
    console.log("data", data);

    useEffect(() => {
        handleSearch();
     },[])
    const handleSearch = async (e) => {
        // e.preventDefault();
        return await axios
            .get(`http://localhost:3000/variancereport2?q=${value}`)
            .then((response) => {
                setdata(response.data);
                setValue("");
            })
            .catch((err) => console.log(err));
    };



    const handleSort = async (e) => {
        let value = e.target.value;
        setsortvalue(value);
        return await axios
            .get(`http://localhost:3000/variancereport2?_sort=${value}&_order=asc`)
            .then((response) => {
                setdata(response.data);
            })
            .catch((err) => console.log(err));
    };


    const handleLocation = (location) => {
        setLocation(location);
      };
      
      useEffect(() => {
        if (location) {
          const filterResults = data.filter(item => item.location === location);
          setFilteredData(filterResults);
        } else {
          setFilteredData(data); 
        }
      }, [location, data]);

    return (
        < Container fluid >
            <Row className='d-flex mb-3 mt-3 buttons_menu_display'>
                <Col md={3}><div className='p-2 ds_size'> <h4>Variance Report  </h4></div></Col>
                <Col md={6} className='d-flex ' >
                    <div> <Badge className='bd_green_vr'> <p>Stock Issuance</p> <p>15000</p>  </Badge>
                        <Badge className='bd_orange_vr'> <p>Stock Consumed</p> <p>15000</p> </Badge>
                        <Badge className='bd_green_vr'> <p>Variance</p> <p>25%</p></Badge> </div>
                </Col>
                <Col md={3} className='d-flex'>
                    <div> <Button ><i class="fa-solid fa-arrows-rotate" /> Refresh </Button>
                        <Button ><i class="fa-so3id fa-at"></i> Email </Button>
                        <Button> <i class="fa-solid fa-print"></i> Print </Button></div>
                </Col>
            </Row>

            <Card >
                <CardHeader className='d-flex  card_color border-0'>
                    <div className='p-2 flex-grow-1'>
                        <h6 > Variance Report </h6> </div>
                    {/* <form onSubmit={handleSearch}>  <input className='option_bar' 
                        type="text" placeholder="search" onSubmit={handleSearch} value={value} onChange={(e)=> setValue(e.target.value)} /> 
                        <button type="submit" onClick={()=> handleSearch}> search</button>
                        <button onClick={()=> handleReset()}>Reset</button>
                        </form> */}

                    <input className='option_bar'
                        type="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} />

                    <select className='me-2 option_bar' aria-label="Default select example" onChange={handleSort} value={sortvalue}>
                        <option>Order By</option>
                        {sortOptions.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}

                    </select>

                    <select className='me-2 option_bar' aria-label="Default select example" onChange={(e) => handleLocation(e.target.value)} value={location}>
                        <option value=''>Location</option>
                        {Locationoptions.map((item, id) => (
                            <option value={item} key={id}>
                                {item}
                            </option>
                        ))}

                    </select>
                    {/* <div className='me-2'>   <Form.Select className='option_bar' aria-label="Default select example">
                        <option>Location</option>
                        <option value="1" >Islamabad</option>
                        <option value="2" >Murree</option>
                        <option value="3">thandiyani</option>
                    </Form.Select>
                    </div> */}
                    <div className='me-2'>   <Form.Select className='option_bar' aria-label="Default select example">
                        <option>Month</option>
                        <option value="1">July</option>
                        <option value="2">August</option>
                        <option value="3">September</option>
                    </Form.Select>
                    </div>
                    <div className='me-2'>   <Form.Select className='option_bar' aria-label="Default select example">
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
                                <th>item&nbsp;Code</th>
                                <th>item&nbsp;Name</th>
                                <th>item&nbsp;Category</th>
                                <th>UOM</th>
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
                                filteredData.filter((item) => {
                                    return search.toLowerCase() === ''
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


