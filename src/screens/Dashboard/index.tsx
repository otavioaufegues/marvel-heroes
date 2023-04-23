import React, { useState, useEffect } from 'react';
import { ListItem, ListItemProps } from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';
import { SearchBox } from '../../components/SearchBox';
import { useAsync } from '../../hooks/useAsync';
import { getHeroes } from '../../services/api';
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

  const isFocused = useIsFocused();
  const [heroes, setHeroes] = useState([]);

  const { execute, response, status, error } = useAsync(
    () => getHeroes(),
    false,
  );

  useEffect(() => {
    if (isFocused) {
      execute();
      console.log('oi');
    }
  }, [isFocused]);

  useEffect(() => {
    if (status === 'success') {
      const heroesArray = response.data.data.results.map((hero) => ({
        id: hero.id,
        name: hero.name,
        image: hero.thumbnail['path'] + '.' + hero.thumbnail['extension'],
      }));
      setHeroes(heroesArray);
    }
    console.log('e', error);
  }, [status]);

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
      {status === 'success' && (
        <Heroes>
          <ListHeader>
            <ListHeaderLabel>Personagem</ListHeaderLabel>
          </ListHeader>
          <HeroesList
            data={heroes}
            renderItem={({ item }) => <ListItem data={item} />}
          />
        </Heroes>
      )}
      <Footer />
    </Container>
  );
}
