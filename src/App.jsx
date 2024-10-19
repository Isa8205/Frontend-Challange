import { useState } from "react";
import TaskBoard from "./components/TaskBoard";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader />
      <TaskBoard />
    </>
  )
}

export default App;