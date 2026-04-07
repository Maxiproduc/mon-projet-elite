// import { render, screen, fireEvent } from '@testing-library/react';
// import RegisterForm from './RegisterForm';

// describe('RegisterForm Component', () => {
//   test('doit appeler la fonction onRegister avec l\'email saisi lors de la soumission', () => {
//     // 1. On crée notre espion (le faux agent)
//     const mockOnRegister = jest.fn();

//     // 2. On affiche le formulaire en lui donnant notre espion
//     render(<RegisterForm onRegister={mockOnRegister} />);

//     const input = screen.getByPlaceholderText(/votre@email.com/i);
//     const button = screen.getByRole('button', { name: /s'inscrire/i });

//     // 3. On simule la saisie et le clic
//     fireEvent.change(input, { target: { value: 'sadefo@test.com' } });
//     fireEvent.click(button);

//     // 4. LA MAGIE DU MOCK : On interroge l'espion
//     // Est-ce que l'espion a bien été appelé une fois ?
//     expect(mockOnRegister).toHaveBeenCalledTimes(1);
    
//     // Est-ce qu'il a reçu le bon email ?
//     expect(mockOnRegister).toHaveBeenCalledWith('sadefo@test.com');
//   });
// });


// Ce qu'il faut retenir pour ton Asus
// Synchronisation : Dès que tu changes la structure d'un 
// composant (enlever ou ajouter une interface ou une prop), tu dois mettre à jour ses tests.

// window.alert : C'est une fonction globale. Pour la tester, on utilise jest.fn() 
//           pour la transformer en espion.

// Nettoyage : En supprimant la prop onRegister dans le test, 
// le soulignement rouge disparaîtra immédiatement car le test correspondra 
// enfin à la réalité de ton code.



import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from './RegisterForm';

describe('RegisterForm Component', () => {
  test('doit afficher une alerte avec l\'email lors de la soumission', () => {
    // 1. On remplace l'alerte du navigateur par un espion Jest
    window.alert = jest.fn();

    // 2. On affiche le formulaire (sans prop onRegister !)
    render(<RegisterForm />);

    const input = screen.getByPlaceholderText(/votre@email.com/i);
    const button = screen.getByRole('button', { name: /s'inscrire/i });

    // 3. On simule la saisie et le clic
    fireEvent.change(input, { target: { value: 'sadefo@test.com' } });
    fireEvent.click(button);

    // 4. On vérifie si l'alerte a été appelée avec le bon message
    expect(window.alert).toHaveBeenCalledWith('Inscription réussie pour : sadefo@test.com');
  });
});