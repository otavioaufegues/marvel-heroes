import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Hero from '../../screens/Hero';
import { getHero } from '../../services/api';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

jest.mock('../../services/api', () => {
  return {
    getHero: () => {
      return {
        data: {
          data: {
            results: [
              {
                id: 1,
                name: 'Spider-Man',
                thumbnail: {
                  path: 'https://example.com/spiderman',
                  extension: 'jpg',
                },
                description: 'The amazing Spider-Man!',
              },
            ],
          },
        },
      };
    },
  };
});

describe('Hero', () => {
  it('should render hero details', async () => {
    const { getByText, getByTestId } = render(
      <Hero route={{ params: { heroId: 1 } }} />,
      { wrapper: Providers },
    );

    await waitFor(() => {
      expect(getByText('Spider-Man')).toBeTruthy();
      expect(getByText('The amazing Spider-Man!')).toBeTruthy();
    });
  });
});
