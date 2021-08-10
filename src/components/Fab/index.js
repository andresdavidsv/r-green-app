/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//Styles
import styles from './styles';

const Fab = ({onPress, iconName, style}) => {
  return (
    <View style={{...style}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.blackButton}>
        <Icon name={iconName} color="white" size={35} style={{left: 1}} />
      </TouchableOpacity>
    </View>
  );
};

export default Fab;
