import React, { useState,useLayoutEffect } from 'react';

import {
	ActivityIndicator,
	Alert,
	Button,
	ImageBackground,
    TextInput,
    Text,
	View,
} from 'react-native';
//icono del ojo
import { Feather } from '@expo/vector-icons';
//backend
import firebase from './../../backend/firebase';
//ayudas de mensajes de errores
import errores_mx from './../../helpers/errores_mx'
//estulos
import styles from './../../Styles/styles';

//para ignorar el tiempo
import { LogBox } from 'react-native';



const Registro = (props) =>
{
    useLayoutEffect(() => {
        
        props.navigation.setOptions({
            headerLeft: () => null,
        })
    });
    
	const [verPass, setVerPass] = useState('eye-off');
	const [cargando, setCargando] = useState(false);

	const [formData, setFormData] = useState({
		email: 'vidalcutiti@gmail.com',
		pass: '123456',
		nombre: 'luis Angel Vidal',
	});

	const registrarUsuario = async () => {
		setCargando(true);
		try {
			const nuevoUsuario =
				await firebase.auth.createUserWithEmailAndPassword(
					formData.email,
					formData.pass
				);
            console.log(nuevoUsuario);
            firebase.database
                .collection("usuarios")
                .add({
                    authId: nuevoUsuario.user.uid,
                    nombreCompleto: formData.nombre,
                });
            
            Alert.alert(
                'usuario resgistrado',
                'por favor Validar cuenta e inicia sesión',
                [
                    {
                        text: 'Entendido',
                        onPress:() => props.navigation.navigate('Login'),
                    },
                ]
            );
            //se aggra la foto por defecto al usuario
            await nuevoUsuario.user.updateProfile({
                displayName: formData.nombre,
                photoURL: 'https://firebasestorage.googleapis.com/v0/b/huertoint.appspot.com/o/Avatar%2Fplantas.jpeg?alt=media&token=8ff19263-cb8d-4b69-8354-d35fe92c4d85'
            })

            await nuevoUsuario.user.sendEmailVerification();

			setCargando(false);
		} catch (e) {
			setCargando(false);
            console.log(JSON.stringify(e));
            Alert.alert('ERROR', errores_mx(e.code));
            
		}
	};
    const imagen = {
        uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/pexels-kate-graur-5425692.jpg",
    };
    //para ignorar el tiempo
    LogBox.ignoreLogs(['Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications

    
    



	return (
        
        <View style={styles.inicioRe}>
            
            <ImageBackground source={imagen} style={styles.imagenRE}>
            
            <View style={styles.tarjetaregistro}>
            <Text style={styles.textcRE}>Registro</Text>
            </View>
            <View style={styles.contReg}>
                    
                <TextInput
                    keyboardType='default'
                    maxLength={120}
                    autoCapitalize='words'
                    autoCorrect={true}
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
                    placeholder='Nombre completo'
                    editable={!cargando}
                    value={formData.nombre}
                    onChangeText={(val) =>
                        setFormData({
                            ...formData,
                            ['nombre']: val,
                        })
                    }
                />

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
                    alignItems: 'center',
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

                    <View
                    style={{
                        display: cargando ? 'none' : 'flex',
                        top:50,
                    }}>
                        <Button
                            title='Registrarme'
                            color='tomato'
                            onPress={registrarUsuario}
                            />
                        
                            
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

export default Registro;