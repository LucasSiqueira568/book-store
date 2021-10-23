import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
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
          <TouchableOpacity>
            <Text style={{ marginRight: 15, color: COLORS.grey }}>
              Ver todos
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={books}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 15, marginTop: 10 }}
                onPress={() => navigation.navigate("Details", book)}
              >
                <Image
                  source={{ uri: item.url }}
                  style={{ width: 130, height: 200, borderRadius: 5 }}
                />
                <Text
                  style={{
                    fontSize: SIZES.body5,
                    fontFamily: "Roboto_400Regular",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.body3,
                  }}
                >
                  {item.price.toFixed(2).replace(".", ",")}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {/* Header da aplicação */}
        <Header />
        <View style={styles.containerCard}>
          {/* <CardBook /> */}
          {CardBook({book})}
        </View>
      </View>
    </SafeAreaView>
  );
}
