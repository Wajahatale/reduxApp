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
      newUserFirstName: '',
      newUserLastName: '',
      newUserAge: '',
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleAge = this.handleAge.bind(this);
  }
  handleFirstName(val) {
    this.setState({
      newUserFirstName: val,
    });
  }
  handleLastName(val) {
    this.setState({
      newUserLastName: val,
    });
  }
  handleAge(val) {
    this.setState({
      newUserAge: val,
    });
  }
  onButtonPress = () => {
    if (
      this.state.newUserFirstName === '' ||
      this.state.newUserLastName === '' ||
      this.state.newUserAge === ''
    ) {
      Alert.alert('Please enter a valid first name!');
    } else if (this.state.newUserLastName === '') {
      Alert.alert('Please enter a valid last name!');
    } else if (this.state.newUserAge === '') {
      Alert.alert('Please enter a valid age!');
    } else {
      const newUser = {
        firstName: this.state.newUserFirstName,
        lastName: this.state.newUserLastName,
        age: this.state.newUserAge,
      };

      this.addItemToTheList(newUser);
    }
  };

  addItemToTheList = item => {
    var items = this.state.objects;
    items.push(item);

    this.setState({
      objects: items,
      newUserFirstName: '',
      newUserLastName: '',
      newUserAge: '',
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
              return <PersonListItem user={objec} />;
            })}
          </View>
        </ScrollView>
        <View style={styles.containercenter}>
          <Text>Enter Information</Text>
          <View>
            <TextInput
              value={this.state.newUserFirstName}
              style={styles.textInput}
              placeholder="First Name"
              onChangeText={this.handleFirstName}
            />
            <TextInput
              value={this.state.newUserLastName}
              style={styles.textInput}
              placeholder="Last Name"
              onChangeText={this.handleLastName}
            />
            <TextInput
              value={this.state.newUserAge}
              style={styles.textInput}
              placeholder="Age"
              onChangeText={this.handleAge}
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
