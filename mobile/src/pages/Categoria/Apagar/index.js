import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  ButtonReturn,
  Title,
  Strong,
  Icon,
  RemoveButton,
  CancelButton,
} from './styles';
import { CategoryService } from '~/services/category';

const Apagar = ({ route, navigation }) => {
  const { categoria } = route.params;

  return (
    <Container>
      <ButtonReturn onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={30} color="#333" />
      </ButtonReturn>
      <Icon name="info" size={30} color="black" />
      <Title>
        Tem certeza que deseja apagar a categoria{' '}
        <Strong> "{categoria.titulo}"</Strong>? Esta ação não poderá ser
        desfeita.
      </Title>
      <RemoveButton
        onPress={() => {
          CategoryService.deleteById(categoria.id);
          navigation.goBack();
        }}
      >
        Apagar "{categoria.titulo}"
      </RemoveButton>
      <CancelButton
        onPress={() => {
          navigation.pop();
        }}
      >
        Não Apagar
      </CancelButton>
    </Container>
  );
};

export default Apagar;
