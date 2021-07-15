import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    inicio:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        bottom: 0,
        color: '#000',
        fontSize: 35,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        borderRadius: 0,
        backgroundColor: '#fff'
    },
    sombra:{
        shadowColor: "#7F5FF0",
        shadowOffset: {
            white: 0,
            height:0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:5,
    },
    tabnav: {
        alignItems: "center",
        justifyContent: "center",
        // no esta instalada la font
        fontFamily :"script-mt-bold",
        left: 10,
        right: 10,
    },
    tabtext: {
        color:"#564A4A",
        fontSize:14,
    },
    google: {
        color:"#564A4A",
        fontWeight: 'bold',
        fontSize: 20,
    },
    textc: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
        
    },
    tarjetainicio: {
        borderColor: '#fff',
        borderWidth: 10,
        padding: 20,
        borderRadius: 0,
        bottom: 0,
    },
    Buttom1: {
        backgroundColor: '#CDC733',
        height: 70,
        marginHorizontal: 10,
        marginVertical:10,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
    },
    Buttom2: {
        backgroundColor: '#fff',
        height: 70,
        marginHorizontal: 10,
        marginVertical:15,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
    },
    barra: {
        position: 'absolute',
        backgroundColor: "#fff",
        borderRadius: 50,
        height: 70,
        marginVertical: 25,
        marginHorizontal: 15,
    },
//---------------------------Dasboarht---------------------------------
    Dasboardcontainer: {
    flex: 1,

    },
    Dasboardslider: {
        flex: 0.80,
        flexDirection: "row",
        
    },

    Dasboardslider2: {
    flex:1.5,
    flexDirection: "column",
    },

    Dasboardslider3: {
    flex:1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30
    },

    textHeaderUser: {
        fontSize: 20,
        fontStyle: "normal",
        justifyContent: "center",
    },
    Dasboardfooter: {
    flex: 3.8,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    //borderBottomEndRadius:75
    
    },
    Dasboardimage: {
    flex: 1,
    resizeMode: "center",
    },
//---------------------------Dasboarh Contenido---------------------------------
    
    
    












    
});

export default styles;