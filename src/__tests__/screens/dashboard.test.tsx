import React from 'react';
import { render } from '@testing-library/react-native';

import Dashboard from '../../screens/Dashboard';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

jest.mock('axios', () => {
  return {
    get: () => {
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

describe('Dashboard', () => {
  it('should renders header correctly', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<Dashboard navigation={navigation} />, {
      wrapper: Providers,
    });

    const title = getByText('BUSCA MARVEL');
    const subtitle = getByText('TESTE FRONT-END');
    const candidate = getByText('Otávio Rodrigues');

    expect(title).toBeDefined();
    expect(subtitle).toBeDefined();
    expect(candidate).toBeDefined();
  });

  it('should renders search input correctly', () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<Dashboard navigation={navigation} />, {
      wrapper: Providers,
    });

    const textInput = getByTestId('search-text-input');
    expect(textInput).toBeDefined();
  });
});

// it('should navigate to hero details when hero is pressed', () => {
//   const navigation = { navigate: jest.fn() };
//   const { getByTestId } = render(<Dashboard navigation={navigation} />);
//   const mockedHero = { id: 1, name: 'Iron Man' };
//   const listItem = getByTestId('list-item');

//   fireEvent.press(listItem);

//   expect(navigation.navigate).toHaveBeenCalledWith('Hero', {
//     heroId: mockedHero.id,
//   });
// });
