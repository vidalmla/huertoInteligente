import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import firebase from '../../backend/firebase';

import VentasItem from '../../componet/VentasItem';

const Ventas = (props) => {

    const[ventas, setVentas] = useState([]);
    const[word, setWord] = useState('');
    const[resultado, setResultado] = useState('');

    const snapVentas = () => {
        firebase.database
            .collection('ventas')
            .onSnapshot((snapShot) => {
                if(snapShot.size > 0){
                    const arrayVentas = [];

                    snapShot.forEach((doc) => {
                        arrayVentas.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    setVentas(arrayVentas);
                    setResultado('');
                }
                else{
                    setVentas([]);
                }
            });
    };

    const search = async() => {
        await firebase.database
        .collection('ventas')
        .where('cultivo','==', word )
        .get()
        .then((querySnapshot) =>{
            if (querySnapshot.size > 0) {

                const arrayVentas = [];
                    querySnapshot.forEach((doc) => {
                        arrayVentas.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                setVentas(arrayVentas);
                setResultado('');
            }
            else{
                setResultado('Venta no encontrada');
                setVentas([]);
            }
        }); 
    }

    useEffect(() => {
        snapVentas();
    },[]);

    return(
        <View>
            <View style={{marginHorizontal: 20}}>
                <View style={{
                    flexDirection: 'row'}}>
                    <TextInput 
                        style={{
                            paddingVertical: 5, 
                            paddingHorizontal: 10,
                            borderWidth: 1,
                            borderColor: 'green',
                            borderRadius: 5,
                            width: '65%',
                            marginBottom: 15
                    }}
                    keyboardType='default'
                    placeholder='Buscar'
                    autoCapitalize='words'
                    autoCorrect
                    value={word}
                    onChangeText={(val) => setWord(val)}
                    />
                <TouchableOpacity
                    style={{ 
                        padding: 5, 
                        backgroundColor: 'green',
                        borderRadius: 8,
                        marginBottom: 15
                    }}
                    onPress={() => {
                        search()
                    }}
                >
                    <Feather 
                        name="search" 
                        size={26} 
                        color="white" 
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ 
                        padding: 5,
                        top:1
                    }}
                    onPress={() => {
                        snapVentas()
                    }}
                >
                    <Text style={{fontSize: 18}}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
                </View>

                <Button 
                    title='Agrega Venta'
                    onPress={() => 
                    props.navigation.navigate(
                        'AgregaVenta'
                    )}
                    color='green'
                />
            </View>

        <FlatList
            data={ventas}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
                <VentasItem
                    item={item.item}
                    navigation={props.navigation}
                />
            )}
        />
        <View style={{
            top: 10,
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 24
            }}>
                {resultado}
            </Text>
        </View>
        </View>
    );
}

export default Ventas;