import React, {useState,useEffect} from 'react';
import styles from "./../../Styles/styles";
import HeaderAcount from '../../componet/HeaderAcount';
import
    {
        View,
        Text,
        ImageBackground,
    } from 'react-native';

const image = {uri: 'http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/monta%c3%b1a.jpg'}
//backend
import firebase from '../../backend/firebase';
//iconos
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Notificaciones = () =>
{
    const [agua, setagua] = useState('');
    const [suelo, setsuelo] = useState('');
    const [luz, setluz] = useState('');
    const [humedad, sethumedad] = useState('');

    const getagua= async() =>
    {
        await firebase.database.collection('cultivos')
            .where(`${firebase.auth.currentUser.uid}.user`, '==', `${firebase.auth.currentUser.uid}`)
            .get()
            .then((snap) =>
            {

                if (snap.size > 0) {

                    snap.forEach((doc) =>
                    {
                    
                        let datacultivo = doc.data();
                        //concatenación con maps //AQUI APRENDIMOS A CONCATENAR EN JS :P
                        //console.log(datacultivo[firebase.auth.currentUser.uid]['agua']['maximo']);
                        firebase.realtime.ref('/sensores/' + firebase.auth.currentUser.uid + '/agua').on('value', snapShot =>
                        {
                            const valorealtimeagua = (snapShot.val());
                            //------------AGUA--------------
                            //console.log(valorealtime.agua)
                            const maxagua = (datacultivo[firebase.auth.currentUser.uid]['agua']['maximo']);
                            const minagua = (datacultivo[firebase.auth.currentUser.uid]['agua']['minimo']);

                            if ((valorealtimeagua) >= (maxagua)) {
                                setagua(
                                    'Exceso de agua, tomar precacione.'
                                )
                            } else if ((valorealtimeagua) <= (minagua)) {
                                setagua(
                                    'Cantidad de agua menor al minimo.'
                                )
                            } else {
                                setagua(
                                    
                                    'Conciones de agua ideales.'
                                )
                            }
                        });
                    });
                }
            }
        );
}
const getaluz= async() =>
{
    await firebase.database.collection('cultivos')
        .where(`${firebase.auth.currentUser.uid}.user`, '==', `${firebase.auth.currentUser.uid}`)
        .get()
        .then((snap) =>
        {
            if (snap.size > 0) {

                snap.forEach((doc) =>
                {
                
                    let datacultivo = doc.data();
                    //concatenación con maps //AQUI APRENDIMOS A CONCATENAR EN JS :P
                    //console.log(datacultivo[firebase.auth.currentUser.uid]['agua']['maximo']);
                    firebase.realtime.ref('/sensores/' + firebase.auth.currentUser.uid + '/luz').on('value', snapShot =>
                    {
                        const valorealtimeluz = (snapShot.val());
                        //------------Luz--------------
                        //console.log(valorealtime.luz)
                        const maxluz = (datacultivo[firebase.auth.currentUser.uid]['luz']['maximo']);
                        const minluz = (datacultivo[firebase.auth.currentUser.uid]['luz']['minimo']);

                    
                        if ((valorealtimeluz) > maxluz) {
                            setluz(
                                'Exceso de luz, precación.'
                            )
                        } else if ((valorealtimeluz) <= (minluz)) {
                            setluz(
                                'Cantidad de luz debajo de minimo.'
                            )
                        } else {
                            setluz(
                                'Condiciones de luz ideales.'
                            )
                        }
                    });
                    
                });
            }
        }
    );
}
const getsuelo= async() =>
{
    await firebase.database.collection('cultivos')
        .where(`${firebase.auth.currentUser.uid}.user`, '==', `${firebase.auth.currentUser.uid}`)
        .get()
        .then((snap) =>
        {
            if (snap.size > 0) {

                snap.forEach((doc) =>
                {
                
                    let datacultivo = doc.data();
                    //concatenación con maps //AQUI APRENDIMOS A CONCATENAR EN JS :P
                    //console.log(datacultivo[firebase.auth.currentUser.uid]['agua']['maximo']);
                    firebase.realtime.ref('/sensores/' + firebase.auth.currentUser.uid + '/suelo').on('value', snapShot =>
                    {
                        const valorealtimeSU = (snapShot.val());

                        //------------suelo--------------
                        //console.log(valorealtime.suelo)
                        const maxsuelo = (datacultivo[firebase.auth.currentUser.uid]['suelo']['maximo']);
                        const minsuelo = (datacultivo[firebase.auth.currentUser.uid]['suelo']['minimo']);

                        if ((valorealtimeSU) >= maxsuelo) {
                            setsuelo(
                                'Exceso de humedad en el suelo.'
                            )
                        } else if ((valorealtimeSU) <= (minsuelo)) {
                            setsuelo(
                                'Falta de humedad en el suelo.'
                            )
                        } else {
                            setsuelo(
                                'Condiciones de humedad del suelo ideales.'
                            )
                        }
                    });

                    
                });
            }
        }
    );
}
const gethumedad = async() =>
{
    await firebase.database.collection('cultivos')
        .where(`${firebase.auth.currentUser.uid}.user`, '==', `${firebase.auth.currentUser.uid}`)
        .get()
        .then((snap) =>
        {
            if (snap.size > 0) {

                snap.forEach((doc) =>
                {
                
                    let datacultivo = doc.data();
                    //concatenación con maps //AQUI APRENDIMOS A CONCATENAR EN JS :P
                    //console.log(datacultivo[firebase.auth.currentUser.uid]['agua']['maximo']);
                    firebase.realtime.ref('/sensores/' + firebase.auth.currentUser.uid + '/humedad').on('value', snapShot =>
                    {
                        const valorealtimeHu = (snapShot.val());
                    
                        //------------humedad--------------
                        //console.log(valorealtime.suelo)
                        const maxhumedad = (datacultivo[firebase.auth.currentUser.uid]['humedad']['maximo']);
                        const minhumedad = (datacultivo[firebase.auth.currentUser.uid]['humedad']['minimo']);
                      
                        if ((valorealtimeHu) > maxhumedad) {
                            sethumedad('HUMEDAD EXCCEDIDA.')
                        } else if ((valorealtimeHu) < (minhumedad)) {
                            sethumedad('FALTA HUMEDAD.')
                        } else {
                            sethumedad('HUMEDAD IDEAL.')
                        }
                    });

                    
                });
            }
        }
    );
}
    useEffect(() =>
    {
        getagua();
        getaluz();
        getsuelo();
        gethumedad();
    },[])
    return (
        <ImageBackground source={image} style={styles.Dasboardimage}>
            <View style={styles.Dasboardcontainer}>
                {/**aqui estan los datos del usuario , se utiliza un headeracount */}
                <HeaderAcount /> 
                <View style={{ ...styles.Dasboardfooter,alignItems:'center'}}>
                    
                    <View style={{flex:1,top:10}}>

                        <View style={{ marginVertical: 10,
                            backgroundColor: "#564A4A",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius:40,
                            elevation: 5,
                            padding:15}}>
                            <Text  style={{color:"#FFF",
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}>
                                
                                <Entypo name="water" size={30} color="#FFF" />{"   "}{agua}</Text>
                        </View>

                        <View style={{ marginVertical: 10,
                            backgroundColor: "#564A4A",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius:40,
                            elevation: 5,
                            padding:15}}>
                            <Text  style={{color:"#FFF",
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}>
                                <Entypo name="light-up" size={30} color="#FFF" />{"   "}{luz}</Text>
                        </View>

                        <View style={{ marginVertical: 10,
                            backgroundColor: "#564A4A",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius:40,
                            elevation: 5,
                            padding:15}}>
                            <Text style={{color:"#FFF",
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}>
                                <Entypo name="air" size={30} color="#FFF" />{"   "}{suelo}</Text>
                        </View>

                        <View style={{
                            marginVertical: 10,
                            backgroundColor: "#564A4A",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius:40,
                            elevation: 5,
                            padding:15
                        }}>
                            <Text style={{color:"#FFF",
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}><FontAwesome5 name="water" size={30} color="#FFF" />{"   "}{humedad}</Text>
                            
                        </View>
                        
                    </View>
                </View>
            </View>

        </ImageBackground>
        
    );
};

export default Notificaciones;