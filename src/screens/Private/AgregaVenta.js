import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button, Alert, CheckBox, Text, TouchableOpacity } from 'react-native';
import firebase from './../../backend/firebase';

const AgregaVenta = (props) => {

    const[data, setData] = useState({
        cantidad    : '',
        costo       : '',
        cultivo     : '',
        precio      : '',
        vendedor    : ''
    });

    const insertaDoc = async () => {
        await firebase.database
            .collection('ventas')
            .add({
                cantidad:       parseInt(data.cantidad),
                costo:          parseInt(data.costo),
                cultivo:        data.cultivo,     
                precio:         parseInt(data.precio),
                vendedor:       data.vendedor
            });

            Alert.alert(
                'Inserción finalizada',
                'Venta Agregada',
                [
                    {
                        text: 'Continuar',
                        onPress: () =>
                        props.navigation.navigate(
                            'Ventas'
                        ),
                    },
                ]
            );
    };

    return(
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
            keyboardType='numeric'
            placeholder='Cantidad'
            maxLength={10}
            value={data.cantidad}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['cantidad']: val,
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
            placeholder='Costo'
            maxLength={10}
            value={data.costo}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['costo']: val,
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
            placeholder='Cultivo'
            autoCapitalize='words'
            autoCorrect
            maxLength={120}
            value={data.cultivo}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['cultivo']: val,
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
            placeholder='Precio'
            maxLength={10}
            value={data.precio}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['precio']: val,
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
            placeholder='Vendedor'
            autoCapitalize='words'
            autoCorrect
            maxLength={120}
            value={data.vendedor}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['vendedor']: val,
                })
            }
            />
            
            <Button
                title='Guardar Cambios'
                color='green'
                onPress={() => {
                    insertaDoc();       
                }}
            />
        </ScrollView>
    );
}

export default AgregaVenta;