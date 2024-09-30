function HexGenerator() {
  let str = "0123456789abcdef";

  const hex = () => {
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }

    return "#" + color;
  };

  const hexlist = () => {
    let list = [];
    for (let i = 0; i < 30; i++) {
      list.push(hex());
    }
    return list;
  };

  return (
    <>
      <center>
        <h2>Hex Generator</h2>
      </center>

      <div className="color-container">
        {hexlist().map((item) => {
          const style = {
            background: item,
          };
          return (
            <span style={style}>
              <center>{item}</center>
            </span>
          );
        })}
      </div>
    </>
  );
}

export default HexGenerator;
