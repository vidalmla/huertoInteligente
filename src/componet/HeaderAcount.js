import React from "react"
import { Text, View} from 'react-native';
import { Avatar, HStack,Heading,VStack} from "native-base"
import { extendTheme, NativeBaseProvider } from "native-base";
import styles from "../Styles/styles";

import firebase from './../backend/firebase';


import { Feather } from '@expo/vector-icons';
const theme = extendTheme({
    components: {
        Avatar: {
        baseStyle: {},
        defaultProps: {},
        variants: {},
        sizes: {},
    },
      Text: {
      baseStyle: {},
      defaultProps: {},
      variants: {},
      sizes: {},
    }
    } 
});


export const HeaderAcount = () => {
  return (
    <View style={{...styles.Dasboardslider}}>
      <View style={styles.Dasboardslider2}>
      {/*Nombre del usuario  */}
        
      
        
      <NativeBaseProvider theme={theme}>
        <VStack space={2}>
            
            <Heading mt={4} size="xl" color="white" >
              {/*Aqui poner el nombre que viene de la cuenta de google*/}
              <Text>{firebase.auth.currentUser.displayName}</Text> 
            </Heading>
            <Heading mt={-2} size="lg" color="white" >
            <Text>
              {firebase.auth.currentUser.emailVerified
                ?
                (<Text >
                 <Feather name="check-circle"  size={25} color="seagreen" />
                 {` `}Cuenta verificada
                </Text>):
              (<Text>
                <Feather name="x-circle" size={24} color="indianred" />
                {` `}Cuenta no verificada
                
                </Text>)
              
              }
            </Text>
            </Heading>
        </VStack>
      </NativeBaseProvider>

      </View>
      <View style={styles.Dasboardslider3}>
        {/*imagen del usuario */}
        <NativeBaseProvider theme={theme}>
          <HStack mt={-5}>
          <Avatar
            size={"xl"}
            source={{
              uri: firebase.auth.currentUser.photoURL
            }}
            >
            User foto
          </Avatar>
          </HStack>
          </NativeBaseProvider>
        </View>
    </View>

    
  )
}



export default HeaderAcount;



