import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
//iconos
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//natibase
import {Heading,VStack} from "native-base"
import { extendTheme, NativeBaseProvider } from "native-base";
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
const MisplantasItem = (props) =>
{
    return (
        
        <View>
            <View style={{
            height: 150,
            backgroundColor:'#F9F3F3',
            marginVertical:15,
            marginHorizontal: 15,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 25,
            borderBottomEndRadius: 25,
            padding: 10,
            elevation:5,
            flexDirection: "row",
            
             }}>
        
            <View style={{
                backgroundColor: "#F4F4F2",
                flex: 0.5,
                flexDirection: "column",
                borderTopLeftRadius: 25,
                borderBottomLeftRadius: 25,
                elevation:5,
                }}>
                    
                    
                    <Image
                    source={{ uri: props.item.image }}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        borderTopLeftRadius: 25,
                        borderBottomLeftRadius: 25,
                        
                    }} />
                    
                </View>
                <TouchableOpacity style={{
                    backgroundColor: "#F4F4F2",
                    flex: 0.5,
                    flexDirection: 'column',
                    borderTopRightRadius: 25,
                    borderBottomEndRadius: 25,
                    elevation: 5,
                    
                }}
                    onPress={() =>
                        props.navigation.navigate('detalle', {
                            producto:props.item.producto,
                            descripcion: props.item.descripcion,
                            desimage: props.item.desimage
                        })
                    }
                >

                    <View style ={{flex: 1,
                        flexDirection: 'column',}}>
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: "center",
                            fontSize:16,
                        }} >
                        <NativeBaseProvider theme={theme}>
                            <VStack space={2}>
                                <Heading mt={2} size="lg" color="#4AA96C" >
                                    <Text>{props.item.producto}</Text>
                                </Heading>
                            </VStack>
                        </NativeBaseProvider>
                    
                    </View>
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            marginVertical:2,
                        }}>
                            
                            <Text style={{
                                flex: 1,
                                fontSize:18,
                            }}>
                                <Entypo
                                    name="help"
                                    size={18}
                                    color="black" />
                            informacion
                            </Text>
                            <Text style={{
                                flex: 1,
                                fontSize:18,
                            }}>
                            <MaterialCommunityIcons
                                name="lightbulb-on"
                                size={18}
                                color="black" />
                            Como comenzar
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
                </View>
        </View>
     );
}
 
export default MisplantasItem;