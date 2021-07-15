import React from "react";
import { View, Text, ImageBackground,Dimensions,Image } from "react-native";
import styles from "./../../Styles/styles";
const { width, height } = Dimensions.get("window");

const imagen = {
  uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/Inicio-image.jpg",
};

const Inicio = (props) => {
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

          <View style={{ ...styles.Buttom1, ...styles.sombra }}>
            <Text style={styles.textc}>Iniciar sesion</Text>
          </View>
          

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

        </View>
      </ImageBackground>
    </View>
  );
};

export default Inicio;
