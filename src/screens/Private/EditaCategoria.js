import React, { useState } from 'react';
import { TextInput, ScrollView, View, Button, Alert, Text, CheckBox } from 'react-native';
import firebase from '../../backend/firebase';

const EditaCategoria = (props) => {

    const[data, setData] = useState({
        id              : props.route.params.id,
        categoria       : props.route.params.categoria,
        descripcion     : props.route.params.descripcion,
        tipo            : props.route.params.tipo,
        activo          : props.route.params.activo
    });

    const editaDoc = async () => {

        await firebase.database
                .collection('categorias')
                .doc(data.id)
                .update({
                    categoria :     data.categoria,
                    descripcion:    data.descripcion,
                    tipo:           data.tipo,
                    activo:         data.activo
                });
        Alert.alert(
            'Edición finalizada', 
            'Categoría actualizada',
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
                title='Guardar Cambios'
                color='green'
                onPress={editaDoc}
            />
        </ScrollView>
    );
}

export default EditaCategoria;