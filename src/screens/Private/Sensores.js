import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import firebase from '../../backend/firebase';

import SensorItem from '../../componet/SensorItem';

const Sensores = (props) => {

    const[sensores, setSensores] = useState([]);
    const[word, setWord] = useState('');
    const[resultado, setResultado] = useState('');

    const snapSensores = () => {
        firebase.database
            .collection('sensores')
            .onSnapshot((snapShot) => {
                if(snapShot.size > 0){
                    const arraySensores = [];

                    snapShot.forEach((doc) => {
                        arraySensores.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    setSensores(arraySensores);
                    setResultado('');
                }
                else{
                    setSensores([]);
                }
            });
    };

    const search = async() => {
        await firebase.database
        .collection('sensores')
        .where('sensor','==', word )
        .get()
        .then((querySnapshot) =>{
            if (querySnapshot.size > 0) {

                const arraySensores = [];
                    querySnapshot.forEach((doc) => {
                        arraySensores.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                setSensores(arraySensores);
                setResultado('');
            }
            else{
                setResultado('Sensor no encontrada');
                setSensores([]);
            }
        }); 
    };

    useEffect(() => {
        snapSensores();
    },[]);

    return ( 
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
                        snapSensores()
                    }}
                >
                    <Text style={{fontSize: 18}}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
                </View>

                <Button 
                    title='Agrega Sensor'
                    onPress={() => 
                    props.navigation.navigate(
                        'AgregaSensor'
                    )}
                    color='green'
                />
            </View>

        <FlatList
            data={sensores}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
                <SensorItem
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
 
export default Sensores;