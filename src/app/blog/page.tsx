
import Link from 'next/link'; // On importe le composant Link de Next.js pour créer des liens de navigation entre les pages de notre application. Link est un composant optimisé pour le routage client, ce qui permet une navigation rapide et fluide sans recharger la page entière.

export default function BlogListPage() { // On exporte une fonction de composant React qui représente la page de liste du blog. Cette fonction retourne un JSX qui affiche un titre et une liste d'articles de blog. Chaque article est affiché avec un lien qui utilise le composant Link pour diriger l'utilisateur vers la page de détail de l'article correspondant, en utilisant le slug de l'article dans l'URL. Ce composant est ce qui sera rendu lorsque l'utilisateur naviguera vers la route /blog, affichant ainsi la liste des articles disponibles.
  const posts = [ // On définit un tableau d'articles de blog avec des données d'exemple. Chaque article est représenté par un objet contenant un id, un titre et un slug. Le slug est une version formatée du titre qui sera utilisée dans l'URL pour accéder à la page de détail de l'article. Ces données sont utilisées pour générer dynamiquement la liste des articles sur la page de blog, permettant ainsi une navigation facile vers les pages de détail de chaque article.
    { id: 1, title: 'Maîtriser Jest', slug: 'maitriser-jest' },
    { id: 2, title: 'Next.js 14 pour les Pros', slug: 'nextjs-pros' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mon Blog Élite</h1>
      <ul className="space-y-4">
        {posts.map((post) => ( // On utilise la méthode map pour itérer sur le tableau d'articles et générer un élément de liste pour chaque article. Chaque élément de liste contient un lien qui utilise le composant Link pour diriger l'utilisateur vers la page de détail de l'article correspondant, en utilisant le slug de l'article dans l'URL. Cela permet une navigation facile et dynamique vers les pages de détail des articles à partir de la liste du blog.
          <li key={post.id}> {/* On utilise la propriété key pour aider React à identifier chaque élément de la liste de manière unique, ce qui améliore les performances lors du rendu et de la mise à jour de la liste. Ici, nous utilisons l'id de chaque article comme clé, ce qui garantit que chaque élément de la liste est correctement identifié par React. */}
            <Link href={`/blog/${post.slug}`} className="text-blue-600 text-xl hover:underline"> {/* On utilise le composant Link pour créer un lien vers la page de détail de l'article. L'attribut href est construit dynamiquement en utilisant le slug de l'article, ce qui permet une navigation vers des URL comme /blog/maitriser-jest. Le lien est stylisé avec des classes Tailwind CSS pour le rendre visuellement attrayant et interactif, avec une couleur bleue et un effet de soulignement au survol. */}
              {post.title} {/* On affiche le titre de l'article à l'intérieur du lien, ce qui permet à l'utilisateur de cliquer sur le titre pour accéder à la page de détail de l'article. */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}