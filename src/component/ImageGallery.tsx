"use client";
import { useState, useEffect } from "react";

interface Image {
  id: string | number;
  url: string;
  title: string;
}

export default function ImageGallery() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // On simule un appel API
    fetch("https://api.exemple.com/photos")  //un vrai lien : https://jsonplaceholder.typicode.com/photos?_limit=6
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4" aria-label="Chargement en cours"> {/* On affiche des squelettes de chargement pendant que les images sont en cours de récupération*/}
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full h-32 bg-gray-200 animate-pulse rounded-lg" data-testid="skeleton" />// On affiche des squelettes de chargement pendant que les images sont en cours de récupération
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img: Image) => (
        <img key={img.id} src={img.url} alt={img.title} className="rounded-lg" />
      ))}
    </div>
  );
}