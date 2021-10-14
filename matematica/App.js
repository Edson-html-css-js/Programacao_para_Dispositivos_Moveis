import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


var n1 = 4;
var n2 = 8
var n3 = 2
var conta = n1*n2/n3;
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("O resultado da conta 4*8 / 2 é =" +  conta);




export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>

</Text>
      <StatusBar style="auto" />
    </View>
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
