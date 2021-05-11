import React from "react";
import Header from "../fragments/Header";
import LeftSesstion from "../fragments/LeftSession";

export default function Index(props) {
  props.setPageName("Manage Assignment")
  return (

        <div className="col-7">
          <div className="right_session">
            <b>Assignment List</b>
          </div>
        </div>

  );
}
