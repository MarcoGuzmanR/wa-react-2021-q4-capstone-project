import * as React from 'react';
import { server } from '../test/server';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

import BestHomeProvider from '../context/provider';
import Header from '../layout/header';
import Home from '../layout/home';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Product Search', () => {
  render(
    <Router>
      <BestHomeProvider>
        <Header />
        <Home />
      </BestHomeProvider>
    </Router>
  );

  test('the loading is removed', async () => {
    await waitForElementToBeRemoved(() => screen.queryByText(/loading product categories.../i));
    expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();
  });

//   test('displays correctly the product data', async () => {
//     await waitFor(() => {
//       expect(screen.getByText(/grayton armchair/i)).toBeInTheDocument();
//       expect(screen.getByText('$1689.74')).toBeInTheDocument();
//       expect(screen.getByText('1105659063')).toBeInTheDocument();
//       expect(screen.getByText(/living room/i)).toBeInTheDocument();
//       expect(screen.getByText(/armchair/i)).toBeInTheDocument();
//       expect(screen.getByText(/featured/i)).toBeInTheDocument();
//     });
//   });
});