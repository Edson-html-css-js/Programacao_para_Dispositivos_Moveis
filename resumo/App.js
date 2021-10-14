import React from 'react';
import {Text, TextInput, View} from 'react-native';
 
let estilos = { 
  textos : { 
    fontSize: 20, 
    fontWeight: "bold", 
    fontStyle: "italic",
  },
  titulo: { 
    fontSize: 48,
    backgroundColor: "yellow",
  }
}


 
function Principal() {
  return (
    // <React.Fragment>
    // <>
    // [
    <View style={{backgroundColor: "green"}}>
      <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={estilos.titulo}>resumo da aula do dia 23/08 !!!</Text>
      </View>
      <View style={{backgroundColor: "green"}}>
        <Text selectable={true} 
              numberOfLines={5} 
              style={estilos.textos}>
          <Text>Aprendemos comados no CMD {"\n"} aprendemos a dar vida ao codigo  {"\n"} com style  </Text>
          <Text>melhorando nossos conhecimentos, e deichando os blocos de codigo com cores!</Text>
        </Text>
      </View>                              
      <TextInput  style={{backgroundColor: "green"}} 
                  keyboardType={"default"}
                  multiline={true}
                  numberOfLines={3}
                  placeholder=""
                  />
    </View>
    
    // ]
    // </>
    // </React.Fragment>
  );
}
 
export default Principal;