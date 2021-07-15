import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Public/Login';
import Navegacion from './src/Navegación/Navegacion'

const App = () => {
  return (
    <NavigationContainer>
       <Navegacion />
    </NavigationContainer>

    
  );
}
 
export default App;