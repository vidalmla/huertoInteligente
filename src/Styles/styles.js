import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontFamily: "",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
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
        left: 10,
        right: 10,
    },
    tabtext: {
        color:"#564A4A",
        fontSize:14,
    }
});

export default styles;