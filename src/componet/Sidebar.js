import React from "react"
import { Text, View } from 'react-native';

//icons
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//firebase
import firebase from './../backend/firebase';

import
{
	DrawerContentScrollView,
	DrawerItem
} from '@react-navigation/drawer';

const Sidebar = (props) =>
{
	return (
		<View style= {{flex:1}}>
			<DrawerContentScrollView {...props}>
				<Text
				style={{
					marginLeft: 20,
					marginRight:10,
					color: '#5C821A',
					fontSize: 18,
					marginBottom: 5,
					

				}}>
					Listo para plantar 🌿{ `\n`}un mundo mejor 🌱
				</Text>
				<Text
				style={{
					marginLeft: 20,
					marginRight:10,
					color: '#865439',
					fontSize: 20,
					marginBottom: 5,
					fontWeight:'bold'

				}}>
				{firebase.auth.currentUser.displayName}	
				</Text>
				<DrawerItem
					icon={({ focused }) => (
						<Ionicons
                        name="notifications"
                        size={30}
                        color={focused ? '#7cc' : '#ccc'}
                    />
					)}
					label='Notificaciones'
					onPress={() =>
						props.navigation.navigate('Notificaciones')}
				/>
				<DrawerItem
				icon={({ focused }) => (
					<Entypo
					name="list"
					size={30}
					color={focused ? '#7cc' : '#ccc'}
				/>	
				)}
				label='ListadoPantas'
				onPress={() =>
						props.navigation.navigate('ListadoPantas')}
				/>
				
				<DrawerItem
				icon={({ focused }) => (
				<MaterialIcons name="local-florist"
                size={30}
                color={focused ? '#7cc' : '#ccc'}
                />
				)}
				label='Mis Plantas'
				onPress={() =>
					props.navigation.navigate('Mis Plantas')}
				/>

				<DrawerItem
				icon={({ focused }) => (
				<MaterialIcons name="category"
                size={30}
                color={focused ? '#7cc' : '#ccc'}
                />
				)}
				label='Categorias'
				onPress={() =>
					props.navigation.navigate('Categorias')}
				/>

				<DrawerItem
				icon={({ focused }) => (
				<FontAwesome5 
					name='money-check-alt'
					size={23}
					color={focused ? '#7cc' : '#ccc'}
                />
				)}
				label='Ventas'
				onPress={() =>
					props.navigation.navigate('Ventas')}
				/>

				<DrawerItem
				icon={({ focused }) => (
				<MaterialCommunityIcons
					name="lightning-bolt"
					size={30}
					color={focused ? '#7cc' : '#ccc'}
                />
				)}
				label='Sensores'
				onPress={() =>
					props.navigation.navigate('Sensores')}
				/>

				<DrawerItem
				label='Salir'
				icon={({ focused }) => (
				<Ionicons
					name="exit-outline"
				size={30}
				color={focused ? '#7cc' : '#ccc'}/>
				)}	
				onPress={async () =>{
					//funcion para cerrar la sesion
					await firebase.auth.signOut();
					
					//formateamos el historial para IOS en android jala chido
					props.navigation.reset({
						index: 0,
						routes: [{ name: 'inicio' }],
					});
					//se borra el historial
					props.navigation.navigate('inicio');

				}}	
				/>
				

				
			



			</DrawerContentScrollView>
		</View>
	)
}

export default Sidebar;