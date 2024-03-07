import React from "react";
import PropTypes from 'prop-types';

OpenPosition.propTypes = {
  role: PropTypes.string,
};

export default function OpenPosition(props) {
  const { role } = props;
  return (
    <div className="flex items-center py-2 gap-2 font-poppin">
      <span className="font-normal text-sm font-poppin">{role}</span>
      {/* <div className="bg-basebadge-100 py-1 px-3 rounded-full text-xs font-thin font-poppin">JavaScript</div>
      <div className="bg-basebadge-100 py-1 px-3 rounded-full text-xs font-thin font-poppin">HTML/CSS</div>
      <div className="bg-basebadge-100 py-1 px-3 rounded-full text-xs font-thin font-poppin">+3</div> */}
    </div>
  );
}
