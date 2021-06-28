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
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
                    ...styles.barra,
                    ...styles.sombra
                }
        }}
        >
            <Tab.Screen name="Notificaciones" component={Notificaciones}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabnav}>
                            <Ionicons
                                name="notifications-circle-outline"
                                size={50}
                                color="#536162" />
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
                        <View style={styles.tabnav, {
                            backgroundColor: '#F0E3CA',
                            padding: 8,
                            borderRadius: 50
                        }}>
                            <Image
                            source={require("../image/icons/dasborad.png")}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            {/*<Entypo
                                
                                name="home"
                                size={40}
                            color="#536162"/>*/}
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Cuenta" component={Cuenta}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabnav}>
                            <FontAwesome5
                                name="user-circle"
                                size={40}
                                color="#536162" />
                        </View>
                    ),
                }}
            />
                
            
      </Tab.Navigator>
    );
};

export default Navigation;