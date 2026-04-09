import { renderHook, act } from '@testing-library/react'; // On importe les fonctions renderHook et act de la bibliothèque @testing-library/react. renderHook est utilisé pour tester les hooks personnalisés en les rendant dans un environnement de test, tandis que act est utilisé pour simuler des actions qui déclenchent des mises à jour d'état, comme les appels aux fonctions login et logout dans le hook useAuth. Ces outils nous permettent de tester le comportement du hook useAuth de manière isolée et de vérifier que l'état et les effets secondaires sont gérés correctement.
import { useAuth } from '../hooks/useAuth'; // On importe le hook personnalisé useAuth que nous allons tester. Ce hook encapsule la logique d'authentification de l'utilisateur, y compris la gestion de l'état de l'utilisateur connecté, les fonctions de connexion et de déconnexion, et la persistance de l'état dans le localStorage. En important ce hook, nous pouvons l'utiliser dans nos tests pour vérifier que son comportement est correct en termes de gestion de l'état d'authentification et d'interaction avec le localStorage.

describe('useAuth Hook', () => {
  beforeEach(() => {
    localStorage.clear(); // On nettoie avant chaque test
  });

  it('devrait initialiser l’utilisateur depuis le localStorage si présent', () => {
    localStorage.setItem('auth_user', 'Sadefo');
    const { result } = renderHook(() => useAuth());
    
    // Note: useEffect s'exécute après le premier rendu
    expect(result.current.user).toBe('Sadefo');
  });

  it('devrait sauvegarder l’utilisateur dans le localStorage au login', () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login('Sadefo');
    });

    expect(localStorage.getItem('auth_user')).toBe('Sadefo');
    expect(result.current.isLoggedIn).toBe(true);
  });

  it('devrait supprimer l’utilisateur du localStorage au logout', () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login('Sadefo');
      result.current.logout();
    });

    expect(localStorage.getItem('auth_user')).toBeNull();
    expect(result.current.user).toBeNull();
  });
});