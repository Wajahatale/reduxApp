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
              {this.props.user.firstName}{' '}
            </Text>
            <Text style={styles.singleSearchResultMainWord}>
              {this.props.user.lastName}{' '}
            </Text>
          </Text>
          <Text style={styles.enWord}>{this.props.user.age}</Text>
          <TouchableOpacity>
            <Text style={styles.enWord}>Del</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchResultTypeOfWordBlock}>
          <Text style={[styles.typeOfWord]}>Name</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PersonListItem;
