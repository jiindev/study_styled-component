import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size:32px;
  padding : 50px;
`

export default function App() {
  return (
    <Container>
      <Title>그들은 든 청춘의 우리의 불어 때문이다. 그들의 황금시대의 산야에 동력은 열락의 싶이 찾아 만천하의 충분히 것이다. 스며들어 같으며, 두기 심장은 청춘의 거선의 교향악이다. 뜨거운지라, 구하기 들어 것은 가슴에 꽃이 천고에 힘있다. 트고, 이것이야말로 충분히 이것이다. 가치를 착목한는 인류 </Title>
    </Container>
  );
}
