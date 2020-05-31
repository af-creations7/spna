import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './src/screens/Login';
import Api from './src/screens/Api';
export default function App() {
  return (
    <>
    <Api /> 
    </>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });