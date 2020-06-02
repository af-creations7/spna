import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider
} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import axios from 'axios';

export default function Api(){

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      height: 1500,
      backgroundColor: '#f0f0ff',
      padding: 90
    },
    form: {
      padding: 20,
      flex:1,
      marginBottom: 50
    },
    input: {
      padding: 2,
      borderBottomWidth: 3,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: 'blue',
      marginTop: 20,
      marginBottom: 20
    },
    rs: {
      backgroundColor: '#fff',
      padding: 10,
      width: 300,
      height: 500,
      marginBottom: 40,
      alignSelf: 'center'
    }
  });
  const [url, setUrl] = React.useState('http://localhost:3000/');
  const [json, setJson] = React.useState('');
  const [response, setRes] = React.useState('<h1>No Response Yet</h1>');
  
  const GetRequest = () => {
   axios.get(url, json).then(
       res => setRes(res)
     ).catch(
       error => setRes(error)
       );
  }
  
  const PostRequest = () => {
   axios.post(url, json).then(
       res => setRes(res)
     ).catch(
       error => setRes(error)
       );
  }
  return(
  <>
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <ScrollView style={{flex:1}}>
        <View style={styles.form}>
         <Text style={{fontSize: 40, marginBottom: 40}}>Only For Fayaz, indula gelkaku</Text>
          <Text>Json:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={json => setJson(json)}
          />
          <Text>Url:</Text>
          <TextInput
            style={styles.input}
            onChangeText={url => setUrl(url)}
          />
          <View style={{marginBottom: 10}}>
          <Button
            onPress={GetRequest}
            title='GET METHOD'
          />
          </View>
          <Button
            onPress={PostRequest}
            title='POST METHOD'
          />
        </View>
        <ScrollView>
          <WebView style={{margin: 10, padding: 4}} source={{html: response+'<meta name="viewport" content="width=device-width, initial-scale=1">'}} style={styles.rs} />
        </ScrollView>
      </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  </>
  )
}