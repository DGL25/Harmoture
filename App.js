import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading'
import {useFonts, Montserrat_300Light, Montserrat_400Regular,Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({Montserrat_300Light,Montserrat_400Regular,Montserrat_500Medium,Montserrat_600SemiBold,Montserrat_700Bold,})

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#FB743e'} barStyle={'light-content'} />
      <Routes/>
    </NavigationContainer>
  );
}
