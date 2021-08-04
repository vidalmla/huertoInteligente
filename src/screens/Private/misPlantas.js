import React from 'react';
import
{
    View,
    Text,
    ScrollView,
    ImageBackground,
} from 'react-native';


import styles from './../../Styles/styles';

//imagen de fondo bonito
const image = { uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/maceta.jpg" };
const misPlantas = (props) =>
{
    return (

        <ImageBackground source={image} resizeMode="cover" style={styles.Dasboardimage}>
                <View style={styles.Dasboardcontainer}>
                    <View style={{
                     alignItems: 'center',
                    flexDirection: "column",
                    alignContent:"center",
                    }}>

                    <Text style={styles.text}>title</Text>

                    </View>
                </View>
                <View style={{
                    flex: 6,
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                <ScrollView>
                    
                    
                    <Text
                        style={{
                            
                            flex: 1,
                            marginHorizontal: 11,
                            fontSize: 18,
                            justifyContent:"center",
                            ...styles.google
                        }}>
                        
                        infor
                        {`\n`}
                        
                    </Text>
                    
                </ScrollView>
                </View>
        </ImageBackground>
        
    );
};
 
export default misPlantas;