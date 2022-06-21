import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, FlatList } from 'react-native';
import { styles } from './stylePesquisarTablatura';
import { useNavigation, useRoute } from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import {AntDesign} from '@expo/vector-icons'

import Tablatura from '../../components/Tablatura'

export default function PesquisarTablatura() {
  const navigation = useNavigation()

  const [text, setText] = useState('')
  const [tablatures, setTablatures] = useState([])

  const [empty, setEmpty] = useState(false)

  const { getItem, setItem } = useAsyncStorage('@harmoture:tablature')

  const listTab = [...tablatures]

  listTab.sort((a,b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))

  useEffect(()=>{
    async function loadTabs(){
      const response = await getItem()
      const data = response ? JSON.parse(response) : []

      setTablatures(data)

      setTablatures(data.filter(item => (item.title.toLowerCase().indexOf(text.toLowerCase()) > -1)))
    }

    loadTabs()
  }, [text])

  async function userRemove(id){
    const response = await getItem()
    const previousData = response ? JSON.parse(response) : []

    const data = previousData.filter(tablatures => tablatures.id !== id)
    setItem(JSON.stringify(data))
    setTablatures(data)
    console.log(tablatures)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal:20,marginVertical: 25}}>
        <TextInput placeholder={`Tente 'Do ré mi fá'`} placeholderTextColor='rgba(0,0,0,.5)' style={styles.pes} value={text} onChangeText={(text)=>setText(text)}/>
      </View>

      <View style={styles.content}>
        <FlatList
            data={listTab}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) => <Tablatura data={item} onLongPress={()=> userRemove(item.id)}/>}
            showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.btnBack}>
          <AntDesign name='back' size={25} color='#383E56'/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}