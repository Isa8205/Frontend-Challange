function ListGroup() {
  let items = ["Kenya", "New York", "Barcelona", "London"];

  return (
    <>
      <h4>List Group</h4>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item) => {
          return (
            <li
              key={item}
              className="list-group-item"
              onClick={() => {
                console.log("Clicked");
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
