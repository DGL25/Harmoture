import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1, alignItems: 'flex-start', justifyContent: 'center',
        paddingHorizontal: 20, paddingVertical: 25,
        backgroundColor: '#FB743E'
    },
    title:{
        color: '#fff',
        fontSize:31, fontFamily: 'Montserrat_700Bold',
        textShadowColor: 'rgba(0,0,0,.5)',textShadowOffset: {width: 0, height: 2.5}, textShadowRadius: 5,
    },
    tablature:{
        color: '#fff', 
        fontSize: 16, fontFamily: 'Montserrat_300Light',
        padding:15,
        height: '100%',
        textAlignVertical: 'top'
    },
    areaBtns:{
        width: '100%',height: 45,
        alignItems: 'center', justifyContent: 'space-between',flexDirection: 'row'
    },
    btn:{
        width: '45%', height: 45,
        alignItems: 'center', justifyContent: 'center',
        borderRadius: 5
    },
    btnBack:{
        borderColor: '#383E56',borderWidth: 2
    },
    btnEdit:{
        backgroundColor: '#383E56'
    }
})