'use client'; // 1 Directive pour indiquer que ce composant doit être rendu côté client

import React, { useState } from 'react'; // 2 hook Importation de React et du hook useState pour gérer l'état du composant

export default function SearchBar() { // Composant fonctionnel pour la barre de recherche
    // 3. On crée notre état : [valeur_actuelle, fonction_pour_changer modificateur]
    const [recherche, setRecherche] = useState(''); // 4 Initialisation de l'état "recherche" avec une chaîne vide

    return (
    <div className="p-4 border rounded bg-white shadow-sm"> {/* Conteneur de la barre de recherche avec des styles Tailwind CSS */}
      <label className="block mb-2 text-sm font-bold text-gray-700"> {/* Label pour le champ de recherche */}
        Rechercher un étudiant :
      </label>

      <input 
        type="text"
        className="border p-2 w-full rounded text-black"
        placeholder="Tapez un nom..."
        // 5. À chaque touche tapée, on met à jour la boîte "recherche"
        onChange={(e) => setRecherche(e.target.value)} // 6. On utilise la fonction "setRecherche" pour mettre à jour l'état avec la valeur actuelle du champ de recherche
      />

        {/* 7. Affichage en temps reel de ce que l'utilisateur a tapé dans la barre de recherche */}
      <p className="mt-4 text-blue-600">
        Vous cherchez : <span className="font-bold">{recherche}</span> {/* Affiche la valeur actuelle de "recherche" */}
      </p>
    </div>
  );
}