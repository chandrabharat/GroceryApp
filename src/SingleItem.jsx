export const SingleItem = ({ item, editItem, deleteItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={(e) => editItem(item.id, e.target.checked)}
      ></input>
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isComplete && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => deleteItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
};
