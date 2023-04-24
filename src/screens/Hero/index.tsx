import React, { useEffect, useState } from 'react';
import { useAsync } from '../../hooks/useAsync';
import { getHero } from '../../services/api';
import { ActivityIndicator, FooterLine } from '../Dashboard/styles';
import {
  Container,
  Header,
  HeroImage,
  HeroName,
  Body,
  HeroDescription,
} from './styles';

export default function Hero({ route }) {
  const { heroId } = route.params;
  const { execute, response, status, error } = useAsync(() => getHero(heroId));

  const [hero, setHero] = useState({});

  useEffect(() => {
    if (status === 'success') {
      const heroesArray = response.data.data.results.map((hero) => ({
        id: hero.id,
        name: hero.name,
        image: hero.thumbnail['path'] + '.' + hero.thumbnail['extension'],
        description: hero.description,
      }));
      setHero(heroesArray[0]);
    }
  }, [status]);
  return (
    <>
      <Container>
        {status === 'success' && (
          <>
            <Header>
              <HeroImage source={{ uri: hero.image }} />
              <HeroName>{hero.name}</HeroName>
            </Header>
            <Body>
              <HeroDescription>{hero.description}</HeroDescription>
            </Body>
          </>
        )}
        {status === 'pending' && <ActivityIndicator />}
      </Container>
      <FooterLine />
    </>
  );
}
