import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-20 px-4">
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p>I’m a frontend developer with a passion for building beautiful web experiences.</p>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded shadow">📁 Project 1</li>
            <li className="bg-white p-4 rounded shadow">📁 Project 2</li>
            <li className="bg-white p-4 rounded shadow">📁 Project 3</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p>Reach me at <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a></p>
        </section>
      </main>

      <footer className="bg-white text-center p-4 border-t mt-20">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
