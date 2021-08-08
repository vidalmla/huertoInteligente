import React, { useEffect,useState } from "react";
import
    {

        View,
        ImageBackground,
        FlatList,
        
    } from "react-native";
//datos del user
import HeaderAcount from "./../../componet/HeaderAcount";
//Stilos
import styles from "./../../Styles/styles";
//backent
import firebase from "./../../backend/firebase";

import TarjetaItem from "../../componet/TarjetaItem";

const image = {
    uri: "https://firebasestorage.googleapis.com/v0/b/huertoint.appspot.com/o/cultivos%2Ftierra.png?alt=media&token=d76d2bf2-6251-42ef-9652-f5523aac51fc",
};
  


const ListadoPantas = (props) =>
{

    const [plantas, setplantas] = useState([]);

    const getPlantas = async () =>
    {

        const query =
        await firebase.database
        .collection('cultivos')
        .get();

            if (query.size > 0) {
    
            const arrplantas = [];
            
            query.forEach(doc =>
            {
        
                arrplantas.push({
                    id: doc.id,
                    ...doc.data(),
                })
            });
            setplantas(arrplantas);
            console.log(arrplantas);
            }
    };

    const snapPlantas = () =>
    {
        firebase.database
            .collection("cultivos")
            .onSnapshot((Snapshot) =>
        {
                if (Snapshot.size > 0) {
    
                    const arrplantas = [];
                
                    Snapshot.forEach(doc =>
                    {
            
                        arrplantas.push({
                            id: doc.id,
                            ...doc.data(),
                        })
                    });
                    setplantas(arrplantas);
                    console.log(arrplantas);
                }
        });
     };

    useEffect(() =>
    {
        snapPlantas();
    },[])

    return (
        <ImageBackground resizeMode="cover" source={image} style={styles.Dasboardimage}>
            <View style={styles.Dasboardcontainer}>
                {/**Primer componete de usuario */}

                <HeaderAcount />
                {/**Contenido de todas las plantas */}
                <View style={styles.Dasboardfooter}>
                    
                    <FlatList
                        style={{top:9}}
                        data={plantas}
                        keyExtractor={item => item.id}
                        
                        renderItem={(item) => (
                            <TarjetaItem
                            item={item.item}
                            navigation={props.navigation}
                            
                            />
                        )}
                    />
                    {/*espaciador de abajo del flatlist*/}
                    <View style={{margin:50}}/>
                </View>
            </View>
        </ImageBackground>

    );
};

export default ListadoPantas;
