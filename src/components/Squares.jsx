import React from "react";

const Squares = ({ value, onClick }) => {
  return (
    <div>
      <button className="square" onClick={onClick}>
        {" "}
        {value}
      </button>
    </div>
  );
};

export default Squares;
