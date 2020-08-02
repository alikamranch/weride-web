import React from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBAlert,
} from "mdbreact";
import "./DriverEarnings.css";

const DriverEarnings = () => {
  let number = 1;
  return (
    <div>
      <Helmet>
        <title>Earnings</title>
      </Helmet>

      <br></br>
      <MDBContainer className="text-left">
        <MDBAlert color="warning" dismiss>
          <b>Note</b>
          <br />
          20% cut of all fare kept by WERide according to policy.
        </MDBAlert>
      </MDBContainer>

      <MDBContainer className="text-left">
        <h3>Total</h3>
        <h1>
          <b>845 PKR</b>
        </h1>
        <hr></hr>
      </MDBContainer>
      <MDBContainer fluid>
        <div className="mt-5">
          <MDBTable responsive>
            <MDBTableHead color="success-color" textWhite>
              <tr>
                <th>#</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Distance</th>
                <th>Vehicle</th>
                <th>Total Riders</th>
                <th>Group</th>
                <th>Package</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Date</th>
                <th>Earned</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{number}</td>
                <td>Wapda Town</td>
                <td>Comsats University Islamabad, Lahore Campus</td>
                <td>11 KM</td>
                <td>Road Prince Green</td>
                <td>2</td>
                <td>None</td>
                <td>None</td>
                <td>4.5</td>
                <td>Good Experience</td>
                <td>13th April, 2020</td>
                <td>241 PKR</td>
              </tr>
              <tr>
                <td> {(number += 1)} </td>
                <td>Wapda Town</td>
                <td>69 E, Model Town, Lahore</td>
                <td>8 KM</td>
                <td>Suzuki WagonR</td>
                <td>3</td>
                <td>None</td>
                <td>None</td>
                <td>5</td>
                <td>Excellent Driver!</td>
                <td>18th April, 2020</td>
                <td>224 PKR</td>
              </tr>
              <tr>
                <td> {(number += 1)} </td>
                <td>Wapda Town</td>
                <td>Governor House, Mall Road, Lahore</td>
                <td>22 KM</td>
                <td>Suzuki WagonR</td>
                <td>2</td>
                <td>None</td>
                <td>None</td>
                <td>4</td>
                <td>Driver was late</td>
                <td>1st May, 2020</td>
                <td>380 PKR</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBContainer>
    </div>
  );
};

export default DriverEarnings;
