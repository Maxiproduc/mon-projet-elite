"use client";// Cette ligne indique que ce composant doit être rendu côté client, ce qui est nécessaire pour les composants qui utilisent des hooks d'état ou d'effets, comme useState dans ce cas. Cela permet à React de gérer l'état local du composant et de réagir aux interactions de l'utilisateur, comme le clic sur le bouton pour ouvrir ou fermer le menu déroulant.

import { use, useState } from "react"; // On importe les hooks use et useState de React. useState est utilisé pour gérer l'état local du composant, en l'occurrence l'état d'ouverture ou de fermeture du menu déroulant. use pourrait être utilisé pour des fonctionnalités supplémentaires, comme la gestion d'effets secondaires ou la récupération de données, bien que dans ce code spécifique, il n'est pas utilisé.

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false); // On utilise useState pour créer une variable d'état isOpen qui indique si le menu déroulant est ouvert ou fermé. La valeur initiale de isOpen est false, ce qui signifie que le menu est fermé par défaut. La fonction setIsOpen est utilisée pour mettre à jour l'état de isOpen en fonction des interactions de l'utilisateur, comme le clic sur le bouton pour ouvrir ou fermer le menu.

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