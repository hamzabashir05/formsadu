
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import PurchaseReport from './components/PurchaseReport';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { Col, Container, Row } from 'react-bootstrap';
import Productmix from './components/Productmix';
import StockIssuance from './components/StockIssuance';
import DepletingInventory from './components/DepletingInventory';
import DemandSupply from './components/DemandSupply';
import VarianceReport from './components/VarianceReport';
import VarianceReport2 from './components/VarianceReport2';

function App() {
  return (
    < Container fluid >
      <Row>
        <Col md={12} >
          <Header />
        </Col>
      </Row>   
      <BrowserRouter>
        <Row>
          <Col md={1} className='text-center' style={{ borderRight: "1px solid #d3d3d3" }}>
            <Sidebar />
          </Col>
          <Col md={11}>
            <Routes>
              <Route exact path='/' element={< Main />} />
              <Route exact path='/purchase_report' element={< PurchaseReport />} />
              <Route exact path= '/product_mix' element={<Productmix/>} ></Route>
              <Route exact path='/Stock_issuance' element={<StockIssuance/>}></Route>
              <Route export path='/Depleting_Inventory' element={<DepletingInventory/>}></Route>
              <Route export path='/Demand_Supply' element={<DemandSupply/>}></Route>
              <Route export path='/Variance_report' element={<VarianceReport/>}></Route>
              <Route export path='/Variance_report2' element={<VarianceReport2/>}> </Route>
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>



    </Container>
  );
}

export default App;
