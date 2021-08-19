import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import firebase from '../backend/firebase';

const VentasItem = (props) => {

    const eliminarVentas = async () => {
        Alert.alert(
            'Eliminar venta',
            `¿Realmente deseas eliminar la venta de "${props.item.categoria}"? \n\n Esta acción no puede deshacerse.`,
            [
                {
                    text : 'NO',
                    onPress: null
                },
                {
                    text:  'SI',
                    onPress: async () => {
                        await firebase.database
                            .collection('ventas')
                            .doc(props.item.id)
                            .delete();

                            Alert.alert(
                                'Acción completada', 
                                  `La venta de "${props.item.cultivo}" fue eliminada`,
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

    return(

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
                    color: '#000',
                    fontSize: 24,
                    marginTop: 10,
                    marginLeft: 20,
                    textTransform: 'capitalize'
                }}>
                {props.item.cultivo}
            </Text>
            <Text
                style={{
                    color: '#000',
                    fontSize: 14,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 6
                }}>
                Vendedor: {props.item.vendedor}
            </Text>
            <Text
                style={{
                    color: 'red',
                    fontSize: 20,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 6
                }}>
                ${props.item.precio}
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
                     'EditaVenta',
                    {
                        id:           props.item.id,
                        cantidad:     props.item.cantidad,
                        costo:        props.item.costo,
                        cultivo:      props.item.cultivo,
                        precio:       props.item.precio,
                        vendedor:     props.item.vendedor
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
                onPress={eliminarVentas}
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

export default VentasItem;