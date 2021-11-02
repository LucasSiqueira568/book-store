import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import firebase from '../../config/firebase'
import ProfileComponente from '../../components/ProfileComponente'

import { styles } from './style';
import { COLORS } from '../../theme/theme';

export default function Settings({ navigation }){

  function logout() {
    firebase.auth().signOut().then(() => {
      navigation.navigate("Signin")

    }).catch((error) => {
    })
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" color={COLORS.black} size={35} style={{ marginLeft: 15 }}/>
          </TouchableOpacity>
          <Text style={styles.title}>Configurações</Text>
          <Text style={[styles.title, {marginRight: 15, color: COLORS.secondary}]}>Perfil</Text>
        </View>

        <View style={styles.containerSettings}>
            <Text style={styles.text}>Configurações da conta</Text>
            <View style={styles.containerElementSettings}>
                <ProfileComponente
                 onPress={() => logout()}
                 iconLeft={require('../../assets/user.png')}
                 title="Perfil"
                 iconRight="chevron-right"
                 />
                 
            </View>
        </View>
    </View>
  );
}