import React from "react";

import "../index.css";
import Listitems from "./Listitems";

const Content = ({ items, handleClick, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <Listitems
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ color: "red" }}>Your list is empty!</p>
      )}
    </main>
  );
};

export default Content;
