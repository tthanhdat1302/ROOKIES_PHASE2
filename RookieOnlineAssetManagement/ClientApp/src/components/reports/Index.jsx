import React from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";

export default function Index(props) {
  props.setPageName("Report");
  return (
    <div className="col-7">
      <div className="right_session">
        <b>Report</b>
      </div>
    </div>
  );
}
