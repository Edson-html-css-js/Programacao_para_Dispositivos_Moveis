import React from 'react';
import {Button, View, Image, Text, ImageBackground} from 'react-native';
import task from './assets/tasklist.png';
import check from './assets/Check.png';

const PetSummary = ({nome, raca, peso, nascimento}) => { 

  // const {nome, raca, peso, nascimento} = props

  return (
    <View 
        style = {{
          flex: 1,
          backgroundColor: "lightyellow",
          justifyContent: "center"
        }}>
        <Text style={{
          fontWeight: "bold"
        }}>

          {/* {props.nome} */}
          {nome}

        </Text>
        <Text
        style={{
          color: "gray"
        }}
        >
          {/* {props.raca} - {props.peso} kilos - {props.nascimento} */}
          {raca}{peso}{nascimento}
          </Text>
    </View>
  )
}


export default () => { 

  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      backgroundColor: "blue"
    }}>

        <View style={{
          flex: 1,
          backgroundColor: "red"
        }}>

         
          
          <ImageBackground 
            style={{
              flex: 1,
              width: 400,
              padding: 30,
              alignItems: "center"
            }}
            source={task}
            // source={{uri: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"}}



            
            > 

           


            <Text style={{
              color : "yellow",
              fontWeight: "bold",
              fontSize: 48,
              textShadowColor: "black",
              textShadowOffset: {width: 3, height: 3},
              textShadowRadius: 10,
            }}>Hoje</Text>

              <Text style={{
              color : "yellow",
              fontWeight: "bold",
              fontSize: 20,
              textShadowColor: "black",
              textShadowOffset: {width: 3, height: 3},
              textShadowRadius: 10,
            }}>qua, 20 de maio</Text>

          </ImageBackground>

        </View>



        
        <View style={{
          flex: 2,
          backgroundColor: "yellow"
          
        }}>
         

          
          <PetSummary nome="Assistir aulas na faculdade"  nascimento="qua, 20 de maio"/>
        
          <PetSummary nome="Estudar React Native"  nascimento="qua, 20 de maio"/>

          <PetSummary nome="Fazer atividade de casa"  nascimento="qua, 20 de maio"/>

          <PetSummary nome="Mandar email para o chefe" nascimento="qua, 20 de maio"/>

          <PetSummary nome="Preparar o almoço"  nascimento="qua, 20 de maio"/>

         

        </View>

      <View></View>
      

    </View>
  )

}
