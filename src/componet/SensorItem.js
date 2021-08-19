import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import firebase from '../backend/firebase';

const SensorItem = (props) => {

    const eliminarSensor = async () => {
        Alert.alert(
            'Eliminar sensor',
            `¿Realmente deseas eliminar el sensor "${props.item.sensor}"? \n\n Esta acción no puede deshacerse.`,
            [
                {
                    text : 'NO',
                    onPress: null
                },
                {
                    text:  'SI',
                    onPress: async () => {
                        await firebase.database
                            .collection('sensores')
                            .doc(props.item.id)
                            .delete();

                            Alert.alert(
                                'Acción completada', 
                                  `El sensor "${props.item.sensor}" fue eliminado`,
                                [
                                    {
                                        text: 'Continuar',
                                        onPress: null
                    
                                    },
                                ]
                            );
                    },
                    style: 'destructive',
                }
            ]
        );
    };

    return ( 
        <View
        style={{
            height: 150,
            backgroundColor:'#F9F3F3',
            marginVertical:10,
            marginHorizontal: 20,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 25,
            borderBottomEndRadius: 25,
            padding: 5,
            elevation:5,
            flex: 1,
            flexDirection: 'row',
        }}
    >
        <View 
            style={{ 
                flex: 4, 
                alignContent: 'flex-start', 
                alignItems: 'flex-start',
                marginLeft: 5
            }}>
                
            <Text
                style={{
                    color: 'tomato',
                    fontSize: 24,
                    marginTop: 10,
                    marginLeft: 20,
                }}>
                {props.item.sensor}
            </Text>
            <Text
                style={{
                    color: '#000',
                    fontSize: 15,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 6
                }}>
                Alimentacion: {props.item.alimentacion} V
            </Text>
            <Text
                style={{
                    color: '#000',
                    fontSize: 15,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 6
                }}>
                Corriente: {props.item.corriente} mA
            </Text>
            <Text
                style={{
                    color: '#000',
                    fontSize: 15,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 6
                }}>
                Señal: {props.item.senial} 
            </Text>

        </View>

        <View style={{
            flex: 1,
            marginRight: 8,
            paddingVertical: 45
        }}>
            <TouchableOpacity
                style={{
                    flex: 1,
                    borderRadius: 10,
                    width: '100%',
                    padding: 10,
                    backgroundColor: '#fff',
            }}
                onPress={()=> props.navigation.navigate(
                     'EditaSensor',
                    {
                        id:             props.item.id,
                        sensor:         props.item.sensor,
                        alimentacion:   props.item.alimentacion,
                        corriente:      props.item.corriente,
                        senial:         props.item.senial
                    }
                )}
            >
                <FontAwesome 
                    name="edit" 
                    size={30} 
                    color="black" 
                />
            </TouchableOpacity>
        </View>

        <View style={{
            flex: 1,
            marginRight: 8,
            paddingVertical: 45
        }}>
            <TouchableOpacity
                style={{
                    flex: 1,
                    borderRadius: 15,
                    width: '100%',
                    padding: 10,
                    backgroundColor: '#fff',
            }}
                onPress={eliminarSensor}
            >
                <FontAwesome5 
                    name="trash" 
                    size={30} 
                    color="black"
                    />
            </TouchableOpacity>
        </View>
    </View>
     );
}
 
export default SensorItem;