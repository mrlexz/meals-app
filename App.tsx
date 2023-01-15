import 'react-native-gesture-handler';
import React from 'react';

import Navigation from './navigations';
import {FavoritesContextProvider} from './stores/Context/favorites-context';
import {Provider} from 'react-redux';
import {store} from './stores/Redux/stores';

const App = () => {
  return (
    <Provider store={store}>
      <FavoritesContextProvider>
        <Navigation />
      </FavoritesContextProvider>
    </Provider>
  );
};

export default App;
