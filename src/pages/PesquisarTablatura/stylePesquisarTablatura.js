import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FB743E',
    },
    pes:{
        width: '100%', height: 45,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal:15,
        fontSize: 16,fontFamily: 'Montserrat_300Light'
    },
    content:{
        flex: 1,alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopEndRadius: 160,
    },
    areaBtn:{
        position: 'absolute',
        bottom:0,
        width: '100%', height: 100,
        alignItems: 'center', justifyContent: 'center',
    },
    btnBack:{
        width: 145, height: 45,
        borderWidth: 1,borderColor: '#383E56',borderRadius: 5,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,.75)',
        zIndex: 99
    }
})