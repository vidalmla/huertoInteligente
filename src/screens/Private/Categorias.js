import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import firebase from '../../backend/firebase';

import CategoriaItem from '../../componet/CategoriaItem';

const Categoria = (props) => {

    const[categorias, setCategorias] = useState([]);
    const[word, setWord] = useState('');
    const[resultado, setResultado] = useState('');

    const snapCategorias = () => {
        firebase.database
            .collection('categorias')
            .onSnapshot((snapShot) => {
                if(snapShot.size > 0){
                    const arrayCategorias = [];

                    snapShot.forEach((doc) => {
                        arrayCategorias.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    setCategorias(arrayCategorias);
                    setResultado('');
                }
                else{
                    setCategorias([]);
                }
            });
    };

    const search = async() => {
        await firebase.database.
        collection('categorias')
        .where('categoria','==', word )
        .get()
        .then((querySnapshot) =>{
            if (querySnapshot.size > 0) {

                const arrayCategorias = [];
                    querySnapshot.forEach((doc) => {
                        arrayCategorias.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                setCategorias(arrayCategorias);
                setResultado('');
            }
            else{
                setResultado('Categoría no encontrada');
                setCategorias([]);
            }
        }); 
    }

    useEffect(() => {
        snapCategorias();
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
                        snapCategorias()
                    }}
                >
                    <Text style={{fontSize: 18}}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
                </View>

                <Button 
                    title='Agrega Categoria'
                    onPress={() => 
                    props.navigation.navigate(
                        'AgregaCategoria'
                    )}
                    color='green'
                />
            </View>

        <FlatList
            data={categorias}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
                <CategoriaItem
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

export default Categoria;