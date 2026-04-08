// On exporte une fonction de composant React asynchrone qui représente la page de détail
//  d'un article de blog. Cette fonction prend un objet de paramètres en argument, où params 
// est une promesse qui résout un objet contenant le slug de l'article. En utilisant async, nous 
// pouvons attendre que les données des paramètres soient disponibles avant de rendre le composant, 
// ce qui est nécessaire pour afficher le contenu spécifique à l'article en fonction du slug fourni 
// dans l'URL.

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) { 

  const { slug } = await params; // On attend la promesse ici

  return ( // On retourne le JSX qui définit la structure et le contenu de la page de détail de l'article de blog. Le titre de l'article est formaté en remplaçant les tirets du slug par des espaces pour une meilleure lisibilité. Le contenu de la page inclut également un message de bienvenue qui affiche le slug original, ainsi qu'un lien pour revenir à la liste des articles du blog. Ce JSX est ce qui sera rendu dans le navigateur lorsque l'utilisateur naviguera vers une URL correspondant à un article spécifique (par exemple, /blog/maitriser-jest).
    <div className="p-8">
      <h1 className="text-3xl font-bold capitalize">
        Article : {slug.replace(/-/g, ' ')} {/* Affiche le titre de l'article en remplaçant les tirets par des espaces pour une meilleure lisibilité */}
      </h1>
      <p className="mt-4">Bienvenue sur l&apos;article : <strong>{slug}</strong></p> {/* Affiche un message de bienvenue qui inclut le slug original de l'article */}
      <a href="/blog" className="block mt-6 text-blue-500">← Retour</a>
    </div>
  );
}