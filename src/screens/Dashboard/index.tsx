import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { ListItem } from '../../components/ListItem';
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
  AntDesignIcon,
  CircleNumber,
  PaginationText,
  PagesContainer,
} from './styles';

export default function Dashboard({ navigation }) {
  const [heroes, setHeroes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [pagesArray, setPagesArray] = useState<number[]>([]);
  const [perPage, setPerPage] = useState(4);

  const { execute, response, status, error } = useAsync(() =>
    getHeroes(searchText),
  );

  useEffect(() => {
    if (status === 'success') {
      const heroesArray = response.data.data.results.map((hero) => ({
        id: hero.id,
        name: hero.name,
        image: hero.thumbnail['path'] + '.' + hero.thumbnail['extension'],
      }));

      const numPages = Math.ceil(heroesArray.length / perPage);
      const ArrayPages = Array.from(
        { length: Math.ceil(heroesArray.length / perPage) },
        (_, i) => i + 1,
      );

      setPages(numPages);
      setPagesArray(ArrayPages);
      setPage(1);
      setHeroes(heroesArray);
    }
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
          testID="heroes-list-test"
          data={heroesToRender}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Hero', { heroId: item.id })}
            >
              <ListItem data={item} />
            </TouchableOpacity>
          )}
        />
      </>
    );
  };

  const search = () => {
    execute();
  };

  const nextPage = () => {
    const pg = page + 1 >= pages ? pages : page + 1;
    setPage(pg);
  };
  const prevPage = () => {
    const pg = page - 1 <= 0 ? 1 : page - 1;
    setPage(pg);
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
      <TextInput
        testID="search-text-input"
        value={searchText}
        label="Nome do Personagem"
        onChangeText={setSearchText}
        onEndEditing={search}
        placeholder="Spider-Man"
      />
      <Heroes>
        {status === 'success' && renderHeroes()}
        {status === 'pending' && <ActivityIndicator />}
      </Heroes>
      {status === 'success' && (
        <Footer>
          <TouchableOpacity onPress={prevPage}>
            <AntDesignIcon name="caretleft" />
          </TouchableOpacity>

          <PagesContainer>
            {pagesArray.map((currentPage) => {
              if (
                currentPage === page ||
                currentPage === page - 1 ||
                currentPage === page + 1 ||
                (currentPage === page + 2 && page === 1) ||
                (currentPage === page - 2 && page === pages)
              ) {
                return (
                  <CircleNumber
                    key={currentPage}
                    onPress={() => setPage(currentPage)}
                    current={page === currentPage}
                  >
                    <PaginationText current={page === currentPage}>
                      {currentPage}
                    </PaginationText>
                  </CircleNumber>
                );
              }
            })}
          </PagesContainer>

          <TouchableOpacity onPress={nextPage}>
            <AntDesignIcon name="caretright" />
          </TouchableOpacity>
        </Footer>
      )}
      <FooterLine />
    </Container>
  );
}
