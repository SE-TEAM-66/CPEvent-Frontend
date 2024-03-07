import PropTypes from "prop-types";
import React, { useState } from "react";

Notify.propTypes = {
  sender: PropTypes.string,
  message: PropTypes.string,
};
function Notify(props) {
  const { sender, message } = props;
  return (
    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-md">
      <p>
        <strong>{sender}</strong>
        {message}
      </p>
    </div>
  );
}

export default Notify;
