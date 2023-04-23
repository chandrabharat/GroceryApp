import { SingleItem } from "./SingleItem";

export const Items = ({ items, editItem, deleteItem }) => {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            editItem={editItem}
            deleteItem={deleteItem}
            key={item.id}
          />
        );
      })}
    </section>
  );
};
