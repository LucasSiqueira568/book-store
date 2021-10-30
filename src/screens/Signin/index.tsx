import React from "react";

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../theme/theme";

import { styles } from "./style";

import Button from "../../components/Button";

export default function Signin({ navigation }) {
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
          placeholder="rodrigo@gmail.com"
          placeholderTextColor={COLORS.primary}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={COLORS.primary}
        />

        <View style={{width: '100%', marginBottom: 15, marginTop: 15, alignItems: 'center'}}>
            <TouchableOpacity style={{marginRight: '5%'}}>
                <Text style={{color: COLORS.textColor, fontSize: 12}}>Enqueci minha senha</Text>
            </TouchableOpacity>
        </View>
      <Button
        title="ENTRAR"
        color={COLORS.secondary}
        backgroundColor={COLORS.primary}
        onPress={() => navigation.navigate("Home")}
      />
      <View style={{ alignItems: "center", width: '100%'}}>
          <Text style={{fontSize: SIZES.body3, marginBottom: 10}}>Ou</Text>
          <Button 
            title="CRIAR NOVA CONTA"
            color={COLORS.black}
            backgroundColor={COLORS.primary}
            onPress={() => navigation.navigate("Signup")}
          />
      </View>
      </View>
    </View>
  );
}
