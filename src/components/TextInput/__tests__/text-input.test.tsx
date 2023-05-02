import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../../global/styles/theme';

import { TextInput } from '..';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('<TextInput />', () => {
  it('render label if provided by props', () => {
    const { getByText } = render(
      <TextInput
        value={''}
        label="test"
        onChangeText={() => {}}
        onEndEditing={() => {}}
        placeholder=""
      />,
      {
        wrapper: Providers,
      },
    );
    const labelElement = getByText('test');

    expect(labelElement).toBeDefined();
  });

  it('should show a placeholder', () => {
    const { getByPlaceholderText } = render(
      <TextInput
        value={''}
        label=""
        onChangeText={() => {}}
        onEndEditing={() => {}}
        placeholder="test"
      />,
      {
        wrapper: Providers,
      },
    );
    const element = getByPlaceholderText('test');

    expect(element).toBeDefined();
  });
});
