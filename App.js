/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContexts';
import Menu from './components/Menu';


const App = () => {
  return (
    <View>
      <Menu />
      <MediaProvider>
        <View style={styles.listContainer}>
          <List />
        </View>
      </MediaProvider>
    </View>
  );
};


const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default App;
