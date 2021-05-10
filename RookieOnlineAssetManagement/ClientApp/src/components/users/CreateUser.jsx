import React, { useState, useEffect } from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input, Button } from "reactstrap";
import "../../css/user_css/create.css";
import Select from "react-select";
import DateTimePicker from 'react-datetime-picker';

export default function CreateUser() {


  return (
    <div>
      <Header page="Manage User > Create New User"></Header>
      <div className="row">
        <div className="col-3">
          <LeftSesstion></LeftSesstion>
        </div>
        <div className="col-3">
          <div className="right_session">
            <div className="row" id="firstRowInRight">
              <b>Create New User</b>
            </div>

            <div id="secondRowInRight">
              <div className="row createUserRow">
                <div className="col-4">
                  <label>First Name</label>
                </div>
                <div className="col-8">
                  <Input
                    type="text"
                     
                    name="FirstName"
                  ></Input>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Last Name</label>
                </div>
                <div className="col-8">
                  <Input
                    type="text"
                     
                    name="LastName"
                  ></Input>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Date of Birth</label>
                </div>
                <div className="col-8">
                  <DateTimePicker  format="dd/MM/y" clearIcon maxDate={new Date()} className="dateTimeCreateUser"></DateTimePicker>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Gender</label>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-4 radioBtnCreateUser">
                      <Input type="radio" /> Male
                    </div>
                    <div className="col-8">
                      <Input type="radio"  /> Female
                    </div>
                  </div>               
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Joined Date</label>
                </div>
                <div className="col-8">
                  <DateTimePicker format="dd/MM/y"  className="dateTimeCreateUser"></DateTimePicker>
                  <label className="validateErr"></label>
                </div>
              </div>

              <div className="row createUserRow">
                <div className="col-4">
                  <label>Type</label>
                </div>
                <div className="col-8">
                  <Select
                  
                  ></Select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6"></div>
              <div className="col-3">
                <Button color="danger">
                  Create
                </Button>
              </div>
              <div className="col-3">
                <Button >Cancel</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
