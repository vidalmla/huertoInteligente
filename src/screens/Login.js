import React from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";
import styles from "../Styles/styles";

//Dimensiones de 3 cuarto de la pantalla
const { width, height } = Dimensions.get("window");

const Login = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-end",
      }}
    >
      <View style={styles.inicio}>
        <Image
          source={require("./../image/flor.jpg")}
          style={{ flex: 1, height: null, width: null }}
        />
      </View>
      <View style={{ height: height / 3, backgroundColor: "#fff" }}>
        <View style={{ ...styles.Buttom1, ...styles.sombra }}>
          <Text style={styles.textc}>Iniciar sesion</Text>
        </View>
        <View style={{ ...styles.Buttom2, ...styles.sombra }}>
          {/*debe de ir a un costado el logo de google */}
          <Image
            source={require("./../image/icons/google.png")}
            style={{ width: 30, height: 30 }}
          />
          <View style={{ flexdirection: "column" }}>
            <Text style={styles.google}>GOOGLE</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
