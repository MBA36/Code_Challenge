import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    onPress: {
        borderRadius: 8,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    textButton: {
        fontSize: 18,
        color: 'white',
        textTransform: 'uppercase'
    },
    textButtonDisabled: {
        borderRadius: 8,
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    }
});
export default styles;