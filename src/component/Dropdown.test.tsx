import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Accessibilité", () => {
  it("devrait avoir les attributs ARIA initiaux corrects", () => {
    render(<Dropdown />);
    const button = screen.getByRole("button", { name: /options/i });// On sélectionne le bouton du dropdown en utilisant son rôle et son nom accessible. Cela nous permet de vérifier que le bouton est correctement identifié pour les technologies d'assistance et qu'il a les attributs ARIA appropriés pour indiquer son état et sa fonction.
    
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-haspopup", "true");
  });

  it("devrait changer aria-expanded lors du clic", () => {
    render(<Dropdown />);
    const button = screen.getByRole("button", { name: /options/i });

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Vérifie que le menu apparaît avec son rôle sémantique
    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
  });
});