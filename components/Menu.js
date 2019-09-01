/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


const Menu = () => {
  return (
    <View style={styles.menuBox}>
      <Text style={styles.textBox}> Cat App </Text>
    </View>
  );
};

/*
const Menu = () => {
  return (
    <Text style={styles.menuBox}>Cat App
    </Text>
  );
};
*/


const styles = StyleSheet.create({
  menuBox: {
    flexDirection: 'row',
    backgroundColor: '#efb0d0',
    flex: 1,
    padding: 30,
    borderRadius: 16,
    margin: 5,
    marginTop: 20,
  },
  textBox: {
    textAlign: 'center',
    flex: 1,
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Menu;
