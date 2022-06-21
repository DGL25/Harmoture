import React, {useState, useEffect, useCallback, useRef} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid'
import Toast from 'react-native-toast-message';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import {AntDesign} from '@expo/vector-icons'

import { styles } from './styleNovaTablatura';

export default function NovaTablatura() {
  const [title, setTitle] = useState('')
  const [tablature, setTablature] = useState('')

  const { getItem, setItem } = useAsyncStorage('@harmoture:tablature')

  async function userNovaTablatura(){
    const id = uuid.v4()

    if(title === '' || tablature === ''){
      Toast.show({
        type: 'info',
        text1: 'Preenca todos os campos...'
      })
    }else{
      try {
        const novaTablatura = {
          id,
          title,
          tablature
        }
  
        const response = await getItem()
        const previusData = response ? JSON.parse(response) : []
  
        const data = [...previusData, novaTablatura]
  
        await setItem(JSON.stringify(data))

        setTitle('')
        setTablature('')
  
        Toast.show({
          type: 'success', text1: 'Tablatura criada com sucesso'
        })

        Keyboard.dismiss()
  
        console.log(novaTablatura)
      } catch (error) {
        console.log(error)
  
        Toast.show({
          type: 'error',
          text1: 'Ops! Algo deu errado...'
        })
      }
    }
  }

  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder='Add title' value={title} style={styles.addTitle} placeholderTextColor={'rgba(255,255,255,.5)'} onChangeText={(title)=>setTitle(title)}/>

      <View style={styles.areaAddTab}>
       <TextInput placeholder='Add tablature...' value={tablature} style={[styles.addTitle, styles.addTab]} placeholderTextColor={'rgba(255,255,255,.5)'} onChangeText={(tablature)=>setTablature(tablature)} multiline/>
      </View>
      
      <Toast ref={(ref)=>{Toast.setRef(ref)}} style={styles.msg}/>

      <View style={styles.areaBtns}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={[styles.btnNT, styles.btnBack]}>
          <AntDesign name='back' size={25} color='#fff'/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnNT, styles.btnAdd]} onPress={userNovaTablatura}>
          <AntDesign name='check' size={35} color='#fff'/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}