interface ProfileCardProps {
  name: string;
  role: string;
  ville: string;
  skills: string[];
}

// On utilise "props" au lieu de décomposer entre les parenthèses
export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      {/* En écrivant props.name, le mot ne sera plus barré par VS Code */}
      <h2 className="text-xl font-bold">{props.name}</h2>
      <p className="text-gray-600">{props.role}</p>
      <p className="text-sm text-gray-500">{props.ville}</p>

      {/*  */}
      <div className="flex gap-2 mt-4 flex-wrap"> 
        {props.skills.length === 0 ? ( // On vérifie si la liste des compétences est vide
          <p className="text-xs text-gray-400 italic">Aucune compétence renseignée</p> // Si c'est le cas, on affiche un message d'alerte
        ) : (
          props.skills.map((skill, index) => ( // On utilise "props.skills" pour accéder à la liste des compétences
            <span  
              key={index} // On utilise "index" comme clé pour chaque badge de compétence
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-200" // On ajoute une bordure pour faire ressortir les badges
            >
              {skill} {/* On affiche le nom de la compétence */}
            </span>
          ))
        )}
      </div>
    </div>
  );
}