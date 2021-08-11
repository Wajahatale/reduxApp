/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useContext} from 'react';
import {Text, Alert} from 'react-native';

import {styles} from './../styles/styles';

import {TouchableOpacity, View} from 'react-native';

class PersonListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert('')}
        style={styles.singleSearchResult}
        activeOpacity={0.9}>
        <View
          style={[
            styles.searchResultWordBlock,
            styles['searchResultWordBlock--Disabled'],
          ]}>
          <Text>
            <Text style={styles.singleSearchResultArticle}>
              {this.props.name}{' '}
            </Text>
            <Text style={styles.singleSearchResultMainWord}>What</Text>
          </Text>
          <Text style={styles.enWord}>Eng</Text>
        </View>
        <View style={styles.searchResultTypeOfWordBlock}>
          <Text style={[styles.typeOfWord]}>Name</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PersonListItem;
