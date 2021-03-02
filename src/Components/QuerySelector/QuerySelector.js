import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./QuerySelector.scss";

function QuerySelector(props) {
  const [underline, setUnderline] = useState("underline");

  function all() {
    setUnderline("underline");

    props.setFilter("");
  }
  function mecanico() {
    setUnderline("mecanico");

    props.setFilter("mecanico");
  }
  function membrana() {
    setUnderline("membrana");

    props.setFilter("membrana");
  }
  function mouse() {
    setUnderline("mouse");

    props.setFilter("mouse");
  }
  function headset() {
    setUnderline("headset");

    props.setFilter("headset");
  }
  function monitor() {
    setUnderline("monitor");

    props.setFilter("monitor");
  }
  function sillas() {
    setUnderline("sillas");

    props.setFilter("sillas");
  }

  return (
    <div className="query-ctn">
      <ul className="query-selector">
        <li className="query-selected" onClick={all}>
          Todo
        </li>
        <li className="query-selected" onClick={mecanico}>
          Mecanico
        </li>
        <li className="query-selected" onClick={membrana}>
          Membrana
        </li>
        <li className="query-selected" onClick={mouse}>
          Mouse
        </li>
        <li className="query-selected" onClick={headset}>
          Headset
        </li>
        <li className="query-selected" onClick={monitor}>
          Monitor
        </li>
        <li className="query-selected" onClick={sillas}>
          Sillas
        </li>
      </ul>
      <div className={underline}></div>
    </div>
  );
}

export default QuerySelector;
