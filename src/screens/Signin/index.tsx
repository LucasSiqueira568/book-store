import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../theme/theme";
import firebase from "../../config/firebase"
import { styles } from "./style";

import Button from "../../components/Button";
import Loading from "../../components/Loading";

export default function Signin({ navigation }) {

  const [visible, setVisible] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const loadingLogin = () => {
    setVisible(true)
  }

  const loginFirebase = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(( userCredential) => {
      var user = userCredential.user;
      loadingLogin()
      navigation.navigate("Home", { idUser: user.uid})
    })
    .catch((error) => {
      setError(true)
      const errorCode = error.code;
      const errorMessage = error.message;
    })

  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        navigation.navigate("Home", { idUser: user.uid})
      } else {
        // navigation.navigate("WellCome")
      }
    });

  }, [])
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Loading visible={visible}/>
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
      <Text style={styles.title}>Faça login</Text>
      </View>

      <View style={styles.containerButtons}>
        <TextInput
          style={[styles.input, {marginBottom: 10}]}
          placeholder="E-mail"
          value={email}
          placeholderTextColor={COLORS.primary}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          secureTextEntry={true}
          placeholderTextColor={COLORS.primary}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={{width: '100%', marginBottom: 15, marginTop: 15, alignItems: 'center'}}>
            <TouchableOpacity style={{marginRight: '5%'}}>
                <Text style={{color: COLORS.textColor, fontSize: 12}}>Enqueci minha senha</Text>
            </TouchableOpacity>
        </View>
        {email === "" || password === ""
          ?
          <Button
            title="ENTRAR"
            color={COLORS.secondary}
            backgroundColor={COLORS.grey}
            onPress={() => navigation.navigate("Home")}
          />
          
          :
          <Button
          title="ENTRAR"
          color={COLORS.secondary}
          backgroundColor={COLORS.primary}
          onPress={() => loginFirebase()}
        />
        
        }
      <View style={{ alignItems: "center", width: '100%'}}>
          <Text style={{fontSize: SIZES.body3, marginBottom: 10}}>Ou</Text>
         <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
           <Text style={{ fontSize: SIZES.body3}}>Crie uma nova conta aqui</Text>
         </TouchableOpacity>
      </View>
      </View>
    </KeyboardAvoidingView>
  );
}
