import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';



import { styles } from './style';
import { MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons'
import { COLORS } from '../../theme/theme';

export default function ProfileComponente(props){
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.firstContainer}>
            <Image source={props.iconLeft} style={styles.iconLeft} />
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <TouchableOpacity onPress={props.onPress}>
            <FontAwesome5 name={props.iconRight} size={30} color={COLORS.black} style={styles.iconRight} />
        </TouchableOpacity>
    </TouchableOpacity>
  );
}