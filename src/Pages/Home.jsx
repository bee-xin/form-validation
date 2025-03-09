import { useState } from "react";

function Home() {
  const [name, setName] = useState("Bijen");
  const toggleName = () => {
    setName((naam) => (naam === "Bijen" ? "Yugen" : "Bijen"));
  };
  return (
    <div>
      <h1>His name is {name}.</h1>
      <button onClick={toggleName}>Click</button>
    </div>
  );
}
export default Home;
