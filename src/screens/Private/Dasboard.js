import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
//importaciones de los componentes
import HeaderAcount from '../../componet/HeaderAcount';
import DasboardContent from '../../componet/DasboardContent';

//Stilos
import styles from "./../../Styles/styles";

const image = {
    uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/granada.jpg",
  };
const Dasboard = () =>
{
    return (
        <ImageBackground source={image} style={styles.Dasboardimage}>
            <View style={styles.Dasboardcontainer}>
                {/**Primer componete de usuario */}
                <HeaderAcount />
                {/**Contenido de las tablas y graficas*/}
                <DasboardContent/>
            </View>
        </ImageBackground>

    );
};

export default Dasboard;