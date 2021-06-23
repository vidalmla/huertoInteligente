import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        flexDirection: "column"
    },
    cuadro: {
      borderColor : '#fff'  
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
});

export default styles;