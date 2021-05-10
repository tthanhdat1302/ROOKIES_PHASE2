import React from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";

export default function CreateAsset() {
  return (
    <div>
      <Header page="Manage Asset > Create New Asset"></Header>
      <div className="row">
        <div className="col-3">
          <LeftSesstion></LeftSesstion>
        </div>
        <div className="col-7">
          <div className="right_session">
            <b>Create New Asset</b>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
