import React, { useState}from 'react';
import
    {
        View,
        Text,
        ImageBackground,
        TouchableOpacity,
        Alert,
        TextInput,
        Button,
        ActivityIndicator
    } from 'react-native';
//
import firebase from './../../backend/firebase';

import { Feather } from '@expo/vector-icons';
//permisos de la app
import * as ImagePicker from 'expo-image-picker';


const Cuenta = () =>
{
    //estates para la carga de los datos del usuario
    const [cargando, setCargando] = useState(false);
    const [formData, setFormData] = useState({
        email: firebase.auth.currentUser.email,
        nombre: firebase.auth.currentUser.displayName,
        avatar: firebase.auth.currentUser.photoURL,
        avatarNuevo: false,
    })
//funcion para la galeria
    const getimagenGaleria = async () =>
    {
        //solicitamos el permiso para ingresar a la galeria

        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        //verificar los permisos del user

        if (status === 'granted') {

            //se toma la imagen de la galeri
            const imgGaleri = await ImagePicker.launchImageLibraryAsync({
                //el tipo de la galeria que se puede tomar ya sea imagnes o solo videos
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                //opción si se puede editar la imagen
                allowsEditing: true,
                /**
                 * las opciones de diseño de las imagines
                 * 1:1
                 * 4:3¶
                 * 16:9
                 * 2.35:1
                 */
                aspect: [1, 1],
                quality: 1,
            });
            console.log(imgGaleri);

            if (!imgGaleri.cancelled) {
                setFormData({
                    ...formData,
                    ['avatarNuevo']: true,
                    ['avatar']: imgGaleri.uri,
                });
            }
        }
    };
    const getImagenCamara = async () => {

		const permisoCamara =
			await ImagePicker.requestCameraPermissionsAsync();
		const permisoGaleria =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		/**
		 * Si tenemos ambos permisos
		 */
		console.log(permisoCamara);
		console.log(permisoGaleria);
		if (
			permisoCamara.status === 'granted' &&
			permisoGaleria.status === 'granted'
		) {
			/*
            Tomamos la imgen desde la cámara utilizando
            los mismo parámetros que la galería */
			const imgCamara =
				await ImagePicker.launchCameraAsync({
					mediaTypes:
						ImagePicker.MediaTypeOptions.Images,
					allowsEditing: true,
					aspect: [4, 4],
					quality: 1,
				});

			/*
            Si se lecciono una foto
            */
			if (!imgCamara.cancelled) {
				setFormData({
                    ...formData,
                    ['avatarNuevo']: true,
					['avatar']: imgCamara.uri,
				});
			}
		}
	};



    return (
        <View style={{ flex: 1, }}>
            <View style={{
           alignItems: "center",
           justifyContent: "center",
           marginVertical:20
           }}>
                <Text>
                    Perfil de la Cuenta
                </Text>
            </View>
            <View
            style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal:10
            }}>
                <ImageBackground
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#753422",
                    borderRadius: 100,
                    overflow:'hidden'
                    
                    
                }}
                source ={{uri: formData.avatar}}
                >
                <TouchableOpacity style={{
                    padding: 5,
                    borderWidth: 2,
                    borderColor: "#000",
                    width: '100%',
                    borderRadius: 8,
                    backgroundColor: '#000',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    alignItems: 'center',
                    paddingBottom: 10,
                }}
                onPress=
                {() => Alert.alert
                (
                    'Actializar Avatar',
                    '¿Como quieres Actualizar?',
                    [
                        {
                            text: 'Cancelar',
                            style: 'destructive'
                        },
                        {
                            text: 'Desde Galeria',
                            onPress: getimagenGaleria
                        },
                        {
                            text: 'Desde la camara',
                            onPress: getImagenCamara
                        },
                    
                    ]
                )}>
                    
                <Text style={{color:'#fff'}}>
                    <Feather
                        name="edit"
                        size={24}
                        color="white"
                    />
                    Editar
                </Text>
                </TouchableOpacity>
                </ImageBackground>
                <TextInput
                    keyboardType='default'
                    maxLength={70}
                    autoCapitalize='words'
                    autoCorrect={false}
                    style={{
                        marginHorizontal: 20,
                        marginVertical:10,
                        top:50,
                        width: '100%',
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
                        width: '100%',
                        borderRadius: 7,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderColor: 'green',
                        borderWidth: 2,
                        fontSize: 16,
                    }}
                    placeholder='Correo electrónico'
                    editable={false}
                    value={formData.email}
                    onChangeText={(val) =>
                        
                        setFormData({
                            ...formData,
                            ['email']: val,
                        })
                    }
                />

                <View style={{
                    position: 'absolute',
                    bottom: -100,
                    display: cargando ? 'none' : 'flex',
                    
                }}>
                        
                    <Button
                        title='Guardar cambios'
                        onPress={async() =>
                        {
                            setCargando(true);
                            // Forma de subir archivos a storage
                            if (formData.avatarNuevo) {
                               /**
                                * Notas
                                * paso 1 .- subiremos los datos al internet 
                                *   1,1- verificar que tenermos storas en back
                                * 
                                * ahora si vamos a los pasos
                                * 
                                * generamos la cadena binaria del archivo llamado blob
                                */
                                const blob = await (await fetch(formData.avatar)).blob();
                                //se toma la url debido a que avatar trae el uri

                                /**
                                 * ahora vamos a generar un file para firestore
                                 * 
                                 * usamos 3 parametros
                                 * 1.- contenido binario 
                                 * 2.- nombre del archivo
                                 * 3.- config (tipo del archivo Mime)
                                 */
                                //      [contenido binario],       [_NOMNBRE_ARCHIVO_.JPG],          [configuracion del archivo]
                                const file = new File([blob], `${firebase.auth.currentUser.uid}.jpg`,{type: 'image/jpeg'})
                                //verificamos que el archivo ya no se siga escribiendo 
                                blob.close();

                                /**
                                 * una vez creado el archivo lo subimos a firestore en storage
                                 * 
                                 * se ocupa conocer exactamente donde esta la ubicación de nuestra carpeta de nuestro servicio
                                 * 
                                 * ref()-------> home de mi servicio
                                 * child()----> referencia a un componente hijo
                                 * put() -----> crea un recurso en el servicio a partir de un blob
                                 */

                                const subidaArchivo =
                                    await firebase.storage
                                        .ref()
                                        .child('Avatar')
                                        .child(file.name)
                                        .put(file, file.type);
                                /**
                                 * si la subida es exitosa entonces se busca a 
                                 */

                                if (subidaArchivo.state === 'success') {
                                    /**
                                     * solicitamos la nueva url del user 
                                     */

                                    setFormData({
                                        ...formData, ['avatar']:
                                            await subidaArchivo.ref.getDownloadURL()
                                    });

                                    //actualizamos los datos del usuario
                                    //poner un await en la linea 316
                                    await firebase.auth.currentUser.updateProfile({
                                        displayName:
                                            formData.nombre,
                                        photoURL:
                                            await subidaArchivo.ref.getDownloadURL()
                                        
                                    })

                                    setCargando(false);
                                    setFormData({ ...formData, ['avatarNuevo']: false });
                                    console.log(photoURL);
                                    Alert.alert('Datos Actualizados');
                                }
                            }else {
                            //actualizo el nombre
                            await firebase.auth.currentUser.updateProfile({
                                displayName: formData.nombre
                            });
                                
                                setCargando(false);
                                Alert.alert('Datos Actualizados');
                            }

                        }}                    
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
    );
    
}
export default Cuenta;