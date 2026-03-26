interface StatusBadgeProps { // Définition des types pour les props du composant
  status: 'online' | 'away' | 'offline'; // Le statut à afficher, limité à ces trois valeurs
}

export default function StatusBadge({ status }: StatusBadgeProps) { // Composant fonctionnel qui prend le statut et affiche un badge de couleur correspondante
  const Colors = {// rendu de couleur via un objet ou un switch case
    online: 'bg-green-500', // Couleur verte pour le statut "online"
    away: 'bg-yellow-500', // Couleur jaune pour le statut "away"
    offline: 'bg-gray-500', // Couleur grise pour le statut "offline"
  };

 return (
    <span className={`px-2 py-1 rounded text-white text-xs font-bold ${Colors[status]}`}
    data-testid="status-badge" > {/*  Applique les classes CSS pour le badge, y compris la couleur basée sur le statut */}
        {status.toUpperCase()} {/* Affiche le statut en majuscules à côté du badge */}
    </span> 
  );
}