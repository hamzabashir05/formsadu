import React, { Component, useEffect, useState } from "react";
import { Container, Button, Form, Card, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./style.css";

export default function DepletingInventory() {
  
  const [itemval, setitemval] = useState([]);

  const fetchitemval = async () => {
    let result = await fetch("http://localhost:3000/depletingInventory");
    result = await result.json();
    setitemval(result);
  };
  useEffect(() => {
    fetchitemval();
  }, []);

  return (
    <Container fluid>
      <div className="d-flex mb-3 mt-3 buttons_menu_display">
        <div className="p-2 flex-grow-1 ds_size">
          {" "}
          <h4>Depleting Inventory </h4>
        </div>
        <div>
          <Button>  <i class="fa-solid fa-arrows-rotate" /> Refresh{" "}  </Button>
          <Button><i class="fa-so3id fa-at"></i> Email{" "}   </Button>
          <Button>   <i class="fa-solid fa-print"></i> Print{" "} </Button>
        </div>
      </div>
      <Card>
        <CardHeader className="d-flex card_color border-0">
          <div className="p-2 flex-grow-1">
            <h6> Depleting Inventory </h6>  </div>
            <div className="me-2 option_bar" >  <Form.Control type="search" placeholder="search"  /></div>
          <div className="me-2">
            <Form.Select
              className="option_bar" aria-label="Default select example" >
              <option>city</option>
              <option value="1">Islamabad</option>
              <option value="2">Murree</option>
              <option value="3">thandiyani</option>
            </Form.Select>
          </div>
          <div className="me-2">
            <Form.Control
              className="option_bar" type="date" placeholder="exp"
            ></Form.Control>
          </div>
          <div className="me-2">
            <Form.Control
              className="option_bar" type="date"  placeholder="exp"
            ></Form.Control>
          </div>
        </CardHeader>
        <Card.Body>
          <Table
            bordered
            responsive
            className="mt-3 align-middle item_code_table"
          >
            <thead>
              <tr>
                <th>Item&nbsp;Code</th>
                <th>Item&nbsp;Name</th>
                <th>Item&nbsp;Category</th>
                <th>Uom</th>
                <th>Opening&nbsp;Inventory</th>
                <th>Purchases</th>
                <th>Theoretical&nbsp;Consumption</th>
                <th>Inventory&nbsp;on&nbsp;Hand</th>
                <th>Par</th>
                <th>To&nbsp;be&nbsp;Ordered</th>
              </tr>
            </thead>
            <tbody className="data_table">
              {itemval.map((itemval, ind) => {
                return (
                  <tr>
                    <td>{itemval.item_code}</td>
                    <td>{itemval.item_name}</td>
                    <td>{itemval.item_category}</td>
                    <td>{itemval.uom}</td>
                    <td>{itemval.Opening_Inventory}</td>
                    <td>{itemval.Purchases}</td>
                    <td>{itemval.Theoretical_Consumption}</td>
                    <td>{itemval.Inventory_onHand}</td>
                    <td>{itemval.Par}</td>
                    <td>{itemval.Tobe_Ordered}</td>
                  </tr>
                );
              })}


            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}
