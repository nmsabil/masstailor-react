import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function iconDescription(props) {
  return (
    <div className='iconDescription'>
      <FontAwesomeIcon icon={props.icon} />
      <h3>
        {props.textColor} <span className='color'>{props.text}</span>{" "}
      </h3>
    </div>
  );
}

export default iconDescription;
