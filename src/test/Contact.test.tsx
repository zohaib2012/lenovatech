import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact', () => {
  it('renders without crashing', () => {
    const { container } = render(<Contact />);
    expect(container).toBeInTheDocument();
  });

  it('renders contact info details', () => {
    render(<Contact />);
    expect(screen.getAllByText('0330-6553479').length).toBe(2);
    expect(screen.getByText('lenovatech69@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Lahore, Pakistan')).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<Contact />);
    expect(screen.getByText('Full Name *')).toBeInTheDocument();
    expect(screen.getByText('Email *')).toBeInTheDocument();
    expect(screen.getAllByText('Phone').length).toBe(2);
    expect(screen.getByText('Project Type')).toBeInTheDocument();
    expect(screen.getByText('Budget Range')).toBeInTheDocument();
    expect(screen.getByText('Project Details *')).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<Contact />);
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });
});
