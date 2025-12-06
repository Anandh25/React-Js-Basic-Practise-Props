import "./App.css";
import { useState } from "react";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practise Coding" },
    { id: 2, checked: true, item: "Play Cricket" },
    { id: 3, checked: true, item: "Read about AI" },
  ]);

  const handleClick = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  return (
    <>
      <Header title="Anandh To-do" />
      <Content
        items={items}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
