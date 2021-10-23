import React from "react";

import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../theme/theme";

import { styles } from "./style";

export function Header() {
  return (
    <View>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
          <FontAwesome5
            name="bars"
            color={COLORS.textColor}
            size={28}
            style={{ marginTop: 15, marginLeft: 15 }}
          />
          </TouchableOpacity>
          <Text style={styles.title}>Booklive</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={{
              width: 35,
              height: 35,
              marginRight: 15,
              marginTop: 15,
            }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/62457621?v=4",
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
