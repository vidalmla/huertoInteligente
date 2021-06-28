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
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        borderRadius: 50,
        height: 75,
        marginVertical: 25,
        marginHorizontal: 15,
    },

});

export default styles;