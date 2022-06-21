import React from 'react';
import { View, Text, TouchableOpacity,} from 'react-native';

import {Octicons} from '@expo/vector-icons'

import { styles } from './styleTablatura';
import { useNavigation } from '@react-navigation/native';

export default function Tablatura({data, onLongPress, onPress}) {
  
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={()=> navigation.navigate('Ver Tablatura', {data: data})} >
      <View style={styles.goTab} >
        <Text style={styles.nomeTab} numberOfLines={1}>{data.title}</Text>
        <Text style={styles.prevTab} numberOfLines={2}>{data.tablature}</Text>
      </View>
      
      <TouchableOpacity style={styles.trash} activeOpacity={.75} onLongPress={onLongPress} onPress={onPress}>
        <Octicons name='trash' size={25} color='#fff'/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}