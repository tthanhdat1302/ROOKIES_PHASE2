import React from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";

export default function CreateAssignment(props) {
  props.setPageName("Manage Assignment > Create New Assignment")
  return (
        <div className="col-7">
          <div className="right_session">
            <b>Create New Assignment</b>
          </div>
        </div>

  );
}
