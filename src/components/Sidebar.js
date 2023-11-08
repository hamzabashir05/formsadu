import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (

      <Nav className="flex-column">
        <Link to="/" className="mb-3">
          <img src="./assets/front desk.png" width={25} alt="" />
        </Link>
        <Link to="./purchase_report" className="mb-3">
          <img src="./assets/pos dashboard.png" width={25} alt="" />
        </Link>

        <Link to="./Product_mix" className="mb-3">
          <img src="./assets/guest.png" width={25} alt="" />
        </Link>
        <Link to="./Stock_issuance" className="mb-3">
          <img src="./assets/restaurant.png" width={25} alt="" />
        </Link>
        <Link to="./Depleting_Inventory" className="mb-3">
          <img src="./assets/accounts.png" width={25} alt="" />
        </Link>
        <Link to="./Demand_Supply" className="mb-3">
          <img src="./assets/accounts2.png" width={25} alt="" />
        </Link>
        <Link to="./Variance_report" className="mb-3">
          <img src="./assets/setting.png" width={25} alt="" />
        </Link>
        <Link to="./Variance_report2" className="mb-3">
          <img src="./assets/night audit.png" width={25} alt="" />
        </Link>
        <Link to="#" className="mb-3">
          <img src="./assets/corporate billing.png" width={25} alt="" />
        </Link>
        <Link to="#" className="mb-3">
          <img src="./assets/company.png" width={25} alt="" />
        </Link>
        <Link to="#" className="mb-3">
          <img src="./assets/house keeping.png" width={25} alt="" />
        </Link>

        <Link to="#" className="mt-5">
          <img src="./assets/logout.png" width={25} alt="" />
        </Link>
      </Nav>


  );
}
