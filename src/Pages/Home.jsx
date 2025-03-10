import { useState } from "react";

function Home() {
  const [name, setName] = useState("Bijen");

  const toggleName = () => {
    setName((naam) => (naam === "Bijen" ? "Yugen" : "Bijen"));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Doctor Appointment System
      </h1>
      <p className="text-gray-600 mb-4">Book your appointment with ease!</p>

      <button
        onClick={toggleName}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Switch Name (Current: {name})
      </button>
    </div>
  );
}

export default Home;
