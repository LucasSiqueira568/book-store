import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../containers/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

import { books, books_recomend } from "../../../data/books";

export default function Home() {
  const HeaderBook = () => {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.title}>Booklive</Text>
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
      </>
    );
  };

  const CardBookDestaque = () => {
    return (
      <TouchableOpacity style={styles.cardDestaque}>
        <View style={styles.card}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
            source={require("../../../src/assets/banner-harry-potter.jpg")}
          />
          <Text
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              color: COLORS.secondary,
              fontSize: SIZES.h1,
              fontWeight: "bold",
            }}
          >
            Harry Potter
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 50,
              left: 10,
              color: COLORS.secondary,
              fontSize: SIZES.h4,
            }}
          >
            Comece a ler agora
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = () => {
    return (
      <View>
        <View>
          <Text
            style={{
              fontSize: SIZES.h4,
              marginLeft: 15,
              // marginBottom: 10,
            }}
          >
            Em destaque
          </Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={books}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                }}
              >
                <TouchableOpacity style={{ marginLeft: 15, marginBottom: 15 }}>
                  <Image
                    source={{ uri: item.url }}
                    style={{ width: 130, height: 200, borderRadius: 5 }}
                  />
                  <Text
                    style={{
                      fontSize: SIZES.body3,
                      color: COLORS.black,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: SIZES.body5,
                    }}
                  >
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* Header da aplicação */}
        {HeaderBook()}
        {CardBookDestaque()}

        {/* FlatList que trás os dados dos livros recem lançados*/}
        <ScrollView>
          {renderItem()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
