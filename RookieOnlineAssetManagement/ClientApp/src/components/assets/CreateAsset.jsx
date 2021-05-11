import React from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";

export default function CreateAsset(props) {
  props.setPageName("Manage Asset > Create New Asset")
  return (

        <div className="col-7">
          <div className="right_session">
            <b>Create New Asset</b>
          </div>
        </div>

  );
}
