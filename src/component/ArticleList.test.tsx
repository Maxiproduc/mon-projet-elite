// import { render, screen } from '@testing-library/react';
// import ArticleList from './ArticleList';

// describe('ArticleList Component', () => {
//   test('doit afficher les articles après le chargement', async () => { // On utilise "await" devant render pour les Server Components
//     // 1. On utilise "await" devant render pour les Server Components
    
//     render(await ArticleList());

//     // 2. On vérifie que le titre principal est là
//     expect(screen.getByText(/dernières actualités/i)).toBeInTheDocument();

//     // 3. On vérifie qu'au moins un article est affiché
//     // Comme c'est asynchrone, on utilise findAllByRole ou on vérifie la présence d'un titre
//     const items = await screen.findAllByRole('listitem');// On vérifie que la liste d'articles n'est pas vide
   
//     expect(items.length).toBeGreaterThan(0);// On peut aussi vérifier la présence d'un titre d'article spécifique
//   });
// });

import { render, screen } from '@testing-library/react';// Importation des fonctions de test et de rendu de React Testing Library
import ArticleList from './ArticleList';

// 1. On simule le comportement de fetch avant de lancer les tests
global.fetch = jest.fn(() => //  On retourne une réponse simulée avec des articles de test
  Promise.resolve({// On simule une réponse réussie de l'API
    json: () => Promise.resolve([
      { id: 1, title: 'Article de Test 1', body: 'Contenu 1' },
      { id: 2, title: 'Article de Test 2', body: 'Contenu 2' }
    ]),
  })
) as jest.Mock;// On précise que c'est un mock de Jest pour éviter les erreurs 

describe('ArticleList Component', () => {
  test('doit afficher les articles simulés après le chargement', async () => {
    // 2. On attend le rendu du composant asynchrone
    render(await ArticleList());

    // 3. On vérifie que nos articles simulés sont là
    expect(screen.getByText(/article de test 1/i)).toBeInTheDocument();
    expect(screen.getByText(/article de test 2/i)).toBeInTheDocument();
    
    // 4. On vérifie le titre de la section
    expect(screen.getByText(/dernières actualités/i)).toBeInTheDocument();
  });
});