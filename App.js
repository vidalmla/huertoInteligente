import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from './src/screens/Inicio';
import Navegacion from './src/Navegación/Navegacion';
import Login from './src/screens/Login';
const App = () =>
{
	return (
		
		<NavigationContainer>
			<Navegacion />
		</NavigationContainer>
			
	);
};

export default App;
