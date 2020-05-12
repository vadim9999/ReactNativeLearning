/**
 * @format
 */
console.log("start", __DEV__);

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { FlatListBasic } from './src/FlatListBasic';
import { SectionListBasic } from './src/SectionsList';
import { HeightAndWidth } from './src/HeightAndWidth';
import { ImageBlock } from './src/ImageBlock';
import { Buttons } from './src/Buttons';

AppRegistry.registerComponent(appName, () => App);
