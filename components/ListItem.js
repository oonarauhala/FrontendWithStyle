/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}> {props.singleMedia.title} </Text>
        <Text style={styles.textStyle}> {props.singleMedia.description} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row-reverse',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'pink',
    borderRadius: 16,
    shadowColor: '#C02F31',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 1,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    color: 'white',
  },
  textStyle: {
    color: 'white',
    fontSize: 10,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
