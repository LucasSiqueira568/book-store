import React, { useState, useEffect} from 'react';

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    StatusBar
} from 'react-native';

import { styles } from './style';
import { COLORS, SIZES } from "../../theme/theme";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from '../../config/firebase'

import Button from "../../components/Button";

export default function Signup({ navigation }){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const creareUserFirebase = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(( userCredential) => {
      var user = userCredential.user;
      navigation.navigate("Home", { idUser: user.uid})
    })
    .catch((error) => {
      setError(true)
      const errorCode = error.code;
      const errorMessage = error.message;
    })

  }
  return (
    <View style={styles.container}>
    <TouchableOpacity
      style={{ position: "absolute" }}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons
        name="arrow-back"
        color={COLORS.black}
        size={35}
        style={{ marginLeft: 15 }}
      />
    </TouchableOpacity>
    <StatusBar backgroundColor="white" />
    <View style={styles.containerImage}>
      <Text style={styles.title}>Cadastre-se</Text>
    </View>

    <View style={styles.containerButtons}>
      <TextInput
        style={styles.input}
        placeholder="E-mail: Ex. rodrigo@gmail.com"
        keyboardType="email-address"
        placeholderTextColor={COLORS.primary}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        placeholderTextColor={COLORS.primary}
        onChangeText={(text) => setPassword(text)}
        />
      {/* <TextInput
        style={[styles.input, {marginBottom: 20}]}
        placeholder="Confirmar senha"
        secureTextEntry={true}
        placeholderTextColor={COLORS.primary}
        onChangeText={(text) => setPassword(text)}
      /> */}

      <View style={{width: '100%', marginBottom: 15, marginLeft: '10%', alignItems: 'flex-start'}}>
        <TouchableOpacity style={{marginRight: '5%'}}>
          <Text style={{color: COLORS.textColor, fontSize: 12}}>Concordo com os termos de uso.</Text>
        </TouchableOpacity>
      </View>

    <Button
      title="CADASTRAR"
      color={COLORS.secondary}
      backgroundColor={COLORS.primary}
      onPress={() => creareUserFirebase()}
    />
    </View>
  </View>
  );
}