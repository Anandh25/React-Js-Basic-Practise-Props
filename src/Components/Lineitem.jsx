import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Lineitem = ({ item, handleClick, handleDelete }) => {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleClick(item.id)}
          key={item.id}
        />
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleClick(item.id)}
        >
          {item.item}
        </label>
        <FaTrashAlt
          role="button"
          tabIndex={0}
          onClick={() => handleDelete(item.id)}
        />
      </li>
    </div>
  );
};

export default Lineitem;
