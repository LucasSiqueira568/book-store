import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { COLORS, SIZES } from '../../theme/theme'

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { styles } from './style';

export default function CartProduct({ navigation }){
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="arrow-back" color={COLORS.black} size={35} style={{ marginLeft: 15 }}/>
            </TouchableOpacity>
            <Text style={styles.title}>Minha Estante</Text>
        </View>
    </View>
  );
}