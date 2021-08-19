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
        justifyContent: "center"
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        
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
        left: 5,
        right: 5,
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
        borderRadius: 10,
        bottom: 0,
    },
    Buttom1: {
        backgroundColor: '#5C821A',
        height: 70,
        marginHorizontal: 10,
        marginVertical:10,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
    },
    Buttom2: {
        backgroundColor: '#FFF',
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
        marginHorizontal: 40,
        padding:5,
    },
//---------------------------Dasboarht---------------------------------
    Dasboardcontainer: {
    flex: 1,
        
    },
    Dasboardslider: {
        flex: 0.2,
        flexDirection: "row",
        
    },

    Dasboardslider2: {
    flex:1.5,
    flexDirection: "column",
    marginHorizontal:15
    },

    Dasboardslider3: {
    flex:0.8,
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
    flex: 1,
    marginVertical: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    //borderBottomEndRadius:75
    
    },
    Dasboardimage: {
    flex: 1,
    resizeMode: "cover",
    },
//---------------------------Registro---------------------------------
    inicioRe: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    contReg: {
        flex: 2,
        marginVertical:50,
        marginHorizontal: 20,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius:40
        
    },
    imagenRE: {
        flex: 1,
        height: null,
        width: null
    },
    textcRE: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
    },
    tarjetaregistro: {
        borderColor: '#fff',
        borderWidth: 10,
        padding: 20,
        top: 50,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 25,
        alignItems: "center",
    },
    //-----------------------
    tarjetadatos: {
        flex: 0.1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomEndRadius: 40,
        borderBottomLeftRadius: 40,
        marginHorizontal:10,
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        marginTop:0,
        marginBottom: 90,
    },











    
});

export default styles;