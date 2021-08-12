import React, {useEffect,useState} from 'react';
import
{
    View,
    Text,
    FlatList,
    ImageBackground,
} from 'react-native';

//stilos
import styles from './../../Styles/styles';
//backend
import firebase from './../../backend/firebase';
//importamos item de mis plantas
import MisplantasItem from '../../componet/MisplantasItem';

//imagen de fondo bonito :)
const image = { uri: "http://dtai.uteq.edu.mx/~luivid195/AWI4.0/HuertoInteligente/image/maceta.jpg" };



const misPlantas = () =>
{
 
    const [misplantas, setmisplantas] = useState(" ");
    
    const getmisplantas = async() =>
    {

        await firebase.database.
        collection('cultivos')
        .where(`${firebase.auth.currentUser.uid}.user`,'==', `${firebase.auth.currentUser.uid}`)
        .get()
        .then((querySnapshot) =>{
            if (querySnapshot.size > 0) {

                const arrmisplantas = [];
                querySnapshot.forEach((doc) => {
                    
                    arrmisplantas.push({
                        ...doc.data()
                    })
                    setmisplantas(arrmisplantas);
                    console.log(arrmisplantas);
    
                });
            }
        }); 
    }

    useEffect(() => {
        getmisplantas();
    },[])
    return (

        <ImageBackground source={image} resizeMode="cover" style={styles.Dasboardimage}>
                <View style={styles.Dasboardcontainer}>
                    <View style={{
                     alignItems: 'center',
                    flexDirection: "column",
                    alignContent:"center",
                    }}>

                    <Text style={styles.text}>Mis Plantas</Text>

                    </View>
                </View>
                <View style={{
                    flex: 6,
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                <FlatList
                    syle={{ top: 9 }}
                    data={misplantas}
                    keyExtractor={item => item.id}

                    renderItem={(item) => (
                        <MisplantasItem
                            item={item.item}
                            navigation={props.navigation}
                        
                        />
                    )}
                />
                </View>
        </ImageBackground>
        
    );
};
 
export default misPlantas;