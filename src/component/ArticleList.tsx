// 1. On définit la "forme" d'un article
interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function ArticleList() { // 2. Composant fonctionnel asynchrone pour afficher la liste des articles
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3'); // 1. On récupère les données de l'API, limitant à 3 articles pour l'exemple
  
  // 2. On précise que 'data' est un tableau d'articles (Post[])
  const data: Post[] = await res.json(); // 3. On parse la réponse JSON et on indique que c'est un tableau d'articles

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
      <h2 className="text-xl font-bold mb-4 italic text-black">Dernières Actualités (API)</h2>
      <ul className="space-y-3">
        {data.map((post) => ( // 3. Ici, 'post' est maintenant reconnu automatiquement
          <li key={post.id} className="p-3 bg-white shadow-sm rounded border-l-4 border-blue-500 text-black">
            <h4 className="font-semibold capitalize text-sm">{post.title}</h4>
            <p className="text-xs text-gray-500 mt-1">ID: {post.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}