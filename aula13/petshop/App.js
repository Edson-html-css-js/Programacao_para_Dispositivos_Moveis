import React, {useState} from 'react';
import {Button, ScrollView, Text, TextInput, ToastAndroid, View} from 'react-native';

// let raca = "Viralata";

const Pet = (props) => {
  return (
    <View style={{marginTop: 10, backgroundColor: "cyan"}}>
      <Text>{props.nome}</Text>
      <Text>{props.raca}</Text>
    </View>
  )
}

export default () => {
  let [nome, setNome] = useState(" Lidocaína");
  let [raca, setRaca] = useState("EMS");
  const [lista, setLista] = useState([]);

  const listaViews = [

  ];

  for (let i = 0; i < lista.length; i++) {
    const pet = lista[i];
    listaViews.push(
      <Pet nome={pet.nome} raca={pet.raca}/>
    );
  }


  return(
    <View style={{
      flex: 1,
      flexDirection: "column"
    }}>
      <View style={{
        flex: 1,
        marginTop: 30,
        padding: 10,
      }}>
        <Text>Formulário de Medicamentos</Text>
        <Text>Nome Cientifico: </Text>
        <TextInput value={nome} onChangeText={(txt)=> { 
          setNome(txt);
        }}/>
        <Text>marca: </Text>
        <TextInput value={raca} onChangeText={(txt)=>{
          setRaca(txt);
        }}/>

        <Text>Peso: </Text>
        <TextInput value="200G" onChangeText={(txt)=> { 
          setNome(txt);
        }}/> 

        <Button title="Salvar" onPress = { (e) => { 
          lista.push( {nome, raca} );
          const listaTemp = [...lista];
          setLista(listaTemp);
          setNome("");
          setRaca("");
          // lista.push( {nome: nome, raca: raca} );
          ToastAndroid.show(`Pet ${nome} foi gravado com sucesso`, 
            ToastAndroid.LONG);
          console.log(lista);
        }}/>
      </View>

      <View style={{
        flex: 2,
        marginTop: 10,
        padding: 10,
      }}>
        <Text>DADOS DO FORMULARIO</Text>
        <ScrollView>
          {listaViews}
        </ScrollView>
      </View>
    </View>
  );
}


