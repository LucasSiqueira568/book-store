import React from 'react';

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

import Button from "../../components/Button";

export default function Signup({ navigation }){
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
      <Image
        style={styles.image}
        source={require("../../assets/signin-image.png")}
      />
    </View>

    <View style={styles.containerButtons}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor={COLORS.primary}
      />
      <TextInput
        style={styles.input}
        placeholder="rodrigo@gmail.com"
        placeholderTextColor={COLORS.primary}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={COLORS.primary}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor={COLORS.primary}
      />

    <Button
      title="CADASTRAR"
      color={COLORS.secondary}
      backgroundColor={COLORS.primary}
      onPress={() => navigation.navigate("Home")}
    />
    </View>
  </View>
  );
}