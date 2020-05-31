import React from 'react';
import {
  Image,
  Text,
  ImageBackground,
  View,
  ScrollView,
  Button,
  InputAccessoryView,
  TextInput,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider
} from 'react-native-safe-area-context';

export default function Login() {
  
  const [name, setText] = React.useState('');
  const [password, setPass] = React.useState('');
  
  const go = () => {
    ToastAndroid.show(name + ' ' + password, 500)
  }
  const styles = StyleSheet.create({
    bgFluid: {
      height: 1024,
      flex: 1,
      flexDirection: 'column',
    },
    txt: {
      color: 'white'
    },
    logoContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 60,
    },
    logo: {
      flex: 0,
      width: 320,
      height: 90,
      marginTop: 30
    },
    form: {
      flex: 1,
      margin:50,
      marginTop: 200,
      justifyContent: 'center'
    },
    input: {
      padding: 2,
      marginTop: 10,
      marginBottom: 50,
      width: 300,
      fontSize: 20,
      color: '#fff',
      borderBottomWidth: 2,
      borderColor: '#fff6'
    }
  });
  return(
  <>
    <ImageBackground source={ require('../../assets/login-bg.jpg')} style={styles.bgFluid}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo-light.png')} style={styles.logo} />
        </View>
        <View style={styles.form}>
          <Text style={styles.txt}>UserName:</Text>
          <TextInput
            style={styles.input}
            onChangeText={name => setText(name)}
          />
          <Text style={styles.txt}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={password => setPass(password)}
          />
          
          <Button
            onPress={go}
              title="Login"
            />
        </View>
      </ScrollView>
    </ImageBackground>
    </>
  )
}