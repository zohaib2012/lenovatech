import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders without crashing', () => {
    const { container } = render(<Hero />);
    expect(container).toBeInTheDocument();
  });

  it('displays the main heading', () => {
    render(<Hero />);
    expect(screen.getByText(/We Build/i)).toBeInTheDocument();
    expect(screen.getByText(/Digital Products/i)).toBeInTheDocument();
  });

  it('shows stat numbers', () => {
    render(<Hero />);
    expect(screen.getByText('9+')).toBeInTheDocument();
    expect(screen.getByText('150+')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('98%')).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText(/Start Your Project/i)).toBeInTheDocument();
    expect(screen.getByText(/View Our Work/i)).toBeInTheDocument();
  });
});
