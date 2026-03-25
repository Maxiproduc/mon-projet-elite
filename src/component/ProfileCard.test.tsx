import { render, screen } from '@testing-library/react'  
import ProfileCard from './ProfileCard'

describe('ProfileCard', () => {
  test('doit afficher le nom, le rôle et la ville', () => {
    render(<ProfileCard name="Sadef" role="Développeur"  ville="Yaoundé"/>)
    
    expect(screen.getByText(/Sadef/i)).toBeInTheDocument()
    expect(screen.getByText(/Développeur/i)).toBeInTheDocument()
    expect(screen.getByText(/Yaoundé/i)).toBeInTheDocument()
  })
})