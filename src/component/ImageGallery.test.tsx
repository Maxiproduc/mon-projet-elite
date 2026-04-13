import { render, screen, waitFor } from "@testing-library/react";
import ImageGallery from "./ImageGallery";

// On simule le fetch global
global.fetch = jest.fn();

describe("ImageGallery Performance", () => {
  it("devrait afficher les squelettes pendant le chargement", () => {
    // On simule une promesse qui ne finit jamais pour rester en état de chargement
    (global.fetch as jest.Mock).mockReturnValue(new Promise(() => {}));
    
    render(<ImageGallery />);
    
    const skeletons = screen.getAllByTestId("skeleton");// On vérifie que les squelettes de chargement sont affichés
    expect(skeletons.length).toBe(3);
  });

  it("devrait afficher les images après l'appel API", async () => {
    // On simule une réponse réussie
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => [{ id: 1, url: "test.jpg", title: "Ma Photo" }],
    });

    render(<ImageGallery />);

    // On attend que le chargement disparaisse et que l'image apparaisse
    await waitFor(() => {
      expect(screen.queryByTestId("skeleton")).not.toBeInTheDocument();
      expect(screen.getByAltText("Ma Photo")).toBeInTheDocument();
    });
  });
});