import React from "react";

export default function Portfolio() {
  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen px-6 py-10 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Abdelrahman Aboghanima</h1>
        <p className="text-sm">Giza, Egypt | (+20) 1556757667 | abdo.aboganima@gmail.com</p>
        <p className="text-sm">
          <a href="https://github.com/abdoaboganima" className="text-blue-600">GitHub</a> |{" "}
          <a href="https://www.linkedin.com/in/abdoaboganima" className="text-blue-600">LinkedIn</a>
        </p>
      </header>
      ...
      <footer className="text-center text-sm mt-10 text-gray-500">
        © {new Date().getFullYear()} Abdelrahman Aboghanima. All rights reserved.
      </footer>
    </main>
  );
}