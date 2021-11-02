import React from "react";

import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme/theme";

import { styles } from "./style";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <TextInput 
        style={styles.search} 
        placeholder="Buscar por um livro"
        placeholderTextColor={COLORS.grey}
        />

        <View style={styles.containerResults}>
            {/* Dados que serão retornados da pesquisa */}
        </View>
      </View>
    </View>
  );
}
