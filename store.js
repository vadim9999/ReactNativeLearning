import { createStore } from 'redux';
import rootReducer from './src/store/reducers';

import Reactotron from './ReactotronConfig';

const store = createStore(rootReducer, Reactotron.createEnhancer());

export default store;
