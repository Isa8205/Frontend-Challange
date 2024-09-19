import { useState } from "react";

function ListGroup() {
  let items = ["Kenya", "New York", "Barcelona", "London"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h4>List Group</h4>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => {
          return (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
