import React from 'react';
import { Text } from 'react-native';
import { SearchBox } from '../../components/SearchBox';
import {
  Candidate,
  CandidateContainer,
  Container,
  Header,
  TitleContainer,
  Title,
  Subtitle,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <CandidateContainer>
          <Candidate>Otávio Rodrigues</Candidate>
        </CandidateContainer>
        <TitleContainer>
          <Title>BUSCA MARVEL</Title>
          <Subtitle>TESTE FRONT-END</Subtitle>
        </TitleContainer>
      </Header>
      <SearchBox title="Nome do Personagem" />
    </Container>
  );
}
