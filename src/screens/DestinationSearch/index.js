import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = (props) => {

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
         console.warn('useEffect is called');
       if (originPlace && destinationPlace) {
         console.warn('Redirect to results');
       }
  }, [originPlace,destinationPlace]);

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <GooglePlacesAutocomplete
             placeholder='Where from?'
             onPress={(data, details = null) => {
              setOriginPlace({data,details});
              console.log(data, details);
           }}
           styles={{
             textInput: styles.textInput,
           }}
             fetchDetails 
             query={{
             key: 'AIzaSyB44EB4oBN31K-hZTWMkAp6QjyXtX8au6c',
             language: 'en',
      }}
    />

          <GooglePlacesAutocomplete
             placeholder='Where to?'
             onPress={(data, details = null) => {
              setDestinationPlace({data,details});
              console.log(data, details);
           }}
           styles={{
             textInput: styles.textInput,
           }}
             fetchDetails 
             query={{
             key: 'AIzaSyB44EB4oBN31K-hZTWMkAp6QjyXtX8au6c',
             language: 'en',
      }}
    />
        </View>
      </SafeAreaView>
    );
};

export default DestinationSearch;