import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../Store';
import TabBlock from '../containers/TabBlock';
import '../styles/App.scss';

const App = () => (
  <Provider store={ store }>
    <TabBlock />
  </Provider>
);

export default App;