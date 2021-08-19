import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login_inicio from './src/screens/Public/Login_inicio';
import Login from './src/screens/Public/Login';
import Navegacion from './src/Navegación/Navegacion'
import Registro from './src/screens/Public/Registro';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import detalle from './src/componet/detalle';
import AgregaCategoria from './src/screens/Private/AgregaCategoria';
import EditaGenero from './src/screens/Private/EditaCategoria';
import { LogBox } from 'react-native';
import AgregaVenta from './src/screens/Private/AgregaVenta';
import EditaVenta from './src/screens/Private/EditaVenta';
import AgregaSensor from './src/screens/Private/AgregaSensor';
import EditaSensor from './src/screens/Private/EditaSensor';

const Stack = createStackNavigator();

const App = (props) => {
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login_inicio'>
      
        <Stack.Screen
          options={(propsScreen) => ({
            title: 'Principal',
            
        })}
        name='inicio'
        component={Login_inicio}
        />
      <Stack.Screen
      name='Login'
      component={Login}
      />
      <Stack.Screen
					name='Registro'
					component={Registro}
        />
      <Stack.Screen
					name='Navegacion'
          component={Navegacion}
          options = {{gestureEnabled: false }}
      />
        
      <Stack.Screen name='detalle'
        component={detalle}
        />

      <Stack.Screen
          name='AgregaCategoria'
          component={AgregaCategoria}
          options={ (propsScreen) => ({
            title: 'Agregar Categoria',
          })}
      />

    <Stack.Screen
          name='EditaCategoria'
          component={EditaGenero}
          options={ (propsScreen) => ({
            title: 'Editar Categoria',
          })}
      />

    <Stack.Screen
          name='AgregaVenta'
          component={AgregaVenta}
          options={ (propsScreen) => ({
            title: 'Agregar Venta',
          })}
      />

    <Stack.Screen
          name='EditaVenta'
          component={EditaVenta}
          options={ (propsScreen) => ({
            title: 'Editar Venta',
          })}
      />

    <Stack.Screen
          name='AgregaSensor'
          component={AgregaSensor}
          options={ (propsScreen) => ({
            title: 'Agregar Sensor',
          })}
      />

    <Stack.Screen
          name='EditaSensor'
          component={EditaSensor}
          options={ (propsScreen) => ({
            title: 'Editar Sensor',
          })}
      />

      </Stack.Navigator>
    </NavigationContainer>

    
  );
}
 
export default App;