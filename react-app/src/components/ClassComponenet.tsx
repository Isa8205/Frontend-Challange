import { ThumbsDownIcon } from "lucide-react";
import React from "react";

class ClassComponent extends React.Component {
  state = {
    count: 0,
    hexlist: undefined,
  };

  render() {
    const count = this.state.count;

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

    const list = hexlist();
    const list2 = hexlist();
    const list3 = hexlist();

    return (
      <>
        <center>
          <h2>Hex Generator</h2>
        </center>
        <div className="color-container">
          {list.map((item, index) => {
            const style = {
              background: `linear-gradient(145deg, ${item}, ${list3[index]})`,
            };
            return (
              <span style={style}>
                <center>
                  {item} and {list2[index]}
                </center>
              </span>
            );
          })}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => this.setState({ list: hexlist() })}
        >
          Regenerate
        </button>
      </>
    );
  }
}

export default ClassComponent;
