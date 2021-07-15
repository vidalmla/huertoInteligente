import React from 'react';
//libreria de drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
//navegacion de pantallas secundarioas
import ListadoPantas from './../screens/Private/ListadoPantas';
import misPlantas from './../screens/Private/misPlantas';
import Notificaciones from './../screens/Private/Notificaciones';

import Salir from './../screens/Private/Salir';
//icons
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//drawer
const Drawer = createDrawerNavigator();

const drawerNavegacion = () =>
{
    return (
        <Drawer.Navigator
        initialRouteName="inicio"
        drawerContentOptions={{
            activeTintColor: '#206A5D',
            itemStyle: { marginVertical: 20 },
            }}
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
        name="Salir"
        component={Salir}
        options={{drawerLabel: 'Salir' ,
        drawerIcon: ({ focused, size }) => (
            <Ionicons
                name="exit-outline"
                size={30}
                color={focused ? '#7cc' : '#ccc'}
            />
        ),
          }}    
        />
        
    </Drawer.Navigator>   
    );
};

export default drawerNavegacion;