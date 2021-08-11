/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
  ActionSheetIOS,
} from 'react-native';
import {changeData} from './src/actions/data';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PersonListItem from './src/components/PersonListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [],
      newObject: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(val) {
    this.setState({
      newObject: val,
    });
  }
  onButtonPress = () => {
    this.addItemToTheList(this.state.newObject);

    // let {value, actions} = this.props;
    // actions.changeData(value);
  };

  addItemToTheList = item => {
    var items = this.state.objects;
    items.push(item);

    this.setState({
      objects: items,
      newObject: '',
    });
    // Alert.alert(JSON.stringify(this.state.objects));
  };

  removeItemFromList(item) {}

  removeItemFromIndex(index) {}

  render() {
    const {value} = this.state;
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.containertop}>
            <Text>Ola</Text>
            <Text> Data: {value}</Text>
            {this.state.objects.map(objec => {
              return <PersonListItem name={objec} />;
            })}
          </View>
        </ScrollView>
        <View style={styles.containercenter}>
          <Text>Enter Text</Text>
          <View>
            <TextInput
              value={this.state.newObject}
              style={styles.textInput}
              placeholder="e.g. Hello World"
              onChangeText={this.handleChange}
            />
            <Button title="Add" onPress={this.onButtonPress} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containercenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containertop: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 500,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

const mapStateToProps = state => ({
  value: state.value,
});

const ActionCreators = Object.assign({}, changeData);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
