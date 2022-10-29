import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerbtnlang: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleHeader: {
        color: '#223e4b',
        fontSize: 20,
        marginBottom: 16
    },
    input: {
        paddingHorizontal: 32,
        marginBottom: 16,
        width: '100%',
    },
    error: {
        color: 'red'
    }

});
export default styles;