import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button, Alert, CheckBox, Text, TouchableOpacity } from 'react-native';
import firebase from './../../backend/firebase';

const AgregaCategoria = (props) => {

    const[data, setData] = useState({
        categoria   : '',
        descripcion : '',
        tipo        : '',
        activo      : false
    });

    const insertaDoc = async () => {
        await firebase.database
            .collection('categorias')
            .add({
                categoria       : data.categoria,
                descripcion     : data.descripcion,
                tipo            : data.tipo,
                activo          : data.activo
            });

            Alert.alert(
                'Inserción finalizada',
                'Categoría Agregada',
                [
                    {
                        text: 'Continuar',
                        onPress: () =>
                        props.navigation.navigate(
                            'Categorias'
                        ),
                    },
                ]
            );
    };

    return(
        <ScrollView 
            style={{
                flex: 1, 
                marginHorizontal: 20,
                top: 30
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
            placeholder='Categoria'
            autoCapitalize='words'
            autoCorrect
            maxLength={120}
            value={data.categoria}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['categoria']: val,
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
            placeholder='Tipo'
            autoCapitalize='words'
            autoCorrect
            maxLength={120}
            value={data.tipo}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['tipo']: val,
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
            placeholder='Descripción'
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
            numberOfLines={5}
            multiline
            value={data.descripcion}
            onChangeText={(val) => 
                setData({
                    ...data,
                    ['descripcion']: val,
                })
            }
            />
            <View style={{
                marginBottom: 15
                }}>
                <View 
                style={{
                    flexDirection: 'row'
                }}> 
                    <CheckBox
                        value={data.activo}
                        onValueChange={(val) => 
                            setData({
                                ...data,
                                ['activo']: val,
                            })
                        }
                    /> 
                    <Text style={{margin: 6}}>
                        CATEGORIA ACTIVA
                    </Text>
                </View>
            </View> 
            <Button
                title='Agregar Categoria'
                onPress={() => {
                    insertaDoc();       
                }}
                color='green'
            />
        </ScrollView>
    );
}

export default AgregaCategoria;