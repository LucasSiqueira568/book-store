import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { Header } from "../../components/Header";
import { COLORS, SIZES } from "../../theme/theme";
import { books, books_recomend } from "../../../data/books";

export default function Home({ navigation }) {
  const CardBook = ({ book }) => {
    return (
      <View>
        <TouchableOpacity
          style={{ marginLeft: 15, marginTop: 10 }}
          onPress={() => navigation.navigate("Details", book)}
        >
          <Image
            source={{ uri: book.url }}
            style={{ width: 130, height: 200, borderRadius: 5 }}
          />
          <Text
            style={{
              fontSize: SIZES.body5,
              fontFamily: "Roboto_400Regular",
              marginTop: 5,
            }}
          >
            {book.name}
          </Text>
          <Text
            style={{
              fontSize: SIZES.body3,
              fontWeight: "bold",
            }}
          >
            R$ {book.price.toFixed(2).replace(".", ",")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {/* Header da aplicação */}
        <Header />
        <View style={styles.containerCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.body3,
                marginLeft: 15,
              }}
            >
              Em destaque
            </Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Desculpe 😪, esta funcionalidade ainda não esta disponível."
                )
              }
            >
              <Text style={{ marginRight: 15, color: COLORS.grey }}>
                Ver todos
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 15,
            }}
            data={books}
            renderItem={({ item }) => {
              return <CardBook book={item} />;
            }}
            keyExtractor={(item) => item.id.toString()}
          />
          {/* {CardBook({book})} */}
        </View>
      </View>
    </SafeAreaView>
  );
}
