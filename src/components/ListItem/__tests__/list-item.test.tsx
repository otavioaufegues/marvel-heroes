import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../../global/styles/theme';

import { ListItem, ListItemProps } from '..';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const mockData: ListItemProps = {
  id: '1',
  image: 'https://marvel.com/hulk.jpg',
  name: 'Hulk',
};

describe('<ListItem />', () => {
  it('should render the image and name correctly', () => {
    const { getByTestId } = render(<ListItem data={mockData} />, {
      wrapper: Providers,
    });
    
    const image = getByTestId('list-item-image');
    const name = getByTestId('list-item-name');

    expect(image.props.source.uri).toBe(mockData.image);
    expect(name.props.children).toBe(mockData.name);
  });
});
