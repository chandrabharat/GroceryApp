import { useState } from "react";

export const Form = ({ addItem }) => {
  const [currItem, setCurrItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(currItem);
    setCurrItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery List</h4>
      <div className="form-control">
        <input
          type="text"
          value={currItem}
          onChange={(e) => setCurrItem(e.target.value)}
          className="form-input"
        ></input>
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
