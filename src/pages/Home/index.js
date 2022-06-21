import React, {useState, useEffect, useCallback, useRef} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import {AntDesign} from '@expo/vector-icons'

import { styles } from './styleHome';
import Tablatura from '../../components/Tablatura';

export default function Home() {
  const navigation = useNavigation()

  const { getItem, setItem } = useAsyncStorage('@harmoture:tablature')
  
  const [tablatures, setTablatures] = useState([])

  useFocusEffect(useCallback(()=>{
    async function HandlerFetchData(){
      const response = await getItem()

      const data = response ? JSON.parse(response) : []

      setTablatures(data)
    }

    HandlerFetchData()
  }, []))

  const listTab = [...tablatures]

  listTab.sort((a,b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))

  async function userRemove(id){
    const response = await getItem()
    const previousData = response ? JSON.parse(response) : []

    const data = previousData.filter(tablatures => tablatures.id !== id)
    setItem(JSON.stringify(data))
    setTablatures(data)
    console.log(tablatures)

    Toast.show({
      type: 'success',
      text1: 'Tablatura apagada!'
    })
  }

  function alertRemove(){
    Toast.show({
      type: 'info',
      text1: 'Precione e segure para apagar'
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Como Usar')}>
          <Text style={styles.comoUsar}>Como usar?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Pesquisar Tablatura', tablatures)}>
          <AntDesign name='search1' size={35} color='#fff'/>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Tablaturas</Text>

      <Toast ref={(ref)=>{Toast.setRef(ref)}} style={styles.msg}/>

      <View style={styles.content}>

          {
            tablatures.length === 0 && (
              <Text style={{top: '40%', color: 'rgba(0,0,0,.25)', fontSize: 18, fontFamily: 'Montserrat_300Light'}}>Crie uma nova tablatura</Text>
            )
          }

          <FlatList
            data={listTab}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) => <Tablatura data={item} onLongPress={()=> userRemove(item.id)} onPress={()=> alertRemove()}/>}
            showsVerticalScrollIndicator={false}
          />
      </View>

      <View style={styles.containerBtnAdd}>
        <TouchableOpacity style={styles.btnAddTab} onPress={() => navigation.navigate('Nova Tablatura')}>
          <AntDesign name='plus' size={35} color='#fff'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}