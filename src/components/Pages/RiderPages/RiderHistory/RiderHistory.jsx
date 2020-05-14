import React from "react";
import { Helmet } from "react-helmet";
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./RiderHistory.css";

const RiderHistory = () => {
  let number = 1;
  return (
    <div>
      <Helmet>
        <title>Ride History</title>
      </Helmet>
      <MDBContainer>
        <div className="mt-5">
          <MDBTable responsive>
            <MDBTableHead color="success-color" textWhite>
              <tr>
                <th>#</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Distance</th>
                <th>Driver</th>
                <th>Vehicle</th>
                <th>Total Riders</th>
                <th>Group</th>
                <th>Date</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{number}</td>
                <td>Wapda Town</td>
                <td>Comsats University Islamabad, Lahore Campus</td>
                <td>11 KM</td>
                <td>Ahmad Ali</td>
                <td>Suzuki Cultus</td>
                <td>2</td>
                <td>None</td>
                <td>13th April, 2020</td>
              </tr>
              <tr>
                <td> {(number += 1)} </td>
                <td>Wapda Town</td>
                <td>69 E, Model Town, Lahore</td>
                <td>8 KM</td>
                <td>Usman Ali</td>
                <td>Suzuki WagonR</td>
                <td>3</td>
                <td>None</td>
                <td>18th April, 2020</td>
              </tr>
              <tr>
                <td> {(number += 1)} </td>
                <td>Wapda Town</td>
                <td>Governor House, Mall Road, Lahore</td>
                <td>22 KM</td>
                <td>Ahmed Salim</td>
                <td>Suzuki WagonR</td>
                <td>2</td>
                <td>None</td>
                <td>1st May, 2020</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBContainer>
    </div>
  );
};

export default RiderHistory;
