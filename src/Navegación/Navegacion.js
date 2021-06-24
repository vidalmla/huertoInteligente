import React from 'react';
import { View,Text,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//estilo
import styles from './../Styles/styles';
//pantallas
import Notificaciones from './../screens/Notificaciones';
import Sensores from './../screens/Sensores';
import Dasboard from './../screens/Dasboard';
import Cuenta from './../screens/Cuenta';
//iconos
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Navigation = (props) =>
{
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: 'green',
                inactiveTintColor: 'gray',
                style: {
                    position: 'absolute',
                    backgroundColor: "#fff",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    borderRadius: 20,
                    height: 75,
                    ...styles.sombra,
                }
        }}
        >
            <Tab.Screen name="Notificaciones" component={Notificaciones}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabnav}>
                            <Ionicons
                                name="notifications"
                                size={40}
                                color="#D0AF84" />
                            
                            <Text style={styles.tabtext}>
                                Notificaciones
                            </Text>
                        </View>
                    ),
                }}
            />
            {/*<Tab.Screen name="Sensores" component={Sensores}
                
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabnav}>
                            <Ionicons
                                name="notifications"
                                size={30}
                                color="#D0AF84" />
                            <Text style={styles.tabtext}>
                                Sensores
                            </Text>
                        </View>
                    ),
                }}/>*/}
            <Tab.Screen name="Dasboard" component={Dasboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabnav}>
                            {/*<Image
                            source = {require("../image/icons/Dasboard.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />*/}
                            <MaterialIcons
                                
                                name="local-florist"
                                size={40}
                                color="#61B15A"/>
                            <Text style={styles.tabtext}>
                                Dasboard
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Cuenta" component={Cuenta}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabnav}>
                            <FontAwesome
                                name="user-circle"
                                size={40}
                                color="#865439" />
                            <Text style={styles.tabtext}>
                                Cuenta
                            </Text>
                        </View>
                    ),
                }}
            />
                
            
      </Tab.Navigator>
    );
};

export default Navigation;