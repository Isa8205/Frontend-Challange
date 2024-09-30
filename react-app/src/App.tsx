import HexGenerator from "./components/HexGenerator";
import ListGroup from "./components/ListGroup";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <h1>Hello there</h1>
      <p>Where Dreams Are Made a reality</p>

      <div>
        <ListGroup />
      </div>

      <div>
        <ProfileCard />
      </div>

      <HexGenerator />
    </>
  );
}

export default App;
