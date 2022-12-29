import React from 'react';
import {TextInput} from 'react-native';
import styles from '../config/Styles';

function MyInput(props) {
  const {label, onChangeText, value, keyboardType} = props;

  return (
    <TextInput
      style={[styles.input, styles.border1]}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={styles._black}
      placeholder={label}
    />
  );
}

export default MyInput;
