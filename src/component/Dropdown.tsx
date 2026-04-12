"use client";

import { use, useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Options
      </button>

      {isOpen && (
        <ul
          role="menu"
          className="absolute mt-2 w-48 bg-white border rounded shadow-lg"
        >
          <li role="none">
            <button role="menuitem" className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-black">
              Profil
            </button>
          </li>
          <li role="none">
            <button role="menuitem" className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-black">
              Paramètres
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}