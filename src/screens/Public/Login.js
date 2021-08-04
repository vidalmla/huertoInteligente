import React ,{useState,useLayoutEffect}from 'react';
import
    {
        ActivityIndicator,
        Button,
        Alert,
        ImageBackground,
        Text,
        TextInput,
        View,
        TouchableOpacity
    } from 'react-native';
import styles from './../../Styles/styles';
//icono
import { Feather } from '@expo/vector-icons';
//backend
import firebase from './../../backend/firebase';
//para el mensaje de tiempo que molesta
import { LogBox } from 'react-native';




//imagen de fondo
const imagen = {
    uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/pexels-kate-graur-5425692.jpg",
};

 
const Login = (props) =>
{
    useLayoutEffect(() => {
       
        props.navigation.setOptions({
            headerLeft: () => null,
        })
    });


const iniciarSesion = async() => {
    setCargando(true);
    try {
        const usuario = await firebase.auth.signInWithEmailAndPassword(
            formData.email, formData.pass
        );
        
        //verifico si esta validado de

        let mensajeVienvenido = `Hola ${usuario.user.email}`
        if (!usuario.user.emailVerified) {
            `Bienvenido ,`,
                mensajeVienvenido += ' favor de verificar tu cuenta para acceder',
                [{
                    text: 'Ok',
                    
                },],{cancelable: false}
        }
        Alert.alert(
            `Bienvenido ,`,
            mensajeVienvenido,
            [{
                text: 'Acceder',
                onPress: () => props.navigation.navigate('Navegacion')
            },],{cancelable: false}
        );
        
        setCargando(false);
    }
    catch (e) {
        console.log(JSON.stringify(e))
        setCargando(false);
    }
}
const [formData, setFormData] = useState({
email: 'vidalcutiti@gmail.com',
pass: '123456',
		
});
const [verPass, setVerPass] = useState('eye-off');
const [cargando, setCargando] = useState(false);
//para ignorar el tiempo
LogBox.ignoreLogs(['Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


    return (

        <View style={styles.inicioRe}>
            
            <ImageBackground source={imagen} style={styles.imagenRE}>
                <View style={styles.tarjetaregistro}>
                    <Text style={styles.textcRE}>🌱Login🌱</Text>
                </View>
                <View style={styles.contReg}>
                <TextInput
                    keyboardType='email-address'
                    maxLength={70}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{
                        marginHorizontal: 20,
                        marginVertical:10,
                        top:50,
                        width: '90%',
                        borderRadius: 7,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderColor: 'green',
                        borderWidth: 2,
                        fontSize: 16,
                    }}
                    placeholder='Correo electrónico'
                    editable={!cargando}
                    value={formData.email}
                        
                    onChangeText={(val) =>
                        setFormData({
                            ...formData,
                            ['email']: val,
                        })
                    }
                /> 
                <View
                style={{
                    flex: 1,
                    width: '100%',
                    position: 'relative',
                }}>
                    <Feather
                        name={verPass}
                        color='tomato'
                        size={20}
                        style={{
                            position: 'absolute',
                            top: 70,
                            right: 28,
                            zIndex: 1001,
                        }}
                        onPress={() =>
                            setVerPass(
                                verPass === 'eye'
                                ? 'eye-off'
                                : 'eye'
                            )
                        }
                    />
                    <TextInput
                        secureTextEntry={
                            verPass === 'eye' ? false : true
                        }
                        keyboardType='number-pad'
                        maxLength={8}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={{
                            marginHorizontal: 20,
                            marginVertical:10,
                            top:50,
                            width: '90%',
                            borderRadius: 7,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            borderColor: 'green',
                            borderWidth: 2,
                            fontSize: 16,
                        }}
                        placeholder='Pin (de 8 a 6 dígitos)'
                        editable={!cargando}
                        value={formData.pass}
                        onChangeText={(val) =>
                            setFormData({
                                ...formData,
                                ['pass']: val,
                            })
                        }
                    />

                    <View style={{
                        display: cargando ? 'none' : 'flex',
                        top:50,
                    }}>
                        
                      
                    <TouchableOpacity onPress={iniciarSesion}>

                            <View style={{ ...styles.Buttom1, ...styles.sombra }}>
                                    
                            <Text style={styles.textc}>Iniciar sesion</Text>
                                    
                        </View>  

                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{
                    backgroundColor: '#C6D166',
                    top:30,
                    height: 30,
                    marginHorizontal: 50,
                    borderRadius: 35,
                    alignItems: "center",
                    justifyContent: "center",

                    }}
                    onPress={() => props.navigation.navigate('Registro')}
                    >
                    <Text
                    style={{
                    color: "#564A4A",
                    fontWeight: 'bold',
                    fontSize: 18,}}>No tienes cuenta, registrate.</Text>
                    </TouchableOpacity>
                            
                    </View>
                    <View style={{ display: cargando ? 'flex' : 'none', top:55, }}>
                        <ActivityIndicator
                            size='large'
                            color='tomato'
                        />
                    </View>
                </View>  
                </View>
            </ImageBackground>
		</View>
	);
};

export default Login;