import React, { useState, useEffect } from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Button, Input, Table } from "reactstrap";
import "../../css/user_css/index.css";
import {
  faPen,
  faTimesCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import DisablePopUp from './DisablePopUp';
import DetailPopUp from './DetailPopUp';

export default function Index() {


  return (
    <div>
      <Header page="Manage User"></Header>
      <div className="row">
        <div className="col-3">
          <LeftSesstion></LeftSesstion>
        </div>
        <div className="col-6">
          <div className="right_session">
            <div className="row" id="firstRowInRight">
              <div className="col-12">
                <b>User List</b>
              </div>
            </div>

            <div className="row" id="secondRowInRight">
              <div className="col-3">
                <Select
                 
                  placeholder="Type"
                
                ></Select>
              </div>
              <div className="col-6" id="searchInput">
                <Input ></Input>
                <Button color="primary" >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </div>
              <div className="col-3">
                <Button color="danger" >
                  Create new user
                </Button>
              </div>
            </div>

            <Table responsive>
              <thead>
                <tr>
                  <th>Staff Code</th>
                  <th>Full Name</th>
                  <th>Username</th>
                  <th>JoinedDate</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
               
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
