// 'use client'; // Interactif !

// import { useState } from 'react';

// export default function RegisterForm({ onRegister }: { onRegister: (email: string) => void }) {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       onRegister(email); // On appelle la fonction de succès passée en "props"
//       setEmail(""); // On vide le champ
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-md">
//       <h2 className="font-bold mb-2 text-black">Inscription Élite</h2>
//       <input 
//         type="email" 
//         placeholder="votre@email.com"
//         className="border p-2 w-full text-black mb-2"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
//         S&apos;inscrire
//       </button>
// //     </form>
//   );
// }

'use client';
import { useState } from 'react';

export default function RegisterForm() { // On retire la prop onRegister
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // On met l'alerte directement ici pour le moment
    alert(`Inscription réussie pour : ${email}`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-md">
      <h2 className="font-bold mb-2 text-black">Inscription Élite</h2>
      <input 
        type="email" 
        placeholder="votre@email.com"
        className="border p-2 w-full text-black mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
        S&apos;inscrire
      </button>
    </form>
  );
}