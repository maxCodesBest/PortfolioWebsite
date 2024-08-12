import React from "react";
import TransmitEra from "./TransmitEra";
import IdfEra from "./IdfEra";

function EmploymentHistory() {
  return (
    <div className="section">
      <h1>Employment History</h1>
      <div id="TransmitEra">
        <TransmitEra />
      </div>
      <div id="IdfEra">
        <IdfEra />
      </div>
    </div>
  );
}

export default EmploymentHistory;
