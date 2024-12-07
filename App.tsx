// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import Modal from './components/Modal';
import './gesture-handler';
import MyDrawer from './common/Drawer';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
          <MyDrawer />

          <Modal />
      </NavigationContainer>
    </Provider>
  );
}