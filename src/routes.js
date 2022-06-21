import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Home from './pages/Home'
import NovaTablatura from './pages/NovaTablatura'
import VerTablatura from './pages/VerTablatura'
import PesquisarTablatura from './pages/PesquisarTablatura'
import ComoUsar from './pages/ComoUsar'

function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Nova Tablatura' component={NovaTablatura} options={{headerShown:false}}/>
            <Stack.Screen name='Pesquisar Tablatura' component={PesquisarTablatura} options={{headerShown:false}}/>
            <Stack.Screen name='Ver Tablatura' component={VerTablatura} options={{headerShown:false}}/>
            <Stack.Screen name='Como Usar' component={ComoUsar} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Routes