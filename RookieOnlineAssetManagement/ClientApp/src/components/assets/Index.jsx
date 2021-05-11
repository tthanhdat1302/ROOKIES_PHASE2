import React, { useState } from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";

export default function Index(props) {
  props.setPageName("Manage Asset");
  return (
    <div className="col-7">
      <div className="right_session">
        <b>Asset List</b>
      </div>
    </div>
  );
}
