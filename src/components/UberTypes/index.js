import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import types from '../../assets/data/types'

const UberTypes = (props) => {

  const confirm = () => {
    console.warn('confirm');
  }

    return (
      <View>
        {types.map(type => <UberTypeRow type={type}/>)}

        <Pressable onPress={confirm} style={styles.press}>
          <Text style={styles.text}>
            Confirm Uber
          </Text>
        </Pressable>
        
      </View>
    );
};

export default UberTypes;