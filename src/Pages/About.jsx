import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 text-center max-w-md">
        HeyDoc! is a simple and user-friendly doctor appointment system that
        helps patients find and book appointments with doctors quickly and
        efficiently.
      </p>
    </div>
  );
}

export default About;
