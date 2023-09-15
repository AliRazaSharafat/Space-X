import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Home = () => {
  useEffect(() => {
    fetch('http://localhost:5000/api/companyinfo')
      .then(res => console.log('res', res))
      .catch(err => console.log('error', err));
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export const HomeScreenOptions = () => ({
  headerTitle: 'Home',
});
