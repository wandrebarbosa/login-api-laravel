import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: "#959afa",
    },
    containerHeader: {
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%",
    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#ffffff"
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingStart: "8%",
        paddingEnd: "8%",
    },
    login: {
        fontSize:20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buttonLogin :{
        backgroundColor: "#959afa",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",

    },
    buttonTextLogin: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: "center"
    },
    buttonTextRegister:{
        color: "#a1a1a1"
    }
  });

export default styles