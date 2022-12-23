import React from "react";

let Text = function (props) {
  return (
    <div>
      <b>{props.label}</b> : {props.value}
    </div>
  );
};

export default Text;
