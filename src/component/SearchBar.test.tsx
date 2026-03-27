import {render, screen, fireEvent} from '@testing-library/react' // Importation des fonctions de test et du composant à tester
import SearchBar from './SearchBar'  // Importation du composant SearchBar

describe('SearchBar Component', () => { // Début de la suite de tests pour le composant SearchBar
    test('doit mettre à jour la valeur de l\'input lors de la saisie', () => { // Test pour vérifier que la valeur de l'input est mise à jour correctement
        //on affiche le composant dans le laboratoire de test
        render(<SearchBar />) // Rendu du composant SearchBar pour les tests

        // 2. On attrape la case de saisie (input) par son "placeholder"
        const input = screen.getByPlaceholderText(/tapez un nom/i) // Récupération de l'élément input par son placeholder

        // On dit au robot : "Change la valeur de cet input pour 'Philippe'"
        fireEvent.change(input, { target: { value: 'Philippe' } }) // Simulation d'un changement de valeur dans l'input

        // 4. On vérifie que le texte bleu affiche bien ce qu'on a tapé
        const displayedText = screen.getByText(/philippe/i) // Récupération de l'élément qui affiche le texte de recherche
        expect(displayedText).toBeInTheDocument() // Assertion pour vérifier que le texte affiché est présent dans le document
    });
})