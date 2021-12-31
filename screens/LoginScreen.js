import React from 'react';
import {View,TextInput, Button} from 'react-native';
import {auth} from '../Firebase';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function signup() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(usercredentials => {
        const user = usercredentials.user;
        alert('User created!', user.email);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  function login() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(usercredentials => {
        const user = usercredentials.user;
        alert('User logged in!', user.email);
        navigation.navigate('Home');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  return (
    <View style={{width: 300, alignSelf: 'center', marginVertical: '10%'}}>
      <TextInput
        placeholder="Username"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={login} />
      <View style={{marginTop: 10}}>
        <Button title="Register" onPress={signup} />
      </View>
    </View>
  );
}
