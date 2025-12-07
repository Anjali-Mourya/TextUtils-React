import React from "react";
import "./Alert.css";

export default function Alert({ alert }) {
  return (
    alert && (
      <div className={`alert-box alert-${alert.type}`}>
        {alert.msg}
      </div>
    )
  );
}
