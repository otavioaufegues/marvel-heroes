import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${StatusBar.currentHeight}px;
  height: ${RFPercentage(9)};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  padding: 0 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary};
  padding-right: 5px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Candidate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.primary};
`;
export const CandidateContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  padding: 5px 15px;
`;

export const Heroes = styled.View`
  flex: 1;
  padding: 0 15px;
  margin-top: 10px;
`;

export const ListHeader = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

export const ListHeaderLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeroesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(12)}px;
`;
