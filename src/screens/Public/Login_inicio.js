import React from "react";
import { View, Text, ImageBackground,Dimensions,Image, TouchableOpacity } from "react-native";
import styles from "./../../Styles/styles";
const { height } = Dimensions.get("window");

import { LogBox } from 'react-native';

const imagen = {
  uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/Inicio-image.jpg",
};


const Login_inicio = (props) =>
{
  //para ignorar el tiempo
  LogBox.ignoreLogs(['Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

 
  return (
    <View style={styles.inicio}>
      <ImageBackground source={imagen} style={{ flex: 1, height: null, width: null }}>
        <View
          style={{
            ...styles.cuadro,
            ...styles.container,
            flexdirection: "column",
          }}
        >
          <View style={{ ...styles.tarjetainicio }}>
            <Text style={styles.text}>Huerto Inteligente</Text>
          </View>
          <View style={{
            
            flexdirection: "column"
          }}>
          </View>
        </View>
        <View style={{ height: height / 3, backgroundColor: "#fff" }}>
          <TouchableOpacity
          
          onPress={() => props.navigation.navigate('Login')}
          >

            <View style={{ ...styles.Buttom1, ...styles.sombra }}
            >
              <Text style={styles.textc}>Iniciar sesion</Text>
            </View>  

          </TouchableOpacity>
            
          

        <View style={{ ...styles.Buttom2, ...styles.sombra }}>
          {/*debe de ir a un costado el logo de google */}
          <Image
            source={require("./../../image/icons/google.png")}
            style={{ width: 30, height: 30 }}
            />
            
            <View style={{ flexdirection: "column" }}>
              <Text style={styles.google}>GOOGLE</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#C6D166',
              top:30,
              height: 30,
              marginHorizontal: 50,
              borderRadius: 35,
              alignItems: "center",
              justifyContent: "center",
              
            }}
            onPress={() => props.navigation.navigate('Registro')}
          >
          <Text
            style={{
            color: "#564A4A",
            fontWeight: 'bold',
            fontSize: 20,}}>No tienes cuenta, registrate.</Text>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login_inicio;
