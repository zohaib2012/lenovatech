import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../context/ThemeContext';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        {ui}
      </ThemeProvider>
    </BrowserRouter>
  );
}

describe('Navbar', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProviders(<Navbar />);
    expect(container).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    renderWithProviders(<Navbar />);
    const links = ['Home', 'Services', 'About', 'Portfolio', 'Packages', 'Process', 'Blog', 'Contact'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders the Get a Quote button', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('Get a Quote')).toBeInTheDocument();
  });

  it('renders the logo', () => {
    renderWithProviders(<Navbar />);
    const svg = document.querySelector('.logo-svg');
    expect(svg).toBeInTheDocument();
  });
});
