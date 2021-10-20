import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../containers/theme";
import styles from "./style";

import books from "../../../data/books";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Booklive</Text>
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

      {/* FlatList que trás os dados dos livros */}
      <View>
          <View>
              <Text style={{
                  fontSize: SIZES.h4,
                  marginLeft: 15,
                  marginBottom: 10
              }}>Recem lançados</Text>
          </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={books}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity style={{ marginLeft: 15}}>
                  <Image
                    source={{uri: item.url}}
                    style={{ width: 130, height: 200, borderRadius: 5 }}
                  />
                  <Text style={{
                      fontSize: SIZES.h4,
                      color: COLORS.black
                  }}>{item.name}</Text>
                  <Text>R$ {item.price}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
