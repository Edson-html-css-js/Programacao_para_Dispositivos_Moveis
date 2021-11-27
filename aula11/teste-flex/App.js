import React from 'react';
import {Button,StyleSheet, View} from 'react-native';

// const estilos = StyleSheet.create({
//   caixa: { 
//     flex: 1,
//     // width: 50,
//     // height: 50
//   },

//   vermelho: { 
//     backgroundColor: "red"
//   },

//   amarelo: { 
//     backgroundColor: "yellow"
//   },

//   verde: { 
//     backgroundColor: "green"
//   }
// });

export default function TesteFlex() { 
  return (
    <View style={{
      flex: 1,
      flexDirection:"row",
      justifyContent: "space-around",
      alignItems: "stretch",
      backgroundColor: "blue",
      padding: 40,
    }}>
      {/* <View style={StyleSheet.compose(estilos.caixa, estilos.vermelho)}></View>
      <View style={StyleSheet.compose(estilos.caixa, estilos.amarelo)}></View>
      <View style={StyleSheet.compose(estilos.caixa, estilos.verde)}></View> */}
      <View style={{
          flex: 2,
          backgroundColor: "blue",
          
      }}>

        
      </View>
      
       <View>
         <Button title="botão  C"/>
      
         <Button title=""/>
         <View></View>
         <Button title="botão  B "/>
         <Button title=""/>
         <Button title="botão  A"/>

         </View>
         <View>
         <Button title=""/>
         </View>
         <View>
         <Button title=""/>
         </View>
         <View>
         <Button title=""/>
         </View>
         <View>
         <Button title=""/>
         </View>
      
      
    </View>
  )
}