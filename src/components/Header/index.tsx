import React from "react";

import { View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../theme/theme";

import { styles } from "./style";

export function Header({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => Alert.alert("Desculpe 😪, esta funcionalidade ainda não esta disponível.")}>
          <FontAwesome5
            name="bars"
            color={COLORS.textColor}
            size={28}
            style={{ marginTop: 15, marginLeft: 15 }}
          />
          </TouchableOpacity>
          <Text style={styles.title}>Booklive</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={{
              width: 35,
              height: 35,
              marginRight: 15,
              marginTop: 15,
            }}
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInput}>
        <View style={styles.input}>
          <FontAwesome5
            name="search"
            size={20}
            color={COLORS.grey}
            style={{ marginLeft: 10 }}
          />
          <TextInput
            style={{
              paddingLeft: 10,
              flex: 1,
            }}
            placeholderTextColor={COLORS.grey}
            placeholder="Digite sua pesquisa..."
          />
        </View>
      </View>
    </View>
  );
}
