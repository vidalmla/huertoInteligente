import React from 'react';
//libreria de drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
//navegacion de pantallas secundarioas
import ListadoPantas from './../screens/Private/ListadoPantas';
import misPlantas from './../screens/Private/misPlantas';
import Notificaciones from './../screens/Private/Notificaciones';
import Categoria from '../screens/Private/Categorias';
import Ventas from '../screens/Private/Ventas';

import Salir from './../screens/Private/Salir';
//icons
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//firebase
import firebase from './../backend/firebase';

import Sidebar from './../componet/Sidebar';
import Sensores from '../screens/Private/Sensores';

//drawer
const Drawer = createDrawerNavigator();


const drawerNavegacion = (props) =>
{



    

    return (
        <Drawer.Navigator
            initialRouteName="inicio"
            drawerContentOptions={{
                activeTintColor: '#206A5D',
                itemStyle: { marginVertical: 20 },
            }}
            drawerContent={() => <Sidebar {...props}/>}
        >
        <Drawer.Screen
        
        name="Notificaciones"
        component={Notificaciones}
            options={{
                
                drawerIcon: ({focused, size}) => (
                    <Ionicons
                        name="notifications"
                        size={30}
                        color={focused ? '#7cc' : '#ccc'}
                    />
                ),
            }}
        />
        <Drawer.Screen
                name="ListadoPantas"
                component={ListadoPantas}
                options={{
                    drawerLabel: 'Listado de Pantas' ,
                    drawerIcon: ({ focused, size }) => (
                    <Entypo
                        name="list"
                        size={30}
                        color={focused ? '#7cc' : '#ccc'}
                    />
                ),
            }}


        />  
        <Drawer.Screen
            name="Mis Plantas"
            component={misPlantas}
            options={{
                drawerLabel: 'Mis Plantas' ,
                drawerIcon: ({ focused, size }) =>(               
                <MaterialIcons name="local-florist"
                size={30}
                color={focused ? '#7cc' : '#ccc'}
                />
            ),
            }}
        />    

        <Drawer.Screen 
            name="Categorias"
            component={Categoria}
            options={{
                drawerLabel: 'Categorias' ,
                drawerIcon: ({ focused, size }) =>(               
                <MaterialIcons name="category"
                size={30}
                color={focused ? '#7cc' : '#ccc'}
                />
            ),
            }}
        />

        <Drawer.Screen 
            name="Ventas"
            component={Ventas}
            options={{
                drawerLabel: 'Ventas' ,
                drawerIcon: ({ focused, size }) =>(               
                <FontAwesome5 
                name="money-check-alt"
                size={30}
                color={focused ? '#7cc' : '#ccc'}
                />
            ),
            }}
        />

        <Drawer.Screen 
            name="Sensores"
            component={Sensores}
            options={{
                drawerLabel: 'Sensores' ,
                drawerIcon: ({ focused, size }) =>(               
                <MaterialCommunityIcons
                name="lightning-bolt"
                size={30}
                color={focused ? '#7cc' : '#ccc'}
                />
            ),
            }}
        />

            <Drawer.Screen
                name='Salir'
                component={Salir}
                options={{
                    
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="exit-outline"
                            size={30}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
                onPress={async () =>
                {
                    await firebase.auth.signOut();
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    });
                    props.navigation.navigate('Login');
                }}
        />
        
    </Drawer.Navigator>   
    );
};

export default drawerNavegacion;