import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../theme/theme";
import { books } from "../../../data/books";
import { Octicons } from "@expo/vector-icons";

import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";

import { styles } from "./style";

export default function CartProduct({ navigation }) {
  const CardBookEstante = ({ book }) => {
    return (
      <TouchableOpacity
        style={{ width: "100%", alignItems: "center", position: "relative" }}
      >
        <View
          style={{
            // backgroundColor: COLORS.grey,
            width: "90%",
            height: 100,
            marginBottom: 10,
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 80, height: "100%", borderRadius: 5 }}
            source={{ uri: book.url }}
            resizeMode="contain"
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              {book.name}
            </Text>
            <Text
              style={{
                fontSize: SIZES.body4,
                fontWeight: "normal",
                marginBottom: 5,
              }}
            >
              {book.author}
            </Text>

            <View
              style={{ flexDirection: "row", height: 20, flexWrap: "wrap" }}
            >
              <Octicons name="star" color={COLORS.start} size={SIZES.body2} />
              <Octicons name="star" color={COLORS.start} size={SIZES.body2} />
              <Octicons name="star" color={COLORS.start} size={SIZES.body2} />
              <Octicons name="star" color={COLORS.start} size={SIZES.body2} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", right: 30, top: 5 }}
          onPress={() =>
            Alert.alert("Remover Livro", "Deseja mesmo remover este livro?",
            [
              {
                text: "SIM",
                onPress: () => Alert.alert(`O livro ${book.name} foi removido da estante`),
                // style: "cancel",
              },
              {
                text: "NÃO",
                onPress: () => {},
                // style: "cancel",
              },
            ],    {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  "This alert was dismissed by tapping outside of the alert dialog."
                ),
            }
            )}
          
        >
          <Octicons name="x" color={COLORS.black} size={SIZES.body2} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons
            name="arrow-back"
            color={COLORS.black}
            size={35}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Minha Estante</Text>
      </View>

      {/* View que exibe os livros na estante */}

      <View>
        <FlatList
          data={books}
          renderItem={({ item }) => {
            return <CardBookEstante book={item} />;
          }}
          contentContainerStyle={{
            marginTop: 30,
          }}
        />
      </View>
    </View>
  );
}
