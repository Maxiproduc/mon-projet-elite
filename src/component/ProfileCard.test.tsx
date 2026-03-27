import { render, screen } from '@testing-library/react'  
import ProfileCard from './ProfileCard'

describe('ProfileCard', () => {
  test('doit afficher le nom, le rôle et la ville', () => {
    render(<ProfileCard name="Sadef" role="Développeur" ville="Yaoundé" skills={[]}/>)
    
    screen.debug();// Affiche le DOM pour aider au débogage
    expect(screen.getByText(/Sadef/i)).toBeInTheDocument()
    expect(screen.getByText(/Développeur/i)).toBeInTheDocument()
    expect(screen.getByText(/Yaoundé/i)).toBeInTheDocument()
  });
    test('Affiche un message si la liste de skills est vide', () => {
    // On simule un utilisateur avec un tableau vide []
    render(<ProfileCard name="Sadefo" role="Dev" ville="Yaoundé" skills={[]} />);
    
    // On vérifie que le message d'alerte est bien là
    const message = screen.getByText(/aucune compétence renseignée/i);
    expect(message).toBeInTheDocument();
    });
})