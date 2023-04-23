import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.colors.secundary};
  border-bottom-width: 2px;
`;

export const Image = styled.Image`
  width: ${RFValue(58)}px;
  height: ${RFValue(58)}px;
  border-radius: 100px;
  margin-right: 15px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(21)}px;
`;
