import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FB743E'
    },
    navBar:{
        width: '100%', height: 75,
        alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
        paddingHorizontal: 20,
    },
    comoUsar:{
        color: '#fff',
        fontSize: 18,fontFamily: 'Montserrat_300Light',
        textShadowColor: 'rgba(0,0,0,.5)',textShadowOffset: {width: 0, height: 1},textShadowRadius: 2.5
    },
    title:{
        marginHorizontal: 20,marginBottom:25,
        fontSize: 41, fontFamily: 'Montserrat_600SemiBold',
        color: '#fff', textShadowColor: 'rgba(0,0,0,.5)', textShadowOffset: {width: 0, height: 2.5}, textShadowRadius: 5
    },
    content:{
        flex: 1,alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopEndRadius: 200,
        paddingTop: 12.5
    },
    containerBtnAdd:{
        position: 'absolute',
        bottom:0,
        width: '100%', height: 100,
        alignItems: 'center', justifyContent: 'center',
    },
    btnAddTab:{
        width: 50, height: 50,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#9FB8AD',
        borderRadius: 5,
        elevation:5
    }
})