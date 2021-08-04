import React, { useEffect, useState } from 'react';
//componentes
import { View, ScrollView, Text } from 'react-native';
//backend
import firebase from "./../backend/firebase";
//impotacion de estylos
import styles from "./../Styles/styles";
//manejo de la graficas
import { WebView } from 'react-native-webview';




const DasboarContent = (Props) =>
{
    //constantes
    const [temperatura, setemperatura] = useState('');
    const [luz, setluz] = useState('');
    const [suelo, setsuelo] = useState('');
    const [agua, setagua] = useState('');
    const [humedad, sethumedad] = useState('');
    //datos de agua
    const aghua = () =>
    {
        firebase.realtime
            .ref('/sensores/' + firebase.auth.currentUser.uid + '/agua')
            .on('value', snapShot =>
            {
                setagua(snapShot.val());
            });
        
    }
    //datos de humedad
    const huhmedad = () =>
    {
        firebase.realtime
            .ref('/sensores/' + firebase.auth.currentUser.uid + '/humedad')
            .on('value', snapShot =>
            {
                sethumedad(snapShot.val());
            });
    }
    //datos de luz
    const lus = () =>
    {
        firebase.realtime
            .ref('/sensores/' + firebase.auth.currentUser.uid + '/luz')
            .on('value', snapShot =>
            {
                setluz(snapShot.val());
            });
    };
    //datos de suelo
    const shuelo = () =>
    {
        firebase.realtime
            .ref('/sensores/' + firebase.auth.currentUser.uid + '/suelo')
            .on('value', snapShot =>
            {
                setsuelo(snapShot.val());
            });
    };
    //datos de temperatura
    const temperaturas = () =>
    {
        firebase.realtime
            .ref('/sensores/' + firebase.auth.currentUser.uid + '/temperatura')
            .on('value', snapShot =>
            {
                setemperatura(snapShot.val());
            });
    };
    useEffect(() =>
    {
        temperaturas();
        lus();
        shuelo();
        aghua();
        huhmedad();
    }, []);
    return (
        <ScrollView
                
        style={styles.Dasboardfooter}
        contentContainerStyle={{
            flexGrow: 1,
            marginVertical:10
        }}>
            <WebView
            
            scrollEnabled={true}
            source={{ uri : `https://laptopfix.com.mx/demo-grafica-rtdb/grafica.php?id=${firebase.auth.currentUser.uid}` }}
            style={{
                flex: 1,
                top: 20,
                marginHorizontal: 10,
               
            }}
        />

        <View style={styles.tarjetadatos}>
            <Text style={{ ...styles.google, marginHorizontal: 10, top: 13 }}>
                {`       `}Datos del Huerto Inteligente
                {`\n`}
                {`\n`}Temperatura .............................. {temperatura}°C
                {`\n`}Humedad ....................................{humedad}%
                {`\n`}Luz .............................................{luz}%
                {`\n`}Agua .......................................... {agua}%
                {`\n`}suelo ...........................................{suelo}%
            </Text>
        </View>
    
    </ScrollView>
    );
}
export default DasboarContent;
