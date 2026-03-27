import SearchBar from "@/component/SearchBar";
import ProfileCard from "@/component/ProfileCard";
import StatusBadge from "@/component/StatusBadgeProps"; // Utilise le nom exact de ton fichier

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8 text-black">Mon Dashboard Élite</h1>
      
      {/* Ici on appelle nos composants Next.js */}
      <SearchBar /> {/* Affiche la barre de recherche */}

       {/* Affiche une carte de profil avec des informations d'exemple */}

      <div className="flex gap-6 items-start">
        <ProfileCard // Affiche une carte de profil avec des informations d'exemple
          name="Sadefo" // Affiche le nom du profil
          role="Développeur Fullstack" 
          ville="Yaoundé" 
          skills={["Next.js", "PHP", "Jest"]} // Affiche les compétences du profil
        />

        
        {/* Affiche le statut actuel avec un badge de statut */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <p className="text-gray-600 mb-2">Mon Statut actuel :</p>
          <StatusBadge status="online" /> {/* Affiche un badge de statut en ligne */}
        </div>
      </div>
    </main>
  );
}