import React, { Component } from 'react';

import {
  AppRegistry
} from 'react-native';

import NewsPage from './src/pages/NewsPage';
import ButtonsPage from './src/pages/ButtonsPage';
import ProgressPage from './src/pages/ProgressPage';
import ExpandPage from './src/pages/ExpandPage';
import AttentionSeekerPage from './src/pages/AttentionSeekerPage';

class RNPracticalAnimation extends Component {
  render() {
    return (
       <NewsPage />
    );
  }
}

AppRegistry.registerComponent('RNPracticalAnimation', () => RNPracticalAnimation);
