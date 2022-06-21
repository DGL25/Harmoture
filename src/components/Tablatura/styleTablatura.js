//#E45826 ! #383E56
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: 280,height: 125,
        backgroundColor: 'transparent',
        marginVertical: 12.5,
        flexDirection: 'row',alignItems: 'center',
    },
    goTab:{
        backgroundColor: '#383e56',
        width: 255, height: '100%',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 5,
        elevation: 5
    },
    nomeTab:{
        fontSize:21,fontFamily:'Montserrat_500Medium',
        color: '#fff',
    },
    prevTab:{
        fontSize: 10,fontFamily: 'Montserrat_300Light',
        color: '#fff'
    },
    trash:{
        marginLeft: -25,
        width:50, height: 50,
        backgroundColor: '#E45826',
        zIndex: 99,
        alignItems: 'center', justifyContent: 'center',
        borderRadius: 5,
        elevation: 5
    }
})