import React from 'react';
import
    {
        View,
        Text,
        ScrollView,
        ImageBackground,
        Image
} from 'react-native';
import styles from './../Styles/styles';

//imagen de fondo bonito
const image = { uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/maceta.jpg" };
const detalles = (props) =>
{
    console.log(props.route.params.descripcion)
    console.log(props.route.params.producto)
    console.log(props.route.params.desimage)
    return (

        <ImageBackground source={image} resizeMode="cover" style={styles.Dasboardimage}>
                <View style={styles.Dasboardcontainer}>
                    <View style={{
                     alignItems: 'center',
                    flexDirection: "column",
                    alignContent:"center",
                    }}>

                    <Text style={styles.text}>{ props.route.params.producto}</Text>

                    </View>
                </View>
                <View style={{
                    flex: 6,
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                <ScrollView>
                    
                    <View
                    style={{
                        height: 180,
                        backgroundColor:'#F9F3F3',
                        marginVertical:15,
                        marginHorizontal: 15,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        borderBottomLeftRadius: 25,
                        borderBottomEndRadius: 25,
                        padding: 2,
                        elevation:5,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems:"center"}}
                    >
                        <Image
                            style={{
                                marginVertical: 1,
                                width:"95%",
                                height: 150,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                resizeMode: "cover",
                            }}
                        source={{uri:`${props.route.params.desimage}`}}/>
                    </View>
                    <Text
                        style={{
                            
                            flex: 1,
                            marginHorizontal: 11,
                            fontSize: 18,
                            justifyContent:"center",
                            ...styles.google
                        }}>
                        
                        {props.route.params.descripcion}
                        {`\n`}
                        
                    </Text>
                    
                </ScrollView>
                </View>
        </ImageBackground>
        
    );
};
 
export default detalles;