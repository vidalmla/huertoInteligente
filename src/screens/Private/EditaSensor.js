import React, { useState } from 'react';
import {  TextInput, ScrollView, View, Button, Alert, Text, CheckBox } from 'react-native';
import firebase from '../../backend/firebase';

const EditaSensor = (props) => {

    const[data, setData] = useState({
        id              : props.route.params.id,
        sensor          : props.route.params.sensor,
        alimentacion    : props.route.params.alimentacion.toString(),
        corriente       : props.route.params.corriente.toString(),
        senial          : props.route.params.senial
    });

    const editaDoc = async () => {

        await firebase.database
            .collection('sensores')
            .doc(data.id)
            .update({
                sensor:         data.sensor,
                alimentacion:   parseFloat(data.alimentacion),
                corriente:      parseFloat(data.corriente), 
                senial:         data.senial
            });
        Alert.alert(
            'Edición finalizada', 
            'Sensor actualizado',
            [
                {
                    text: 'Continuar',
                    onPress: () =>
                        props.navigation.navigate(
                            'Sensores'
                        ),

                },
            ]
        );
    }

    return ( 
        <ScrollView 
            style={{
                flex: 1, 
                top: 30,
                marginHorizontal: 20,
        }}>
            <TextInput 
                style={{
                    paddingVertical: 10, 
                    paddingHorizontal: 20,
                    borderWidth: 2,
                    borderColor: 'green',
                    borderRadius: 5,
                    width: '100%',
                    marginBottom: 15,
                }}
            keyboardType='default'
            placeholder='Sensor'
            autoCapitalize='words'
            autoCorrect
            maxLength={120}
            value={data.sensor}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['sensor']: val,
                })
            }
            />

            <TextInput 
                style={{
                    paddingVertical: 10, 
                    paddingHorizontal: 20,
                    borderWidth: 2,
                    borderColor: 'green',
                    borderRadius: 5,
                    width: '100%',
                    marginBottom: 15,
                }}
            keyboardType='numeric'
            placeholder='Alimentacion'
            maxLength={10}
            value={data.alimentacion}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['alimentacion']: val,
                })
            }
            />

            <TextInput 
                style={{
                    paddingVertical: 10, 
                    paddingHorizontal: 20,
                    borderWidth: 2,
                    borderColor: 'green',
                    borderRadius: 5,
                    width: '100%',
                    marginBottom: 15,
                }}
            keyboardType='numeric'
            placeholder='Corriente'
            maxLength={10}
            value={data.corriente}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['corriente']: val,
                })
            }
            />

            <TextInput 
                style={{
                    paddingVertical: 10, 
                    paddingHorizontal: 20,
                    borderWidth: 2,
                    borderColor: 'green',
                    borderRadius: 5,
                    width: '100%',
                    marginBottom: 15,
                }}
            keyboardType='default'
            placeholder='Señal'
            autoCapitalize='words'
            autoCorrect
            maxLength={120}
            value={data.senial}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['senial']: val,
                })
            }
            />
            
            <Button
                title='Guardar Cambios'
                color='green'
                onPress={() => {
                    editaDoc();       
                }}
            />
        </ScrollView>
     );
}
 
export default EditaSensor;