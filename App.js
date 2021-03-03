/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  PixelRatio,
} from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-weight: bold;
`;

const FontStyled = styled.Text`
  font-size: ${(props) => props.size}px;
`;

const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: lightgray;
  margin: 30px 0 10px;
`;

const Font = ({size, children}) => {
  console.log(size);
  const {width} = Dimensions.get('window');

  //Guideline sizes are based on standard ~5" screen mobile device
  const guidelineBaseWidth = 375;

  const scale = (scaleSize) =>
    Math.floor((width / guidelineBaseWidth) * scaleSize);

  const scalemultiplier = () => width / guidelineBaseWidth;

  const fontSize = scale(size);

  return (
    <>
      <Text>Multiplicador {scalemultiplier()}</Text>
      <Text>Pixel Ratio {PixelRatio.getPixelSizeForLayoutSize(1)}</Text>

      <Text>Screen width: {width}</Text>
      <Text>Font-size original: {size}</Text>
      <Text>Font-size ajustado: {fontSize}</Text>
      <Divider />
      <Title>Resultado original</Title>
      <Text style={{fontSize: size}}>{children}</Text>
      <Divider />
      <Title>Resultado Correjido</Title>
      <FontStyled size={fontSize}>{children}</FontStyled>
    </>
  );
};

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Font size={13}>Pruebas 16px</Font>
          </View>
          <View
            style={{
              marginTop: 24,
              borderTopColor: 'red',
              borderStyle: 'solid',
              borderWidth: 2,
              paddingTop: 12,
            }}>
            <Font size={48}>Pruebas 48px texto medio largo</Font>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
