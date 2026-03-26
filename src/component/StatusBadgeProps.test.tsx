import {render, screen} from '@testing-library/react';  
import StatusBadge from './StatusBadgeProps';

describe('StatusBadge', () => { // Définition d'une suite de tests pour le composant StatusBadge
    //test classique
    test( 'Affiche le bon style pour le statut online', () => { // Test pour vérifier que le badge affiche le bon style pour le statut "online"
        render(<StatusBadge status="online" />);
        const badge = screen.getByTestId('status-badge'); // Récupère l'élément du badge en utilisant son ID de test
        expect(badge).toHaveClass('bg-green-500'); // Vérifie que le badge a la classe CSS correspondant au statut "online"
        expect (screen.getByText(/online/i)).toBeInTheDocument(); // Vérifie que le texte "Online" est présent dans le document
    });

    test( 'Affiche le bon style pour le statut offline', () => { // Test pour vérifier que le badge affiche le bon style pour le statut "offline"
        render(<StatusBadge status="offline" />);
        const badge = screen.getByTestId('status-badge'); // Récupère l'élément du badge en utilisant son ID de test
        expect(badge).toHaveClass('bg-gray-500'); // Vérifie que le badge a la classe CSS correspondant au statut "offline"
    });
});