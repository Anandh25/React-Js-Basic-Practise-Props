import React from "react";

import Lineitem from "./Lineitem";

const Listitems = ({ items, handleClick, handleDelete }) => {
  return (
    <div>
      <ul className="unorder-list">
        {items.map((item) => (
          <Lineitem
            item={item}
            key={item.id}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Listitems;
