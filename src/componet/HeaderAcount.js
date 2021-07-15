import React from "react"
import { Text, View} from 'react-native';
import { Avatar, HStack,Heading,VStack} from "native-base"
import { extendTheme, NativeBaseProvider } from "native-base";
import styles from "../Styles/styles";

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
      {/*Nombre del usuario */}
        
      
        
      <NativeBaseProvider theme={theme}>
        <VStack space={2} alignItems="center"width="100%">
            <Heading
              mt={20}
              size="xl"
              color="white"
            >
  {/*Aqui poner el nombre que viene de la cuenta de google*/}
           Monica Bustos
          </Heading>
        </VStack>
      </NativeBaseProvider>

      </View>
      <View style={styles.Dasboardslider3}>
        {/*imagen del usuario */}
        <NativeBaseProvider theme={theme}>
          <HStack>
            <Avatar
              size="xl"
              source={{
                uri: "https://demo.nparoco.com/Vuexy/app-assets/images/profile/user-uploads/user-11.jpg",
              }}
              >
              User
            </Avatar>
            </HStack>
          </NativeBaseProvider>
        </View>
    </View>

    
  )
}



export default HeaderAcount;



