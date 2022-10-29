import { Platform, StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    Heading: {
        fontSize: 32,
        marginTop: 60,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    TextInput: {
        height: 39,
        width: '90%',
        backgroundColor: '#EBEBEB',
        borderRadius: 20,
        paddingLeft: 15,
        marginTop: 20
    },
    TextInputView: {
        display: 'flex',
        alignItems: 'center'
    },
    mainPostView: {
        width: '100%',
        padding: 20,
    
    },
    postTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    postView: {
        alignItems: 'center',

    },
    card: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.06)'
    },
    coverPhoto: {
        width: '100%',
        alignItems: 'center',
        height: 150,
        backgroundColor: 'rgba(0,0,0,0.06)',
        marginBottom: 20,
        borderRadius: 10,
    },
    seemorebtn: {
        top: 40,
        left: '35%',
        fontSize: 12,
        color: "#1e88e5"

    },
    textmain: {
        fontStyle: 'italic', 
        fontSize: 12,
         padding: 10, 
         fontWeight: "bold", 
         fontFamily: Platform.OS === 'ios' ? 'Iowan Old Style' : '' 
    },
    abstracttxt: {
        padding:15,
    },
    spinner: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        top:250
    },
    title:{
       fontStyle:'italic',
       fontSize:25,
       padding:10,
       fontWeight: "bold",
       fontFamily:Platform.OS==='ios'?'Iowan Old Style':''
    },
    desc:{
      
       fontSize:17,
       padding:20,
       
    },
   category:{
       fontSize:20,
       fontFamily:Platform.OS==='ios'?'Iowan Old Style':''
   
   },

});
export default styles;
