import React from "react";
import { FaPlus } from "react-icons/fa";

const Additem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
          type="text"
          autoFocus
          required
          id="addItem"
          placeholder="Add items here"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" aria-label="Add Item"></button>
        <FaPlus />
      </form>
    </div>
  );
};

export default Additem;
