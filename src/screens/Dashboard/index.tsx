import React from 'react';
import { ListItem, ListItemProps } from '../../components/ListItem';
import { SearchBox } from '../../components/SearchBox';
import {
  Candidate,
  CandidateContainer,
  Container,
  Header,
  TitleContainer,
  Title,
  Subtitle,
  Heroes,
  HeroesList,
  ListHeader,
  ListHeaderLabel,
  Footer,
} from './styles';

export function Dashboard() {
  const data = [
    {
      id: 1,
      image: 'https://avatars.githubusercontent.com/u/18270045?v=4',
      name: 'Otavio',
    },
    {
      id: 2,
      image: 'https://avatars.githubusercontent.com/u/18270045?v=4',
      name: 'pedro',
    },
    {
      id: 3,
      image: 'https://avatars.githubusercontent.com/u/18270045?v=4',
      name: 'joao',
    },
  ];
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
      <Heroes>
        <ListHeader>
          <ListHeaderLabel>Personagem</ListHeaderLabel>
        </ListHeader>
        <HeroesList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </Heroes>
      <Footer />
    </Container>
  );
}
