import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1, alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 20,paddingVertical: 25,
        backgroundColor: '#383E56',
        zIndex: -1
    },
    addTitle:{
        width: '100%',height: 45,
        backgroundColor: '#FB743E',
        borderRadius:5,
        color: '#fff',
        fontSize: 21,fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 15,
    },
    areaAddTab:{
        paddingVertical:25,
        flex: 1,
        width: '100%'
    },
    addTab:{
        height: '100%',
        textAlignVertical: 'top',
        padding: 15
    },
    areaBtns:{
        width: '100%', height: 45,
        alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
    },
    btnNT:{
        width: '45%', height: 45,
        borderRadius:5,
        alignItems: 'center', justifyContent: 'center'
    },
    btnBack:{
        borderWidth: 1,
        borderColor: '#FB743E'
    },
    btnAdd:{
        backgroundColor: '#9FB8AD'
    },
})