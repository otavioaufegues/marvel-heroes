import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  width: 70%;
  border: 1px solid ${({ theme }) => theme.colors.text_light};
  border-radius: 5px;
  height: ${RFValue(31)}px;
  padding: 0 8px;
`;

export const SearchLabel = styled.Text`
  width: 70%;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchButton = styled.TouchableOpacity``;
