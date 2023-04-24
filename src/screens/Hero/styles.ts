import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(15)}px;
`;

export const Header = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
`;
export const HeroImage = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  margin-bottom: ${RFValue(30)}px;
`;
export const HeroName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
`;
export const Body = styled.View`
  justify-content: center;
  align-items: center;
`;
export const HeroDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;
