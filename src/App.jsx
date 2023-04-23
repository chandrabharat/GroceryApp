import { useState } from "react";
import { Form } from "./Form";
import { Items } from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const addItem = (item) => {
    if (item === "") {
      toast.error("Cannot add Empty Grocery");
      return;
    }
    const itemObj = {
      id: nanoid(),
      name: item,
      isComplete: false,
    };

    setItems([...items, itemObj]);
    toast.success("Added Grocery");
    localStorage.setItem("items", JSON.stringify([...items, itemObj]));
  };

  const editItem = (id, completed) => {
    const itemObj = items.find((item) => item.id === id);
    itemObj.isComplete = completed;
    const newItems = [...items];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    toast.success("Removed Grocery");
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} editItem={editItem} deleteItem={deleteItem} />
    </section>
  );
};

export default App;
