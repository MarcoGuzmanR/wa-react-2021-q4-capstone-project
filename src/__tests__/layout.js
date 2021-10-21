import * as React from 'react';
import { render, screen } from '@testing-library/react'

import App from '../app';

describe('main components in the app', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('displays correctly the logo name in the header', () => {
    expect(screen.getByText(/besthome/i)).toBeInTheDocument();
  });

  test('displays correctly product categories copy', () => {
    expect(screen.getByText(/product categories/i)).toBeInTheDocument();
  });

  test('displays correctly featured products copy', () => {
    expect(screen.getByText(/featured products/i)).toBeInTheDocument();
  });

  test('displays correctly the footer', () => {
    const footerCopy = screen.getByText(/ecommerce created during Wizeline’s Academy React Bootcamp/i);
    expect(footerCopy).toBeInTheDocument();
  });
});