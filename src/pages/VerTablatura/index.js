import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { styles } from './styleVerTablatura';
import uuid from 'react-native-uuid';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import {AntDesign} from '@expo/vector-icons'

export default function VerTablatura() {
  const route = useRoute()
  const navigation = useNavigation()
  const { getItem, setItem } = useAsyncStorage('@harmoture:tablature')
  const [editavel, setEditavel] = useState(false)
  const [infoTab, setInfoTab] = useState([])
  const [titulo, setTitulo] = useState(``)
  const [tablatura, setTablatura] = useState(``)

  useEffect(()=>{
    async function handlerTab(){
      const response = await route.params?.data

      setInfoTab(response)

      setTitulo(response.title)
      setTablatura(response.tablature)
    }
    
    handlerTab()
  }, [])

  async function userEdit (param){
    if(titulo !== infoTab.title || tablatura !== infoTab.tablature){
      if(param){
        const id = uuid.v4()

        const response = await getItem()
        const previousData = response ? JSON.parse(response) : []
    
        const data = previousData.filter(tablatures => tablatures.id !== infoTab.id)
        data.push({
          id,
          title: titulo,
          tablature : tablatura
        })
        setItem(JSON.stringify(data))
      }else{
        setTitulo(infoTab.title)
        setTablatura(infoTab.tablature)
      }
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>

      <TextInput value={titulo} editable={editavel} style={[styles.title, {backgroundColor: editavel ? '#383E56' : 'transparent', paddingHorizontal: editavel ? 5 : 0}]} numberOfLines={2} multiline onChangeText={(t)=> setTitulo(t)}/>

      <ScrollView style={{flex: 1, backgroundColor: '#383E56', width: '100%', borderRadius: 5, marginVertical: 5,}}>
        <TextInput value={tablatura} editable={editavel} style={styles.tablature} multiline onChangeText={(t)=> setTablatura(t)}/>
      </ScrollView>

      {
        editavel ? (
          <View style={styles.areaBtns}>
            <TouchableOpacity style={[styles.btn, styles.btnBack]} onPress={()=> {setEditavel(!editavel);userEdit(false)}}>
              <AntDesign name='close' size={30} color='#383E56'/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.btn, styles.btnEdit, {backgroundColor: '#9FB8AD'}]}  onPress={()=> {setEditavel(!editavel);userEdit(true)}}>
              <AntDesign name='check' size={30} color='#fff'/>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.areaBtns}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.btn, styles.btnBack]}>
              <AntDesign name='back' size={30} color='#383E56'/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.btn, styles.btnEdit]} onPress={()=> setEditavel(!editavel)}>
              <AntDesign name='edit' size={30} color='#fff'/>
            </TouchableOpacity>
          </View>
        )
      }
    </SafeAreaView>
  );
}