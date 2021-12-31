import React from 'react';
import {View, Text, Button} from 'react-native';
import {auth} from '../Firebase';

export default function HomeScreen({navigation}) {
  return (
    <View style={{width: 300, alignSelf: 'center', marginVertical: '10%'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>
        Hello jani:{auth.currentUser?.email}
      </Text>
      <View style={{marginTop: 10}}>
        <Button
          title="Logout"
          onPress={() =>
            auth.signOut().then(() => navigation.navigate('Login'))
          }
        />
      </View>
    </View>
  );
}
