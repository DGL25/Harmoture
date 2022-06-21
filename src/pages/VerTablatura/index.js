import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput } from 'react-native';
import { styles } from './styleVerTablatura';
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
    if(param){
        let response = await getItem()
        let data = response ? JSON.parse(response) : []
        
        data.forEach(element => {
          if(element.id === infoTab.id){
            element.title = titulo
            element.tablature = tablatura

            console.log(element)
          }
        });
    }else{
      setTitulo(infoTab.title)
      setTablatura(infoTab.tablature)
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>

      <TextInput value={titulo} editable={editavel} style={styles.title} numberOfLines={1} multiline onChangeText={(t)=> setTitulo(t)}/>

      <View style={{flex: 1, backgroundColor: '#383E56', width: '100%', borderRadius: 5, marginVertical: 25}}>
        <TextInput value={tablatura} editable={editavel} style={styles.tablature} multiline onChangeText={(t)=> setTablatura(t)}/>
      </View>

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