import React, { useState, useEffect } from 'react';
import { ListItem, ListItemProps } from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';
import { TextInput } from '../../components/TextInput';
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
  FooterLine,
  ActivityIndicator,
  TitleLine,
} from './styles';

export function Dashboard() {
  const isFocused = useIsFocused();
  const [heroes, setHeroes] = useState([]);

  const [page, setPage] = useState(10);
  const [perPage, setPerPage] = useState(10);

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

  const renderHeroes = () => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const heroesToRender = heroes.slice(startIndex, endIndex);

    return (
      <>
        <ListHeader>
          <ListHeaderLabel>Personagem</ListHeaderLabel>
        </ListHeader>
        <HeroesList
          data={heroesToRender}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </>
    );
  };

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
        <TitleLine />
      </Header>
      <TextInput label="Nome do Personagem" />
      <Heroes>
        {status === 'success' && renderHeroes()}
        {status === 'pending' && <ActivityIndicator />}
      </Heroes>
      <Footer></Footer>
      <FooterLine />
    </Container>
  );
}
