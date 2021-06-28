import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../Styles/styles";

const image = {
  uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/Inicio-image.jpg",
};

const Inicio = (props) => {
  return (
    <View style={styles.inicio}>
      <ImageBackground source={image} style={styles.image}>
        <View
          style={{
            ...styles.cuadro,
            ...styles.container,
            flexdirection: "row",
          }}
        >
          <View style={{ ...styles.tarjetainicio }}>
            <Text style={styles.text}>Huerto Inteligente</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Inicio;
