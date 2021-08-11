import React, {Component} from 'react';
import {
  TextInput,
  View,
  Dimensions,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const generateStyleSheet = theme =>
  StyleSheet.create({
    backgroundColor: {
      backgroundColor: 'white',
      borderRadius: 16,
    },
    textInput: {
      backgroundColor: theme === 'white',
      color: theme === 'white',
      fontFamily: 'Futura-Medium',
      fontSize: 16,
      borderWidth: 1,
      borderColor: theme === 'white',
      paddingTop: 24,
      paddingBottom: 24,
      paddingHorizontal: 24,
      borderRadius: 16,
      height: SCREEN_HEIGHT * 0.25,
    },
    charCountContainer: {
      alignItems: 'flex-end',
      marginTop: 4,
      marginRight: 8,
      marginBottom: 12,
    },
    charCountText: {
      color: theme === '#bcbcbc',
      fontSize: 13,
    },
  });
class input extends Component {
  componentWillUnmount = () => {
    const {onChangeText, value} = this.props;
    onChangeText(value.trim());
  };

  render() {
    const {maxLength, onChangeText, placeholder, theme, value} = this.props;
    const styles = generateStyleSheet(theme);
    return (
      <View>
        <View style={styles.backgroundColor}>
          <TextInput
            autoCapitalize="sentences"
            maxLength={maxLength}
            multiline
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            returnKeyType={null}
            style={styles.textInput}
            textAlignVertical="top"
            textContentType="none"
            underlineColorAndroid="transparent"
            value={value}
            onBlur={() => onChangeText(value.trim())}
          />
        </View>
        {maxLength !== null ? (
          <View style={styles.charCountContainer}>
            <Text style={styles.charCountText}>
              {`${value.length}/${maxLength}`}
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
}

export default input;
