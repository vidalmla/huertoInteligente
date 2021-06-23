import React from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import styles from '../Styles/styles';


const image = { uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/flor.jpg" };

const Llego = (props) =>
{
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>

                <View style = {styles.cuadro}>
                    <Text style={styles.text}>Huerto Inteligente</Text>
                </View>
                





            </ImageBackground>
        </View>
    );
};



export default Llego;
