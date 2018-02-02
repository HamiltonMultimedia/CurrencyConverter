import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Themes from './screens/Themes';
import Navigator from './config/routes';
import store from './config/store';
import { Provider } from 'react-redux';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $border: '#979797',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $white: '#ffffff',
  $darkText: '#343434'
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator />
    </AlertProvider>
  </Provider>
);
