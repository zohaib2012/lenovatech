import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Services from '../components/Services';

describe('Services', () => {
  it('renders without crashing', () => {
    const { container } = render(<Services />);
    expect(container).toBeInTheDocument();
  });

  it('renders all 3 tab buttons', () => {
    render(<Services />);
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument();
    expect(screen.getByText('Custom Software')).toBeInTheDocument();
  });

  it('shows Web Development services by default', () => {
    render(<Services />);
    expect(screen.getByText('Business Websites')).toBeInTheDocument();
    expect(screen.getByText('Web Applications (SPA)')).toBeInTheDocument();
  });

  it('switches content when Mobile tab is clicked', async () => {
    render(<Services />);
    fireEvent.click(screen.getByText('Mobile Apps'));
    await waitFor(() => {
      expect(screen.getByText('Cross-Platform Apps')).toBeInTheDocument();
    });
    expect(screen.getByText('Custom UI/UX Design')).toBeInTheDocument();
  });

  it('switches content when Custom Software tab is clicked', async () => {
    render(<Services />);
    fireEvent.click(screen.getByText('Custom Software'));
    await waitFor(() => {
      expect(screen.getByText('ERP & CRM Systems')).toBeInTheDocument();
    });
    expect(screen.getByText('POS & Inventory')).toBeInTheDocument();
  });
});
