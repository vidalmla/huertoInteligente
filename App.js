import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login_inicio from './src/screens/Public/Login_inicio';
import Login from './src/screens/Public/Login';
import Navegacion from './src/Navegación/Navegacion'
import Registro from './src/screens/Public/Registro';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import detalle from './src/componet/detalle';

const Stack = createStackNavigator();

const App = (props) => {
  
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
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}
 
export default App;